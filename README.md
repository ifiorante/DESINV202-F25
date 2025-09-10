# TDF FA25 DESIGN JOURNAL
WEEK 2. 
2 September - 9 September 2025

**Electronics**

I started by taking the helloworld-blink code, using the arduino's built in LED, and modifying it to get the external LED on the breadboard to blink. Some minor frustrations because I had the LED nodes reversed (oops). 

https://github.com/user-attachments/assets/b42ef05a-a4f9-4ca4-a39a-811c89fa89f5

From there, I added the LDR sensor to the breadboard, and modified code (ldr-blink-1) from an arduino online tutorial on LDR sensors (credited in the file notes) to get the sensor working. This was much easier, because the LED was already properly installed. The main challenge was the values being used in the example code didn't match the values I was getting from my sensor at all, so the light wasn't coming on and off as even when the sensor was covered by my finger. I think the example code had the LED coming on when the sensor value was 80 or lower, and even when my finger was completely covering the sensor the lowest value was 120+. This was a very easy fix, I printed the values, found the absolute lowest it was giving me and set the code to turn the light on when it was a little higher than that value. 

https://github.com/user-attachments/assets/ccdac961-23bb-4356-8495-9c2cba5f7ef3

Lastly, I decided to add a second LED and have the LEDs be inverses of each other, i.e. the white turns off when its dark and on when its light, while the green turns on when its dark and off when its light. I started by modifying the helloworld-blink code to ensure the white LED was working on its own. And then added to the original LDR code to get both LEDs working in tandem by adding an extra instruction in the if and else loops. (ldr-blink-2 file).

https://github.com/user-attachments/assets/ab4239ff-24d7-439b-ab9c-a05255e6a39c

**Fabrication**

Also started looking for inspiration for laser cut rings, and found some fun house shapes.

![IMG_3518](https://github.com/user-attachments/assets/3a9e953b-e736-4e81-952f-bd8b7d4effe7)
![IMG_3507](https://github.com/user-attachments/assets/cb119940-90ec-49dc-891f-12655c44c3de)
