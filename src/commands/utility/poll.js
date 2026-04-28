module.exports = {
name: "poll",
execute(client, message, args) {
    const question = args.join(" ");
    if (!question) return message.reply("Give a question");

    message.channel.send(`📊 Poll: ${question}\n👍 Yes | 👎 No`);
}
};
