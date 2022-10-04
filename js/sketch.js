let drop_array = []; 
const DROP_NUMBER = 500;
let slider;

function setup() {
    createCanvas(800, 800);
    for(let i=0; i<DROP_NUMBER; i++){
        drop_array.push(new Drop(width/2, 0, 1));
    }
    d = new Drop(width/2, 0, 1);

    slider = createSlider(0, 255, 100);
    slider.position(10, 10);
    slider.style('width', '80px');
}

function draw() {
    background(230, 230, 230);
    for(let i=0; i<DROP_NUMBER; i++){
        drop_array[i].fall();
        drop_array[i].show();
    }
  }