module.exports = (client) => {
client.on("guildMemberRemove", member => {
    const channel = member.guild.systemChannel;
    if (!channel) return;

    channel.send(`👋 ${member.user.tag} left the server.`);
});
};
