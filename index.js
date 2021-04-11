const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('message', msg => {
  msg.reply('pong');
});

client.login('ODMwNjgwOTc5NzY0NTQzNDkx.YHKN8g.n1_HZ_SI44YcfzSjk0u4amyIksM'); 