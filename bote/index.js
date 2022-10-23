// https://api.telegram.org/bot5659086876:AAHNfsIEyzsb33CcG935YMgYGSUxntRMbhU/getUpdates
// https://api.telegram.org/bot5659086876:AAHNfsIEyzsb33CcG935YMgYGSUxntRMbhU/sendMessage?chat_id=939574008&text=hi_i_am_bot
const TelegramBot = require('node-telegram-bot-api');
const token = '5659086876:AAHNfsIEyzsb33CcG935YMgYGSUxntRMbhU';
const bot = new TelegramBot(token,{polling:true})
bot.on('message', msg =>{
    const {id:id,first_name: userName} = msg.chat;

    if (/Привет/gi.test(msg.text)) {
        bot.sendMessage(id, `Привет ${userName}`);
    }
});