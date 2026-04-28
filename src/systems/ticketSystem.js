module.exports = {
name: "ticket",
async execute(client, message) {
    const channel = await message.guild.channels.create({
        name: `ticket-${message.author.username}`,
        type: 0
    });

    channel.send(`Hello ${message.author}, support will help you soon.`);
}
};
