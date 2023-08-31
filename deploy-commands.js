const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token} = require('./config.json');

//create slash command
const commands = [
    new SlashCommandBuilder().setName('tictactoe').setDescription('Play a game of tic-tac-toe'),
]

//create rest object to interact with discord api
const rest = new REST({ version: '9' }).setToken(token)

//make rest put call
//register all commands (only one currently)
//cathc errors
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands.map(command => command.toJSON()) })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
