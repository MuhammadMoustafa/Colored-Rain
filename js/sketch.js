let drop_array = [];
const DROP_NUMBER = 500;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < DROP_NUMBER; i++) {
    drop_array.push(new Drop());
  }
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style("width", "80px");
}

function draw() {
  background(230, 230, 230);
  for (let i = 0; i < DROP_NUMBER; i++) {
    drop_array[i].fall();
    drop_array[i].show();
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};