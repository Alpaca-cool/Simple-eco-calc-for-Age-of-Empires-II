let foodCostInput = document.getElementById("unitcostFood");
let woodCostInput = document.getElementById("unitcostWood");
let goldCostInput = document.getElementById("unitcostGold");
let stoneCostInput = document.getElementById("unitcostStone");
let timeInput = document.getElementById("production-time");
let resDiv = document.querySelector(".result");

let resoursesObject = {
    hunt: 0.408,
    herd: 0.330,
    berry: 0.310,
    farm: 0.319,
    shoreFishShip: 0.429,
    deepFishShip: 0.487,
    trapFishShip: 0.206,
    tree: 0.388,
    gold: 0.379,
    relic: 0.500,
    stone: 0.359
}

let unitsObject = {
    villager: {
        food: 50,
        wood: 0,
        gold: 0,
        stone: 0,
        time: 25
    },
    militia: {
        food: 60,
        wood: 0,
        gold: 20,
        stone: 0,
        time: 21
    },
    spearman: {
        food: 35,
        wood: 25,
        gold: 0,
        stone: 0,
        time: 22
    },
    eagle: {
        food: 20,
        wood: 0,
        gold: 50,
        stone: 0,
        time: 35
    },
    condottiero: {
        food: 50,
        wood: 0,
        gold: 35,
        stone: 0,
        time: 18
    },
    huskarl: {
        food: 52,
        wood: 0,
        gold: 26,
        stone: 0,
        time: 16 //16 castle 13 barracks
    },
    archer: {
        food: 0,
        wood: 25,
        gold: 45,
        stone: 0,
        time: 35
    },
    skirmisher: {
        food: 25,
        wood: 35,
        gold: 0,
        stone: 0,
        time: 22
    },
    cavalryArcher: {
        food: 0,
        wood: 40,
        gold: 60,
        stone: 0,
        time: 34
    },
    handCannoneer: {
        food: 45,
        wood: 0,
        gold: 50,
        stone: 0,
        time: 34
    },
    slinger: {
        food: 30,
        wood: 0,
        gold: 40,
        stone: 0,
        time: 25
    },
    genitour: {
        food: 50,
        wood: 35,
        gold: 0,
        stone: 0,
        time: 25
    },
    scoutCavalry: {
        food: 80,
        wood: 0,
        gold: 0,
        stone: 0,
        time: 30
    },
    knight: {
        food: 60,
        wood: 0,
        gold: 75,
        stone: 0,
        time: 30
    },
    camelRider: {
        food: 55,
        wood: 0,
        gold: 60,
        stone: 0,
        time: 22
    },
    battleElephant: {
        food: 120,
        wood: 0,
        gold: 70,
        stone: 0,
        time: 24
    },
    tarkan: {
        food: 60,
        wood: 0,
        gold: 60,
        stone: 0,
        time: 14 //14 Castle 21 Stable
    },
    steppeLancer: {
        food: 70,
        wood: 0,
        gold: 45,
        stone: 0,
        time: 24
    },
    batteringRam: {
        food: 0,
        wood: 160,
        gold: 75,
        stone: 0,
        time: 36
    },
    mangonel: {
        food: 0,
        wood: 160,
        gold: 135,
        stone: 0,
        time: 46
    },
    scorpion: {
        food: 0,
        wood: 75,
        gold: 75,
        stone: 0,
        time: 30
    },
    bombardCannon: {
        food: 0,
        wood: 225,
        gold: 225,
        stone: 0,
        time: 56
    },
    siegeTower: {
        food: 0,
        wood: 200,
        gold: 160,
        stone: 0,
        time: 36
    },
    monk: {
        food: 0,
        wood: 0,
        gold: 100,
        stone: 0,
        time: 51
    },
    missionary: {
        food: 0,
        wood: 0,
        gold: 100,
        stone: 0,
        time: 51
    },
    tradeCart: {
        food: 0,
        wood: 100,
        gold: 50,
        stone: 0,
        time: 51
    },
    petard: {
        food: 65,
        wood: 0,
        gold: 20,
        stone: 0,
        time: 25
    },
    trebuchet: {
        food: 0,
        wood: 200,
        gold: 200,
        stone: 0,
        time: 50
    },
    fishingShip: {
        food: 0,
        wood: 75,
        gold: 0,
        stone: 0,
        time: 40
    },
    transportShip: {
        food: 0,
        wood: 125,
        gold: 0,
        stone: 0,
        time: 46
    },
    tradeCog: {
        food: 0,
        wood: 100,
        gold: 50,
        stone: 0,
        time: 36
    },
    galley: {
        food: 0,
        wood: 90,
        gold: 30,
        stone: 0,
        time: 60
    },
    fireGalley: {
        food: 0,
        wood: 75,
        gold: 45,
        stone: 0,
        time: 65
    },
    demolitionRaft: {
        food: 0,
        wood: 70,
        gold: 50,
        stone: 0,
        time: 45
    },
    cannonGalleon: {
        food: 0,
        wood: 200,
        gold: 150,
        stone: 0,
        time: 46
    },
    longboat: {
        food: 0,
        wood: 84, //84 castle age, 80 imperial
        gold: 42, //42 castle age, 40 imperial
        stone: 0,
        time: 25
    },
    turtleShip: {
        food: 0,
        wood: 152,
        gold: 180,
        stone: 0,
        time: 50
    },
    caravel: {
        food: 0,
        wood: 90,
        gold: 34,
        stone: 0,
        time: 36
    },
}

function calcVills() {
    let foodCost = 0;
    let woodCost = 0;
    let goldCost = 0;
    let stoneCost = 0;
    let time = timeInput.value;

    foodCost = foodCostInput.value;
    woodCost = woodCostInput.value;
    goldCost = goldCostInput.value;
    stoneCost = stoneCostInput.value;

    let inSecFood = foodCost / time;
    let inSecWood = woodCost / time;
    let inSecGold = goldCost / time;
    let inSecStone = stoneCost / time;

    let villsStone = inSecStone / resoursesObject.stone;
    let villsWood = inSecWood / resoursesObject.tree;
    let villsFarm = inSecFood / resoursesObject.farm;
    let villsGold = inSecGold / resoursesObject.gold;

    resDiv.innerHTML = `<p>Farmers: ${villsFarm.toFixed(2)}</p>`;
    resDiv.innerHTML += `<p>Gold miners: ${villsGold.toFixed(2)}</p>`;
    resDiv.innerHTML += `<p>Stone miners: ${villsStone.toFixed(2)}</p>`;
    resDiv.innerHTML += `<p>Lumberjacks: ${villsWood.toFixed(2)}</p>`;
}

Array.from(document.querySelectorAll("input")).forEach(e => {
    e.onchange = calcVills;
    e.onkeyup = calcVills;
});

Array.from(document.querySelectorAll(".hide-button")).forEach(e => e.onclick = e => {
    e.target.parentNode.children[1].classList.toggle("d-none");
})

Array.from(document.querySelectorAll(".unit-card")).forEach(e => e.onclick = e => {
    let unitName = e.target.id;

    console.log(unitsObject[unitName]);

    foodCostInput.value = unitsObject[unitName].food;
    woodCostInput.value = unitsObject[unitName].wood;
    goldCostInput.value = unitsObject[unitName].gold;
    stoneCostInput.value = unitsObject[unitName].stone;
    timeInput.value = unitsObject[unitName].time;

    calcVills();
})