module.exports = {
    name: 'clear',
    description: 'Clear messages!',
    async execute(message, args){
        if(!args[0]) return message.reply('Please enter the amount of messages you want to clear!')
        if(!args[0]) return message.reply('Please enter a vaild number')

        if(!args[0] > 100) return message.reply('You cannot delet more than 100 messages!')
        if(!args[0] < 1) return message.reply('You must delete at least 1 message!')

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        });
    }
}