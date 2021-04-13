const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    
    if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.channel.send(`The sum of all the arguments you provided is ${sum}!`);
    }

    else if (command === "roll") {
                switch(args[0]) {
                    case "d4": {
                        rollD4(message);
                        break;
                    }
                    case "d6": {
                        rollD6(message);
                        break;
                    }
                    case "d8": {
                        rollD8(message);
                        break;
                    }
                    case "d10": {
                        rollD10(message);
                        break;
                    }
                    case "d12": {
                        rollD12(message);
                        break;
                    }
                    case "d20": {
                        rollD20(message);
                        break;
                    }
                    case "d100": {
                        rollD100(message);
                        break;
                    }
                    default: {
                        message.channel.send(`Invalid Option`);
                    }
                }
    }

    else if (command === "drink") {
        rollDrink20(message);
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

client.login(process.env.BOT_TOKEN); 

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

function rollDrink20(message) {
    const result = getRandomInt(20) + 1;
    message.channel.send(`You rolled a ${result}!`);

    switch(result) {
        case 1 :
            message.channel.send(`get fucked kid`);
        break;
        case 2 :
            message.channel.send(`smokes lets go`);
        break;
        case 3 :
            message.channel.send(`hnnngggg`);
        break;
        case 4 :
            message.channel.send(`fuck`);
        break;
        case 5 :
            message.channel.send(`yared dijon`);
        break;
        case 6 :
            message.channel.send(`ranch`);
        break;
        case 7 :
            message.channel.send(`why tho`);
        break;
        case 8 :
            message.channel.send(`:weary: :100: :ok_hand:`);
        break;
        case 9 :
            message.channel.send(`https://tenor.com/view/drunk-fall-down-stairs-gif-13180785`);
        break;
        case 10 :
            message.channel.send(`this is 10`);
        break;
        case 11 :
            message.channel.send(`out of ideas`);
        break;
        case 12 :
            message.channel.send(`filler for 12`);
        break;
        case 13 :
            message.channel.send(`jim sucks`);
        break;
        case 14 :
            message.channel.send(`ho yea`);
        break;
        case 15 :
            message.channel.send(`yep`);
        break;
        case 16 :
            message.channel.send(`shit piss cum`);
        break;
        case 17 :
            message.channel.send(`frig off`);
        break;
        case 18 :
            message.channel.send(`legal number`);
        break;
        case 19 :
            message.channel.send(`silver medal`);
        break;
        case 20 :
            message.channel.send(`cash money`);
        break;
        default: message.channel.send(`oopsie tyty did a fuckie wuckie`);
    }
}