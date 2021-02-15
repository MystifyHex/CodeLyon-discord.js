const Discord = require('discord.js')

module.exports = {
    name: "builder",
    description: "make embed",

    async execute(message,args, cmd, client, Discord){
        if(!message.member.hasPermission('MANNAGE_MESSAGES')) return // if the member does not have permissions to mannage messages, return/stop reading the code.
        let title = args[0] // args[0] is the first word or number after the command name
        let color = args[1] 
        let description = args.slice(2).join(" ") // args.slice(2).join(" ") means we're taking all the arguments including and after the second argument. An argument is just a word or number.
        const error = new Discord.MessageEmbed() 
        .setColor('RANDOM')
        .setTitle('**❌ERROR INVALID ARGS**')
        .setDescription('`{prefix}embed, title(one word), color(hex code or basic colors in caps; i.e(YELLOW), description(embed body))`')

        if(!title) return message.channel.send(error) // ! means no, so if there's no title, return and send the error embed
        if(!color) return message.channel.send(error)
        if(!description) return message.channel.send(error)


        const embed = new Discord.MessageEmbed()
        .setTitle(`**${title}**`)
        .setColor(color)
        .setDescription(description)
        .setFooter(`Embed created by ${message.author.username}`)
        message.delete() // this deletes the command

        message.channel.send(embed)
    }
}