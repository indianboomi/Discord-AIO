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

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    }

    if (message.content === '!smpstatus') {
        const util = require('minecraft-server-util');

        try {
            const res = await util.status(process.env.MC_HOST, {
                port: parseInt(process.env.MC_PORT)
            });

            message.reply(`🟢 Server is online!\nPlayers: ${res.players.online}/${res.players.max}`);
        } catch (err) {
            message.reply('🔴 Server is offline!');
        }
    }
});

client.login(process.env.TOKEN);
