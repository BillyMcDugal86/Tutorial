const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTQwNTk2NzY4ODIxODg3MDE2.YgJtAQ.QBw40O6t11tjaFJMXnprgZ1aDyA"

const client =new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "rng start"){
        message.reply("You have started the game")
    }
})
client.login(process.env.TOKEN)