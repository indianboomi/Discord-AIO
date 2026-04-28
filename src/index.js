require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.commands = new Collection();

// Load commands
const commandFolders = fs.readdirSync("./src/commands");
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(f => f.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`./src/commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

// Message handler
client.on("messageCreate", message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    if (command) command.execute(client, message, args);
});

// Events
require("./src/events/ready")(client);
require("./src/events/guildMemberAdd")(client);
require("./src/events/guildMemberRemove")(client);
require("./src/events/guildBanAdd")(client);

client.login(process.env.TOKEN);
