const util = require('minecraft-server-util');

module.exports = {
    name: 'smpstatus',
    async execute(message) {
        try {
            const res = await util.status(process.env.MC_HOST, {
                port: 25565
            });

            message.channel.send(
                `🟢 SMP Online\n👥 Players: ${res.players.online}/${res.players.max}`
            );
        } catch {
            message.channel.send('🔴 SMP Offline');
        }
    }
};
