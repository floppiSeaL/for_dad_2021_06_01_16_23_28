let dad_one
let dad_two
let mom
let scene
let time1
let start
let title6
let opacity
let time2
let rectSpd
let rectX

function preload(){
  dad_one = loadImage("dad_one.png")
  dad_two = loadImage("dad_two.png")
  mom = loadImage("mom.png")
  title6 = loadImage("title6.png")
  
  start = loadImage("start.png")
}

function setup() {
  createCanvas(400, 400);
  dad_one.resize(400,400)
  dad_two.resize(400,400)
  title6.resize(400,400)
  start.resize(400,400)
  mom.resize(400,400)
  scene = 0
  rectSpd = 3
    rectX= 3
  time2 = millis-time1
}

function draw() {
  
if (scene == 0){
    cover()
} else if (scene == 1){
   game()}

}
function cover(){
background('#f0e3af')
time1 = millis()
 opacity = map(time1, 0, 1000, 0, 255)
 tint(255,opacity)
 image(title6,0,0)
if(opacity > 200){
  image(start,0,0)
}
  if(opacity > 200 && mouseIsPressed){
    scene = 1
  }
}
function game(){
  
  background(255, 247, 217);
 time2 = millis()-time1
  
 
  if(time2> 1000 && time2<2000){
    image(mom,0,0)
    textAlign(CENTER)
    textSize(20)
    text("聂老师来抽查作业了",100,50)
  } else if(time2>2000 && rectX<250){
    image(mom,0,0)
    textAlign(CENTER)
    textSize(20)
    text("长按开始赶作业!",80,100)
    
    
    fill(255)
    rect(80,30,250,10)
    fill(255,0,0)
    rect(80,30,rectX,10)
  }
  
  console.log(time2)
  if(time2>2000 && mouseIsPressed){
    image(dad_two,0,0)
    rectX = rectX + rectSpd
    
  } else { 
    image(dad_one,0,0)}
  
    if(rectX>=250){
    rectX = 250
    textAlign(CENTER)
    textSize(20)
    text("恭喜你补完了作业!",200,100)
    text("生日快乐！",200,150)
}
}