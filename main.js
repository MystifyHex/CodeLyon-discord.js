const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Active')
});

client.login('Your Token Here')