// SOAL 1

interface IAnyObject {
    [key: string]: any;
}
  
const checkEqual = (a: IAnyObject, b: IAnyObject) => {
    const aKeys: string[] = Object.keys(a); // ["a"]
    const bKeys: string[] = Object.keys(b); // ["a", "b"] = 2
    if (aKeys.length != bKeys.length) return false;
    for (const key in a) {
        if (a[key] != b[key]) return false;
    }
    return true;
}

console.log(checkEqual({a:1}, {a:1}))

// SOAL 2








// SOAL 3












// SOAL 4








// SOAL 5

function factorial(n: number): number {
    // Base case: If n is 0 or 1, return 1 (since 0! = 1 and 1! = 1)
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Example usage:
const input = 5;
const result = factorial(input);
console.log(`${input}! = ${result}`);  // Output: 5! = 120



// SOAL SHOOTING GAME

class Player {
    name: string;
    health: number;
    power: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    // Method to apply the damage to the player's health
    hit(power: number): void {
        this.health -= power;
    }

    // Method to use a random item (increase health or power)
    useItem(item: { health: number; power: number }): void {
        if (item.health) {
            this.health += item.health;
        }
        if (item.power) {
            this.power += item.power;
        }
    }

    // Method to show the player's current status
    showStatus(): string {
        return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
    }
}

class ShootingGame {
    player1: Player;
    player2: Player;
    turn: number;

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
        this.turn = 1;
    }

    // Method to get a random item (health +10 or power +10)
    getRandomItem(): { health: number; power: number } {
        const item = { health: 0, power: 0 };
        const itemChoice = Math.random();
        
        if (itemChoice < 0.33) {
            item.health = 10;
        } else if (itemChoice < 0.66) {
            item.power = 10;
        }

        return item;
    }

    // Method to start the shooting game
    start(): void {
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log(`\n--- Turn ${this.turn} ---`);

            // Show each player's status before shooting
            console.log(this.player1.showStatus());
            console.log(this.player2.showStatus());

            // Random items for each player before shooting
            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            console.log(`${this.player1.name} gets item:`, item1);
            console.log(`${this.player2.name} gets item:`, item2);

            // Players use their random items
            this.player1.useItem(item1);
            this.player2.useItem(item2);

            // Players shoot each other
            console.log(`${this.player1.name} attacks ${this.player2.name} with power ${this.player1.power}`);
            this.player2.hit(this.player1.power);

            console.log(`${this.player2.name} attacks ${this.player1.name} with power ${this.player2.power}`);
            this.player1.hit(this.player2.power);

            // Show each player's status after shooting
            console.log(this.player1.showStatus());
            console.log(this.player2.showStatus());

            // Check for winner
            if (this.player1.health <= 0) {
                console.log(`\n${this.player2.name} wins!`);
                break;
            } else if (this.player2.health <= 0) {
                console.log(`\n${this.player1.name} wins!`);
                break;
            }

            this.turn++;
        }
    }
}

// Example of usage:

// Create players
const player1 = new Player("Kira");
const player2 = new Player("Suga");

// Create game instance
const game = new ShootingGame(player1, player2);

// Start the game
game.start();

