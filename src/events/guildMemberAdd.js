module.exports = (client) => {
client.on("guildMemberAdd", member => {
    const channel = member.guild.systemChannel;
    if (!channel) return;

    channel.send(`👋 Welcome ${member.user.tag} to **${member.guild.name}**!`);
});
};
