import { Client, MessageMedia } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import fs from 'fs';
import path from 'path';

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'edit') {
        const videosDir = 'https://telegra.ph/file/68585c7f1a688185d94c8.mp4'; // ضع هنا مسار مجلد الفيديوهات
        const files = fs.readdirSync(videosDir);
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const media = MessageMedia.fromFilePath(path.join(videosDir, randomFile));
        await client.sendMessage(msg.from, media);
    }
});

client.initialize();