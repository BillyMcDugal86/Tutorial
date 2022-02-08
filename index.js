const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client =new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const newgameChannelId = "940350530000154734"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(newgameChannelId).send({
        content: `<@${member.id}> Welcome to the game!`,
        files: [img]
    })    
})

client.login(process.env.TOKEN)