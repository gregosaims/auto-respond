const discord = require('discord.js');
const client = new discord.Client();

client.on('message', message => {
    if (message.author.id !== '8717') return;
    message.react(':hardchat:');
});

client.login(process.env.BOT_TOKEN);
