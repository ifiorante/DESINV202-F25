// taken from https://makeabilitylab.github.io/physcomp/communication/p5js-serial
// and JD's Nose-ifier: https://editor.p5js.org/jd/sketches/NW5vp3jEE
//
//

let pHtmlMsg;
let serialOptions = { baudRate: 115200  };
let serial;
let MtrSpd = 100;
let inc = 1;

let video;
let bodyPose;
let poses = [];
let leftEar = 0;

function preload() {
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  bodyPose.detectStart(video, gotPoses);

  // Setup Web Serial using serial.js
  serial = new Serial();
  serial.on(SerialEvents.CONNECTION_OPENED, onSerialConnectionOpened);
  serial.on(SerialEvents.CONNECTION_CLOSED, onSerialConnectionClosed);
  serial.on(SerialEvents.DATA_RECEIVED, onSerialDataReceived);
  serial.on(SerialEvents.ERROR_OCCURRED, onSerialErrorOccurred);

  // If we have previously approved ports, attempt to connect with them
  serial.autoConnectAndOpenPreviouslyApprovedPort(serialOptions);

  // Add in a lil <p> element to provide messages. This is optional
  pHtmlMsg = createP("Click anywhere on this page to open the serial connection dialog");
  pHtmlMsg.style('color', 'deeppink');
}

function gotPoses(newPoses) {
  poses = newPoses;
}

function draw() {
  //background(100);
  
    image(video, 0, 0, width, height);
  
   if (poses.length > 0) {
    print(poses);
    let left_eye = poses[0].left_eye;
    let right_eye = poses[0].right_eye;
    let iod = dist(left_eye.x, left_eye.y, right_eye.x, right_eye.y);
    
    let nose = poses[0].nose;
    let noseX = nose.x;
    let noseY = nose.y;
    fill(255, 0, 0);
    noStroke();
    ellipse(noseX, noseY, iod/2, iod/2);
    
    // Nose Control!
     console.log(noseX);
     
     MtrSpd = map(noseX, 0, 640, 0, 255);
    
    noFill();
    stroke("yellow");
    let left_ear = poses[0].left_ear;
    //ellipse(left_ear.x, left_ear.y+iod/2, iod/3, iod/2);

    let right_ear = poses[0].right_ear;
    //ellipse(right_ear.x, right_ear.y+iod/2, iod/3, iod/2);
  }
  
  // this line sends a variable to Arduino
  serial.writeLine(MtrSpd);
 //console.log('MtrSpd!', MtrSpd);
  
  pastMtrSpd = MtrSpd;
  
  // fill("yellow");
  // stroke("orange");
  // circle(220, 200, 200);
}

/**
 * Callback function by serial.js when there is an error on web serial
 * 
 * @param {} eventSender 
 */
 function onSerialErrorOccurred(eventSender, error) {
  console.log("onSerialErrorOccurred", error);
  pHtmlMsg.html(error);
}

/**
 * Callback function by serial.js when web serial connection is opened
 * 
 * @param {} eventSender 
 */
function onSerialConnectionOpened(eventSender) {
  console.log("onSerialConnectionOpened");
  pHtmlMsg.html("Serial connection opened successfully");
}

/**
 * Callback function by serial.js when web serial connection is closed
 * 
 * @param {} eventSender 
 */
function onSerialConnectionClosed(eventSender) {
  console.log("onSerialConnectionClosed");
  pHtmlMsg.html("onSerialConnectionClosed");
}

/**
 * Callback function serial.js when new web serial data is received
 * 
 * @param {*} eventSender 
 * @param {String} newData new data received over serial
 */
function onSerialDataReceived(eventSender, newData) {
  console.log("onSerialDataReceived", newData);
  pHtmlMsg.html("onSerialDataReceived: " + newData);
}

/**
 * Called automatically by the browser through p5.js when mouse clicked
 */
function mouseClicked() {
  if (!serial.isOpen()) {
    serial.connectAndOpen(null, serialOptions);
  }
}