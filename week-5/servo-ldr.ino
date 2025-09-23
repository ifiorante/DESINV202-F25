#include <Servo.h>
int ldr = A0;
Servo myservo;  // create servo object to control a servo
int sensor = 2;   
int val;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ldr, INPUT); //initialize the LDR pin as an input
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  pinMode(sensor, INPUT);    // initialize sensor as an input
  myservo.write(0);
}

void loop() {
  // put your main code here, to run repeatedly:
  int ldrStat = analogRead(ldr); // reads the status of the LDR value
  Serial.println(ldrStat);
  
  val = map(ldrStat, 60, 370, 0, 180);
  
  myservo.write(val);
  delay(15);

}
