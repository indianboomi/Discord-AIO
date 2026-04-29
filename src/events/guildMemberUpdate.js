module.exports = (client) => {
client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (!oldMember.premiumSince && newMember.premiumSince) {
        const channel = newMember.guild.systemChannel;
        if (!channel) return;

        channel.send(`🚀 ${newMember.user.tag} just boosted the server! Thank you! 💜`);
    }
});
};
