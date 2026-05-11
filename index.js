require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Basic command system
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('Pong!');
  }

  if (message.content === '!help') {
    message.reply('Commands: !ping, !help, !clear');
  }

  if (message.content.startsWith('!clear')) {
    message.channel.bulkDelete(5);
  }
});

client.login(process.env.TOKEN);
