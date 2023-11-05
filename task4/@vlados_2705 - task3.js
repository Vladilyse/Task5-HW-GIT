class Warrior {
    constructor() {
        this.level = 1;
        this.experience = 100;
        this.rank = "Pushover";
        this.achievements = [];
    }

    _level() {
        return this.level;
    }

    rank() {
        return this.rank;
    }

    experience() {
        return this.experience;
    }

    achievements() {
        return this.achievements;
    }

    training(trainingInfo) {
        const [description, expPoints, minLevel] = trainingInfo;
        if (this.level >= minLevel) {
            this.experience += expPoints;
            this.achievements.push(description);
            return description;
        } else {
            this.achievements.push(description);
            return "Not strong enough";
        }
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const levelDifference = enemyLevel - this.level;

        if (levelDifference >= 5 && this.rank !== "Greatest") {
            return "You've been defeated";
        }

        const expDiff = (this.level === enemyLevel) ? 10 :
            (this.level - enemyLevel === 1) ? 5 :
                (this.level - enemyLevel >= 2) ? 0 :
                    20 * levelDifference * levelDifference;

        this.experience += expDiff;
        if (this.experience > 10000) {
            this.experience = 10000;
        }

        if (this.level < 100) {
            while (this.experience >= this.level * 100) {
                this.level++;
                if (this.level % 10 === 0) {
                    this.rank = this.calculateRank();
                }
            }
        }

        if (this.rank === "Greatest") {
            this.level = 100;
        }

        if (expDiff === 0) {
            return "Easy fight";
        } else if (expDiff === 5 || expDiff === 10) {
            return "A good fight";
        } else {
            return "An intense fight";
        }
    }

    calculateRank() {
        const rankTiers = [
            "Pushover", "Novice", "Fighter", "Warrior", "Veteran",
            "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"
        ];

        return rankTiers[Math.floor(this.level / 10)];
    }
}const bruce_lee = new Warrior();
bruce_lee.battle(1);
console.log(bruce_lee.level);