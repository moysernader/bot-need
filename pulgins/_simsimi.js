import fetch from 'node-fetch';

function obfuscateFunction(fn) {
    const fnStr = fn.toString();
    const obfuscatedFn = new Function('return ' + fnStr.replace(/_0x(\w+)/g, (match, p1) => `_0x${Math.random().toString(36).substr(2, 5)}`))();
    return obfuscatedFn;
}

const handler = async (context) => {
    const { text, pushName } = context;
    const db = global.db;

    if (db.chats[context.chat].simi) {
        if (/^.*false|disnable|(turn)?off|0/i.test(text)) return;

        let modifiedText = text;

        try {
            const simiResponse = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(modifiedText)}&lc=ar`);
            const simiData = await simiResponse.json();
            if (simiData.success === 'HELLO') return context.reply('lol');
            await context.reply(simiData.success);
        } catch (error) {
            if (modifiedText.includes('hello')) modifiedText = modifiedText.replace('hello', 'HELLO');
            if (modifiedText.includes('hello')) modifiedText = modifiedText.replace('hello', 'HELLO');
            if (modifiedText.includes('هاي')) modifiedText = modifiedText.replace('هاي', 'Hello');

            try {
                const translateResponse = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(modifiedText)}`);
                const translateData = await translateResponse.json();
                const userId = pushName || '1';

                const brainshopResponse = await fetch(`http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=${userId}&msg=${translateData[0][0][0]}`);
                const brainshopData = await brainshopResponse.json();

                const finalTranslateResponse = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=${brainshopData.cnt}`);
                const finalTranslateData = await finalTranslateResponse.json();

                await context.reply(finalTranslateData[0][0][0]);
            } catch (innerError) {
                await context.reply('No sé lo qué estás diciendo. Por favor enseñame.');
            }
        }
        return true;
    }
    return false;
};

export default handler;