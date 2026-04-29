module.exports = {
name: "timeout",
async execute(client, message, args) {

    if (!message.member.permissions.has("ModerateMembers"))
        return message.reply("No permission");

    const user = message.mentions.members.first();
    const seconds = args[1];

    if (!user || !seconds)
        return message.reply("Usage: !timeout @user 60");

    const time = parseInt(seconds) * 1000;

    await user.timeout(time, "Timeout by bot");

    message.channel.send(`⏳ ${user.user.tag} timed out for ${seconds}s`);
}
};
