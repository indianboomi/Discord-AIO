module.exports = (client) => {
client.on("guildBanAdd", async (ban) => {
    const { guild, user } = ban;

    const logs = await guild.fetchAuditLogs({ type: 22, limit: 1 });
    const entry = logs.entries.first();

    const executor = entry?.executor;

    const channel = guild.systemChannel;
    if (!channel) return;

    channel.send(`🔨 ${user.tag} was banned by ${executor ? executor.tag : "Unknown"}`);
});
};
