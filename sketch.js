let camel, cheetah, cow, elephant, gator, giraffe, hippo, kangaroo, lion, monkey, moose, panda, rhino, snake, warthog, wolf
let animals = []
let animal;
let animalX;
let safari;
let directions;
function preload() {
  
  camel = loadImage('/images/camel.png') 
  cheetah = loadImage('/images/cheetah.png')
  cow = loadImage('/images/cow.png')
  elephant  = loadImage('/images/elephant.png')
  gator = loadImage('/images/gator.png')
  giraffe = loadImage('/images/giraffe.png')
  hippo = loadImage('/images/hippo.png')
  kangaroo  = loadImage('/images/kangaroo.png')
  lion = loadImage('/images/lion.png')
  monkey = loadImage('/images/monkey.png')
  moose = loadImage('/images/moose.png')
  panda = loadImage('/images/panda.png')
  rhino = loadImage('/images/rhino.png')
  snake = loadImage('/images/snake.png')
  warthog = loadImage('/images/warthog.png')
  wolf = loadImage('/images/wolf.png') 
  safari = loadImage('/safari.png')
  directions = loadImage('/directions.png')
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //createCanvas(200, 200);
   animals.push(camel, cheetah, cow, elephant, gator, giraffe, hippo, kangaroo, lion, monkey, moose, panda, rhino, snake, warthog, wolf)
  console.log(animals.length)
  animal = 0
  animalX = 0
}

function draw() {
  frameRate(60)
  image(safari, 0,0, width,height)
  
    image(animals[animal%(animals.length)], animalX%width, height*0.75, width/4, height/4)
  animalX = animalX +1
  if(animalX%width == 0){ animal++}
  
  rect(0,0,width/5, height/5)
  textSize(width/25)
  text("how to\nscreenshot",0,width/25)
  
   if(mouseIsPressed){
    if(mouseX< (width/5)&&mouseX >0 && mouseY > 0 && mouseY < (height/5)){
      image(directions, 0,0, width*0.6, height)
    }}
  
}

function mouseClicked(){
 
}