const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const Discord = require('discord.js');

const { argv } = yargs(hideBin(process.argv))
    .option('secret', {
        alias: 's',
        type: 'string',
        description: 'Client secret for the Test Discord Bot to authenticate with'
    });

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(argv.secret)
    .then(response => console.log(`BigBot successfully logged into Test App Server: ${response}`))
    .catch(error => console.error(`BigBot was unable to login to Test App Server: ${error}`));
