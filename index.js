const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "bot") {
        if (args[0] === "sucks") {
            message.channel.send(`rude`);
        }
        else if (args[0] === "rocks") {
            message.channel.send(`tank yoo`);
        }
        else {
            message.channel.send(`Oopsie`);
        }
    }  

    else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.channel.send(`The sum of all the arguments you provided is ${sum}!`);
    }

    else if (command === "roll") {
        var count = 1;
        var total = 0;
        if(args[1] != null) count = args[1];
        for(var i = 0; i < count; i++){
                switch(args[0]) {
                    case "d4": {
                        total += rollD4(message);
                        break;
                    }
                    case "d6": {
                        total += rollD6(message);
                        break;
                    }
                    case "d8": {
                        total += rollD8(message);
                        break;
                    }
                    case "d10": {
                        total += rollD10(message);
                        break;
                    }
                    case "d12": {
                        total += rollD12(message);
                        break;
                    }
                    case "d20": {
                        total += rollD20(message);
                        break;
                    }
                    case "d100": {
                        total += rollD100(message);
                        break;
                    }
                    default: {
                        message.channel.send(`Invalid Option`);
                    }

            }
        }
        if(count > 1) message.channel.send(`Total: ${total}`);
    }

    else if (command === "avatar") {
        // Send the user's avatar URL
        message.channel.send(message.author.displayAvatarURL());
    }

    else if (command === "info") {
        message.channel.send(`
            **MAIN COMMANDS SO FAR**\n
        **$roll (d4, d6, d8, d10, d12, d20, d100) [number of rolls]** -
        generates a random number for the corresponding die. Gives a total for multi roll commands 
        Example: $roll d6 2 will roll twice and give total.\n
        **$avatar** - returns profile picture of user
        Soon to come - @USER to get profile pic of other users\n
        **$sum [numbers]** - adds numbers together, useful for adding die rolls
        Example: "$sum 4 9 20" will return 33.`);
    }
});  

client.login('ODMwNjgwOTc5NzY0NTQzNDkx.YHKN8g.n1_HZ_SI44YcfzSjk0u4amyIksM'); 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function rollD4(message) {
    const result = getRandomInt(4) + 1;
    message.channel.send(`You rolled a ${result}!`);
    return result;
}

function rollD6(message) {
    const result = getRandomInt(6) + 1;
    message.channel.send(`You rolled a ${result}!`);
    return result;
}

function rollD8(message) {
    const result = getRandomInt(8) + 1;
    message.channel.send(`You rolled a ${result}!`);
    return result;
}

function rollD10(message) {
    const result = getRandomInt(10) + 1;
    message.channel.send(`You rolled a ${result}!`);
    return result;
}

function rollD12(message) {
    const result = getRandomInt(12) + 1;
    message.channel.send(`You rolled a ${result}!`);
    return result;
}

function rollD20(message) {
    const result = getRandomInt(20) + 1;
    if(result === 20){
        message.channel.send(`You rolled a ${result}! GG :sunglasses:`);
    }
    else if(result > 0 && result < 20){
        message.channel.send(`You rolled a ${result}!`);
    }
    else {
        message.channel.send(`Something went wrong...`);
    }
    return result;
}

function rollD100(message) {
    const result = getRandomInt(100) + 1;
    //const result = 100;
    if(result === 100){
        message.channel.send(`You rolled a ${result}! Lucky duck :duck:`);
    }
    else if(result === 69) {
        message.channel.send(`You rolled a ${result}! Nice`);
    }
    else if((result > 0 && result < 69) || (result > 69 && result < 100)){
        message.channel.send(`You rolled a ${result}!`);
    }
    else {
        message.channel.send(`Something went wrong...`);
    }
    return result;
}