function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetTotalCost = Math.floor(lostFights / 2) * helmetPrice;
    let swordTotalCost = Math.floor(lostFights / 3) * swordPrice;
    let shieldTotalCost = Math.floor(lostFights / 6) * shieldPrice;
    let armorTotalCoast = Math.floor(lostFights / 12) * armorPrice;
    let expenses = helmetTotalCost + swordTotalCost + shieldTotalCost + armorTotalCoast;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)