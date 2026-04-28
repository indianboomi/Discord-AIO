module.exports = {
name: "ban",
execute(client, message, args) {
    if (!message.member.permissions.has("BanMembers")) return;

    const user = message.mentions.members.first();
    if (!user) return message.reply("Mention a user");

    user.ban();
    message.channel.send(`${user.user.tag} was banned`);
}
};
