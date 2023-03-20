
const minX =  0;
const maxX =  6;
const minY = -1;
const maxY =  1;

function start() {
    const userFunction = document.getElementById('user_function');
    const canvas       = document.getElementById('canvas');

    // todo: how to display? //Function takes an array of Strings //important for quiz: sometime working with functions but they also relly on other functions
    const f = () => Function('x', 'return ' + userFunction.value + ';');
    display(canvas, f());
    
    //on change, either leaving the input field or hitting return
    userFunction.onchange = evt => display(canvas,f());

}

function display(canvas, f) {
    // clear
    const context     = canvas.getContext("2d");
    context.fillStyle = "papayawhip";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw the function plot
    const normx = normalizeX(canvas.width);
    const normy = normalizeY(canvas.height);

    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(normx(minX), normy(f(minX)));

    const stride = (maxX - minX) / 100; // 100 Stützstellen
    for (let x = minX; x <= maxX; x += stride) {
        context.lineTo(normx(x), normy(f(x)));
        context.stroke();
    }
}

const normalizeY = height => y => {
    const scaleFactor = height / (maxY - minY);
    return height - (y - minY) * scaleFactor;
};

const normalizeX = width => x => {
    const scaleFactor = width / (maxX - minX);
    return ( x - minX) * scaleFactor;
};
