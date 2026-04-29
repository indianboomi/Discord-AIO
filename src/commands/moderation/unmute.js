module.exports = {
name: "unmute",
async execute(client, message, args) {

    const role = message.guild.roles.cache.find(r => r.name === "Muted");
    const user = message.mentions.members.first();

    if (!role || !user)
        return message.reply("User or role missing");

    await user.roles.remove(role);

    message.channel.send(`🔊 ${user.user.tag} unmuted`);
}
};
