function drawTotals(id, bars) {
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext("2d");

    canvas.width = 100;
    canvas.height = 100;

    ctx.fillStyle = "#1463FF";

    for (let bar of bars) {
        ctx.beginPath();
        ctx.roundRect(bar.x, 90 - bar.height, 9, bar.height, 10);
        ctx.fill();
    }
}

drawTotals("income", [
    { x: 0, height: 30 },
    { x: 20, height: 50 },
    { x: 40, height: 40 },
    { x: 60, height: 50 },
    { x: 80, height: 70 }
]);

drawTotals('expense', [
    { x: 0, height: 50 },
    { x: 20, height: 60 },
    { x: 40, height: 45 },
    { x: 60, height: 40 },
    { x: 80, height: 30 }
])
//
