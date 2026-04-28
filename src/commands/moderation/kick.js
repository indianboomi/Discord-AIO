module.exports = {
name: "kick",
execute(client, message, args) {
    if (!message.member.permissions.has("KickMembers")) return;

    const user = message.mentions.members.first();
    if (!user) return message.reply("Mention a user");

    user.kick();
    message.channel.send(`${user.user.tag} was kicked`);
}
};
