/*
*  Isabella Fiorante
*  Technology Design Foundations
*  MDes FA2025
* 
*  Written for Expressive Mechanics Project.
* 
*  Modified from Makeability_seriallO_v3_motor.ino, sample code
*  provided in class on 2 October 2025.

*  This code takes data sent from p5.js and controls a DC motor.
*  In p5, posenet tracks positions of nose. As the nose moves from the 
*  left side of the screen towards the centre, the motor spins forward
*  at a decreasing speed relative to the position of the nose. As the 
*  nose crosses the centre of the screen, the DC motor stops, and as 
*  the nose moves towards the right side of the screen, the motor changes
*  direction and picks up speed relative to how far right the nose is 
*  tracked across the screen.
*
*
*  p5 code here: https://editor.p5js.org/loopstick/sketches/FzvHWP_mS
*/

// Include the Hbridge library -> from: https://github.com/AndreaLombardo/L298N/
#include <L298N.h>

// motor stuff
#include <L298N.h>

// Pin definition
const unsigned int IN1 = 9;
const unsigned int IN2 = 8;
const unsigned int EN = 10;
int mtrSpd = 0;

// Create one motor instance
L298N motor(EN, IN1, IN2);

// LED stuff
int inc = 1;
int brightness = 10;
// value will hold the x co-ordinate of the tracked nose position.
// usually an integer between 0 and ~250
int value;

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication 
  Serial.begin(115200);
}

// the loop routine runs over and over again forever:
void loop() {

  // Check to see if there is any incoming serial data
  if(Serial.available() > 0){
    // If we're here, then serial data has been received
    // Read data off the serial port until we get to the endline delimeter ('\n')
    // Store all of this data into a string
    String rcvdSerialData = Serial.readStringUntil('\n'); 
    // receive value from p5.js and print value
    value = rcvdSerialData.toInt();
    Serial.print("Nose position: '");
    Serial.print(value);
    Serial.println("'");
  }
  // if value is greater than or equal to 125,
  // the nose is on the right side of the screen

  if (value >= 125) {
    // map value to be relative to 0-250 scale,
    //setting speed for motor somewhere in that range
    mtrSpd = map(value, 125, 250, 0, 250);
    motor.setSpeed(mtrSpd);
    // right side of the screen means motor forward
    motor.forward();
  }
  else{
    // nose is on the left side of the screen
    // map value to be relative to 250-0 scale,
    // setting speed for motor somewhere in that range
    // mapped in reverse so that the far left of the screen 
    // is the fastest, and closer to the centre is slower.
    mtrSpd = map(value, 0, 124, 250, 1);
    motor.setSpeed(mtrSpd);
    // left side of the screen means motor backward
    motor.backward();
  }
}
