const Rcon = require('rcon-client').Rcon;

async function runCommand(cmd) {
    const rcon = await Rcon.connect({
        host: process.env.MC_HOST,
        port: 25575,
        password: process.env.RCON_PASSWORD
    });

    const result = await rcon.send(cmd);
    await rcon.end();

    return result;
}

module.exports = { runCommand };
