var monkey = document.getElementById("monkey");
var cactus = document.getElementById("cactus");
var flag = false;

function flagg() {
    flag = true;
    jump();
}
function jump() {
    if (flag)
        if (monkey.classList != "animate") {
            monkey.classList.add("animate")
            setTimeout(function () {
                monkey.classList.remove("animate")
            }, 500);
        }
}

var checkDead = setInterval(function () {
    var monkeyBottom =
        parseInt(window.getComputedStyle(monkey).getPropertyValue("bottom"));

    var cactusLeft =
        parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft <= 40 + 48 && cactusLeft >= 40 &&
        (monkeyBottom >= 0 || monkeyBottom == -30) && monkeyBottom < 16 && flag) {
        alert("You killed the monkey :(");
        cactus.style.animation = "none";
        flag = false;
    }

}, 5);