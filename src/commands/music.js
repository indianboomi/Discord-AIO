const play = require("play-dl");

module.exports = {
name: "play",
async execute(client, message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply("Join voice channel");

    const query = args.join(" ");
    const song = await play.search(query, { limit: 1 });
    const stream = await play.stream(song[0].url);

    const connection = require("@discordjs/voice").joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
    });

    const player = require("@discordjs/voice").createAudioPlayer();
    const resource = require("@discordjs/voice").createAudioResource(stream.stream, {
        inputType: stream.type
    });

    player.play(resource);
    connection.subscribe(player);

    message.channel.send(`🎵 Playing: ${song[0].title}`);
}
};
