// Interation 1: Soldier
class Soldier {
    constructor(health, strength) { //should receive 2 arguments (health & strength)
        this.health = health; //should receive the health property as its 1st argument
        this.strength = strength; //should receive the strength property as its 2nd argument
    }

    attack() { //should be a function and should receive 0 arguments
        return this.strength; //should return the strength property of the Soldier
    }

    receiveDamage(damage) { //should be a function and should receive 1 argument (the damage)
        this.health -= damage; //should remove the received damage from the health property
    } //shouldn't return anything
}

// Iteration 2: Viking
class Viking extends Soldier { //Viking should extend Soldier
    constructor(name, health, strength) {
        super(health, strength); //should receive the health property as its 2nd argument and strength property as its 3rd argument
        this.name = name; //should receive the name property as its 1st argument
        }
//attack() method no need to re-implement it
    receiveDamage(damage)  {//should be a function and should receive 1 argument (the damage)
        this.health -= damage; //should remove the received damage from the health property
        if (i=0; i<this.health; i++) {
            return (`${this.name} has received ${damage} points of damage`)
        } else if (i=0; i>this.health; i++) { //if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
            return (`${this.name} has died in act of combat`) //if the Viking dies, it should return "NAME has died in act of combat"
        }
    }

    battleCry() { //should be a function and should receive 0 arguments
        return "Odin Owns You All!" //should return "Odin Owns You All!"
    }
}

// Iteration 3: Saxon
class Saxon extends Soldier { //Saxon should extend Soldier
    receiveDamage(damage) {//should be a function and should receive 1 argument (the damage)
        this.health -= damage; //should remove the received damage from the health property
        if (i=0; i<this.health; i++) { //if the Saxon is still alive
            return (`A Saxon has received ${damage} points of damage`)
        } else if (i=0; i>this.health; i++) { //if the Saxon dies
            return (`A Saxon has died in combat`)
        }
    }
}

