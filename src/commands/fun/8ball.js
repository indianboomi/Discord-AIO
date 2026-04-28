module.exports = {
name: "8ball",
execute(client, message) {
    const replies = ["Yes", "No", "Maybe", "Definitely", "Ask again"];
    message.channel.send(replies[Math.floor(Math.random() * replies.length)]);
}
};
