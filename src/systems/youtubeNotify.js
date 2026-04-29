const Parser = require("rss-parser");
const parser = new Parser();

const CHANNEL_ID = "YOUR_YOUTUBE_CHANNEL_ID";
const DISCORD_CHANNEL_ID = "YOUR_DISCORD_CHANNEL_ID";

let lastVideo = "";

module.exports = (client) => {
    setInterval(async () => {
        const feed = await parser.parseURL(
            `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
        );

        const latest = feed.items[0];

        if (latest.id !== lastVideo) {
            lastVideo = latest.id;

            const channel = client.channels.cache.get(DISCORD_CHANNEL_ID);
            if (!channel) return;

            channel.send(`📺 New Video Uploaded!\n${latest.title}\n${latest.link}`);
        }
    }, 300000); // every 5 min
};
