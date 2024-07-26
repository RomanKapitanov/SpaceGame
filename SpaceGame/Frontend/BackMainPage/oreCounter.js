function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

var sum_ore_one = 0;
var sum_ore_two = 0;
var sum_ore_three = 0;
var sum_ore_four = 0;
planet.addEventListener('click', function () {

    var counter_ore_one = getRandomNum(15); 
    var counter_ore_two = getRandomNum(10);
    var counter_ore_three = getRandomNum(5); 
    var counter_ore_four = getRandomNum(2); 

    sum_ore_one += counter_ore_one;
    sum_ore_two += counter_ore_two;
    sum_ore_three += counter_ore_three;
    sum_ore_four += counter_ore_four;

    document.getElementById("sum_ore_one").textContent = sum_ore_one;
    document.getElementById("sum_ore_two").textContent = sum_ore_two;
    document.getElementById("sum_ore_three").textContent = sum_ore_three;
    document.getElementById("sum_ore_four").textContent = sum_ore_four;

    document.getElementById("counter_ore_one").textContent = `+ ${counter_ore_one}`;
    document.getElementById("counter_ore_two").textContent = `+ ${counter_ore_two}`;
    document.getElementById("counter_ore_three").textContent = `+ ${counter_ore_three}`;
    document.getElementById("counter_ore_four").textContent = `+ ${counter_ore_four}`;
});