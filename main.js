import chalk from 'chalk';
import inquirer from 'inquirer';
// Classes for Player and Opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
// Player name and opponent select
let player = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Please Enter your name:',
});
let opponent = await inquirer.prompt({
    type: 'list',
    name: 'select',
    message: 'Select your opponent',
    choices: ['Vampire', 'Werewolf', 'Human'],
});
// Gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //           Vampire
    if (opponent.select === 'Vampire') {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: 'list',
            name: 'opt',
            message: 'Select your action',
            choices: ['Attack', 'Drink blood', 'Escape into the shadows'],
        });
        if (ask.opt === 'Attack') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} health is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} health is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic('You are defeated, better luck next time!'));
                    process.exit();
                }
            }
            else {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic('You Win!'));
                    process.exit();
                }
            }
        }
        if (ask.opt === 'Drink blood') {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink blood and restore your health. Your health is ${p1.fuel}`));
        }
        if (ask.opt === 'Escape into the shadows') {
            console.log(chalk.red.bold.italic('You escape into the shadows, but the fight continues.'));
            process.exit();
        }
    }
    //           Werewolf
    if (opponent.select === 'Werewolf') {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: 'list',
            name: 'opt',
            message: 'Select your action',
            choices: ['Attack', 'Drink blood', 'Escape into the shadows'],
        });
        if (ask.opt === 'Attack') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} health is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} health is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic('You are defeated, better luck next time!'));
                    process.exit();
                }
            }
            else {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic('You Win!'));
                    process.exit();
                }
            }
        }
        if (ask.opt === 'Drink blood') {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink blood and restore your health. Your health is ${p1.fuel}`));
        }
        if (ask.opt === 'Escape into the shadows') {
            console.log(chalk.red.bold.italic('You escape into the shadows, but the fight continues.'));
            process.exit();
        }
    }
    //          Human
    if (opponent.select === 'Human') {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: 'list',
            name: 'opt',
            message: 'Select your action',
            choices: ['Attack', 'Drink blood', 'Escape into the shadows'],
        });
        if (ask.opt === 'Attack') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} health is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} health is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic('You are defeated, better luck next time!'));
                    process.exit();
                }
            }
            else {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic('You Win!'));
                    process.exit();
                }
            }
        }
        if (ask.opt === 'Drink blood') {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink blood and restore your health. Your health is ${p1.fuel}`));
        }
        if (ask.opt === 'Escape into the shadows') {
            console.log(chalk.red.bold.italic('You escape into the shadows, but the fight continues.'));
            process.exit();
        }
    }
} while (true);
