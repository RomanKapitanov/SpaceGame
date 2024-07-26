const TelegramApi = require("node-telegram-bot-api");
const token = "6970010699:AAHADz0v43jDvnQrGVZThkFH5PjVSMMvRR8";

const bot = new TelegramApi(token, {polling: true});

bot.on("message", async (msg) => {
    console.log(msg);
    if (msg.text === "/start") {
        const gameUrl = "http://127.0.0.1:5500/Frontend/index.html";
        await bot.sendMessage(msg.chat.id, `Вот игра: ${gameUrl}`);
    }
});