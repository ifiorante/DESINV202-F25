# TDF FA25 DESIGN JOURNAL

## Table of Contents

[WEEK 3](#week-3)

[WEEK 4](#week-4)

## WEEK 3. 

2 September - 9 September 2025

### **Electronics**

I started by taking the helloworld-blink code, using the arduino's built in LED, and modifying it to get the external LED on the breadboard to blink. Some minor frustrations because I had the LED nodes reversed (oops). 

https://github.com/user-attachments/assets/b42ef05a-a4f9-4ca4-a39a-811c89fa89f5

From there, I added the LDR sensor to the breadboard, and modified code (ldr-blink-1) from an arduino online tutorial on LDR sensors (credited in the file notes) to get the sensor working. This was much easier, because the LED was already properly installed. The main challenge was the values being used in the example code didn't match the values I was getting from my sensor at all, so the light wasn't coming on and off as even when the sensor was covered by my finger. I think the example code had the LED coming on when the sensor value was 80 or lower, and even when my finger was completely covering the sensor the lowest value was 120+. This was a very easy fix, I printed the values, found the absolute lowest it was giving me and set the code to turn the light on when it was a little higher than that value. 

https://github.com/user-attachments/assets/ccdac961-23bb-4356-8495-9c2cba5f7ef3

Lastly, I decided to add a second LED and have the LEDs be inverses of each other, i.e. the white turns off when its dark and on when its light, while the green turns on when its dark and off when its light. I started by modifying the helloworld-blink code to ensure the white LED was working on its own. And then added to the original LDR code to get both LEDs working in tandem by adding an extra instruction in the if and else loops. (ldr-blink-2 file).

https://github.com/user-attachments/assets/ab4239ff-24d7-439b-ab9c-a05255e6a39c

I managed to get the RGB LED working as well, just using the sample code from the tutorial. I was able to get the RGB LED wired correctly and ran the colour fade sample program.

### **Fabrication**

Started looking for inspiration for laser cut rings, and found some fun house shapes.

<img src="https://github.com/user-attachments/assets/3a9e953b-e736-4e81-952f-bd8b7d4effe7" width="150">
<img src="https://github.com/user-attachments/assets/cb119940-90ec-49dc-891f-12655c44c3de" width="150">

For my rings, I decided to make 3 stacking rings, one to represent each of the places I've lived. I started by drawing 3 separate rings in illustrator. I drew a mountain, a redwood tree, and a Dutch house. I used raster engraving to add some small details (snow caps to the mountain, leaves to the tree, and windows to the house). The vectors are pretty simple (except for the tree) but I was sitll worried that they wouldn't cut super well at such a small scale. 

<img width="822" height="352" alt="Initial outlines from illustrator (too narrow)" src="https://github.com/user-attachments/assets/9896e423-a75e-45dd-b7c2-ad68b6901b83" />

At the laser cutter, I realized pretty quickly that everything was just a bit too small. The width of the ring band itself was too thin, and would break when removed from the larger piece of plywood. So I made the ring band 1mm thicker, and scaled up the icons on the top of the rings accordingly. I specifically changed the dimensions of the tree to be wider and taller, and I edited the general shape so that it was more simple and decided to rely on the raster engraving to give the tree more visual interest.

<img width="1069" height="510" alt="Final outlines from illustrator" src="https://github.com/user-attachments/assets/1cb0837e-f7b9-4172-83c9-0692e9accbb2" />

https://github.com/user-attachments/assets/8e3ab257-b4e2-47d7-af6b-f9e50604770e

![IMG_3296](https://github.com/user-attachments/assets/d42df94c-d2ee-48e0-bc3e-6d469e1bd71d)

After a couple of failed attempts, I finally got the settings right and the rings separated from the larger piece of wood without much force on my end. The resulting rings are very delicate, which made sanding a big challenge. Quite frankly, its not my best work, because it's hard to sand at such a small scale without breaking or damaging the rings, so next time I think I would add a little bit of width and chunkiness to my design to account for that.

<img width="500" height="" alt="final rings stacked on finger" src="https://github.com/user-attachments/assets/8d6e3ef9-f554-492d-ab2c-d6f79a17391c" />
<img width="500" height="510" alt="final rings flat lay" src="https://github.com/user-attachments/assets/b0ad4a9a-fe11-45ca-bb40-9380d8956590" />

## WEEK 4. 

15 September - 19 September 2025

### **Electronics**
I had some trouble getting the buttons to work, even after double and triple checking the wiring and using sample code, which I assume was correct (also reviewed it myself and couldn't find any logic errors). I assume it was a hardware issue, but it still didn't work even after trying both buttons. I noticed that if I removed the button, I got the on/off feature of the LED to work by simply inserting and removing a loose wired in pin 2, which is honestly really weird because it wasn't connected to the breadboard. I decided to just let this be for now, and will see if I can address this weird occurance in office hours this week.

I did manage to get the potentiometer functioning, first I tested it with a regular LED, with the LED brightness turned up and down using the potentiometer and the test code provided by the tutorial.

Then I decided I would try to get the potentiometer to operate the RGB LED. I decided that the first third of a spin on the potentiometer would  controls the brightness of red, the second third green and the last third blue. It took a bit of trial and error, first I got the red to work and then had to turn my attention very closely to the numbers because I was getting weird light pulsing towards the upper range of the first third rotation of the dial. I realized it's because I had the value of brightness equal to the value of the potentiometer, which was causing whacko stuff to happen when the value of the potentiometer was within the red range (potentiometer values 0-340) but higher than the max brightness value of 255. After fixing that math, I was able to get the other colours working without much trouble. Going forward, I'd like to try to get more of a fade between colours working with the potentionmeter.
