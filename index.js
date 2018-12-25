const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Logged in as: " + client.user.tag);
    client.user.setActivity("with you!");
    client.user.setStatus("dnd");
});

client.on("message", () => {
    if (message.content === "!ping") {
        message.channel.send("Pong!");
    }

    if (message.content === "!foo") {
        message.channel.send("Bar!");
    }
});

client.login("YourBotTokenHere");