let handler = m => m;

handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];
    let responses;

    if (/^هلا$/i.test(m.text)) {
        responses = [
            '*هلا بيك يعمري 😩❤‍🔥*'
        ];
    } else if (/^(السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته)$/i.test(m.text)) {
        responses = [
            '*♥🐥وعليكم السلام*',
        ];
    } else if (/^(ميسر|هيغان)$/i.test(m.text)) {
        responses = [
            '*بوت هيغان تحت امرك‼️🐦‍⬛*'
        ];
    } else if (/^(ون بيس عمك|من عمك)$/i.test(m.text)) {
        responses = [
            '*هوي هوي ميسر عمك*'
        ];
    } else if (/^تست$/i.test(m.text)) {
        responses = [
            '*شغال يحب🗿*'
        ];
    } else if (/^(هيغان تحبني|بوت تحبني)$/i.test(m.text)) {
        responses = [
            '*اموت فيك 🌚💔*',
            '*اكرهك🙂💔*',
            '*احبك نص حب 🙃💔*',
        ];
    } else if (/^هيغان تكرهني$/i.test(m.text)) {
        responses = [
            '*ماعاش من يكرهكك حبي 🗿*',
            '*لا بس لا تتعب نفسك لحبك🐦‍⬛*',
            '*ااي اكرهك🙂*'
        ];
    } else if (/^(هاي|هالو)$/i.test(m.text)) {
        responses = [
            '*هالو🌚♥*'
        ];
    } else if (/^بحبك/i.test(m.text)) {
        responses = [
            '*بحبك اكتر🌚❤*'
        ];
    } else if (/^هيغان من وين انت$/i.test(m.text)) {
        responses = [
            'from sudan bro🐦‍⬛'
        ];
    } else if (/^احبك$/i.test(m.text)) {
        responses = [
            '*وانا اكتر🗿❤️‍🔥*'
        ];
    } else if (/^(اخبارك|الحمد لله|عامل اية)$/i.test(m.text)) {
        responses = [
            'الحمدالله'
        ];
    } else if (/^تحبني$/i.test(m.text)) {
        responses = [
            '🌚♥اكيد'
        ];
    } else if (/^هاي$/i.test(m.text)) {
        responses = [
            'هاي'
        ];
    } else if (/^♥$/i.test(m.text)) {
        responses = [
            '*بالزوق*'
        ];
    } else if (/^اهلا$/i.test(m.text)) {
        responses = [
            '*اهلا♥*'
        ];
    } else if (/^(مساء|مساء الخير)$/i.test(m.text)) {
        responses = [
            'مساء الخير'
        ];
    } else if (/^صباح الخير|صباح$/i.test(m.text)) {
        responses = [
            '*صباح الورد♥*'
        ];
    } else if (/^اوامر$/i.test(m.text)) {
        responses = [
            '*لا تنسى ال .*'
        ];
    } else if (/^هيغان$/i.test(m.text)) {
        responses = [
            '*تحت امرك حبي*'
        ];
    } else if (/^اموت فيك$/i.test(m.text)) {
        responses = [
            '*وانا بعد يعمري😭💜*'
        ];
    }

    if (responses) {
        let randomIndex = Math.floor(Math.random() * responses.length);
        conn.reply(m.chat, responses[randomIndex], m);
    }

    return true;
};

export default handler;