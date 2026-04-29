module.exports = {
name: "mute",
async execute(client, message, args) {

    if (!message.member.permissions.has("ManageRoles"))
        return message.reply("No permission");

    let role = message.guild.roles.cache.find(r => r.name === "Muted");

    // Create role if not exists
    if (!role) {
        role = await message.guild.roles.create({
            name: "Muted",
            permissions: []
        });

        message.guild.channels.cache.forEach(channel => {
            channel.permissionOverwrites.create(role, {
                SendMessages: false,
                Speak: false
            });
        });
    }

    const user = message.mentions.members.first();
    if (!user) return message.reply("Mention a user");

    await user.roles.add(role);

    message.channel.send(`🔇 ${user.user.tag} has been muted`);
}
};
