# TDF FA25 DESIGN JOURNAL

## Table of Contents

[WEEK 3](#week-3)

[WEEK 4](#week-4)

[WEEK 5](#week-5)

[WEEK 6](#week-6)

[WEEK 7](#week-7)

[WEEK 8](#week-8)

[WEEK 9](#week-9)

[WEEK 10](#week-10)

[WEEK 11](#week-11)

[WEEK 12](#week-12)

[WEEK 13](#week-13)

## WEEK 3. 

2 September - 9 September 2025

### **Electronics**

I started by taking the helloworld-blink code, using the arduino's built in LED, and modifying it to get the external LED on the breadboard to blink. Some minor frustrations because I had the LED nodes reversed (oops). 

https://github.com/user-attachments/assets/b42ef05a-a4f9-4ca4-a39a-811c89fa89f5

From there, I added the LDR sensor to the breadboard, and modified code (week 3, ldr-blink-1) from an arduino online tutorial on LDR sensors (credited in the file notes) to get the sensor working. This was much easier, because the LED was already properly installed. The main challenge was the values being used in the example code didn't match the values I was getting from my sensor at all, so the light wasn't coming on and off as even when the sensor was covered by my finger. I think the example code had the LED coming on when the sensor value was 80 or lower, and even when my finger was completely covering the sensor the lowest value was 120+. This was a very easy fix, I printed the values, found the absolute lowest it was giving me and set the code to turn the light on when it was a little higher than that value. 

https://github.com/user-attachments/assets/ccdac961-23bb-4356-8495-9c2cba5f7ef3

Lastly, I decided to add a second LED and have the LEDs be inverses of each other, i.e. the white turns off when its dark and on when its light, while the green turns on when its dark and off when its light. I started by modifying the helloworld-blink code to ensure the white LED was working on its own. And then added to the original LDR code to get both LEDs working in tandem by adding an extra instruction in the if and else loops. (week 3, ldr-blink-2 file).

https://github.com/user-attachments/assets/ab4239ff-24d7-439b-ab9c-a05255e6a39c

I managed to get the RGB LED working as well, just using the sample code from the tutorial. I was able to get the RGB LED wired correctly and ran the colour fade sample program.

### **Fabrication**

Started looking for inspiration for laser cut rings, and found some fun house shapes.

<img src="https://github.com/user-attachments/assets/3a9e953b-e736-4e81-952f-bd8b7d4effe7" width="150">
<img src="https://github.com/user-attachments/assets/cb119940-90ec-49dc-891f-12655c44c3de" width="150">

For my rings, I decided to make 3 stacking rings, one to represent each of the places I've lived. I started by drawing 3 separate rings in illustrator. I drew a mountain, a redwood tree, and a Dutch house. I used raster engraving to add some small details (snow caps to the mountain, leaves to the tree, and windows to the house). The vectors are pretty simple (except for the tree) but I was sitll worried that they wouldn't cut super well at such a small scale. (FILE: week 3 - ring design print)

<img width="822" height="352" alt="Initial outlines from illustrator (too narrow)" src="https://github.com/user-attachments/assets/9896e423-a75e-45dd-b7c2-ad68b6901b83" />

At the laser cutter, I realized pretty quickly that everything was just a bit too small. The width of the ring band itself was too thin, and would break when removed from the larger piece of plywood. So I made the ring band 1mm thicker, and scaled up the icons on the top of the rings accordingly. I specifically changed the dimensions of the tree to be wider and taller, and I edited the general shape so that it was more simple and decided to rely on the raster engraving to give the tree more visual interest. ((FILE: week 3 - ring design print final)

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

https://github.com/user-attachments/assets/74a74183-168a-4014-9095-183121359bd5

EDIT: It turns out it was because the left and right side of the breadboard are not connected (my bad). Got the button up and running. Here's the vid: 

https://github.com/user-attachments/assets/eabe6592-5643-49fe-b0e1-579975fd6621

(And thanks GSIs for catching my dumb mistake).

I did manage to get the potentiometer functioning, first I tested it with a regular LED, with the LED brightness turned up and down using the potentiometer and the test code provided by the tutorial. I also tried the other test code, which allows the potentiometer to control the speed at which the LED blinks.

https://github.com/user-attachments/assets/b865c844-12bf-4269-b2e3-87e40eb257b0

Then I decided I would try to get the potentiometer to operate the RGB LED. I decided that the first third of a spin on the potentiometer would  controls the brightness of red, the second third green and the last third blue. It took a bit of trial and error, first I got the red to work and then had to turn my attention very closely to the numbers because I was getting weird light pulsing towards the upper range of the first third rotation of the dial. I realized it's because I had the value of brightness equal to the value of the potentiometer, which was causing whacko stuff to happen when the value of the potentiometer was within the red range (potentiometer values 0-340) but higher than the max brightness value of 255. After fixing that math, I was able to get the other colours working without much trouble. Going forward, I'd like to try to get more of a fade between colours working with the potentionmeter. It turns out I forgot to take a video but this code is the week-4 folder and is in the file called potentiometer-trial.

I also managed to get the servo working and attached to the Ultrasonic Distance Sensor. Using the sample code provided in the tutorial, I was able to get the servo to spin based on the distance sensed by the sensor. It spins with a wider range of motion when things are far away, and much narrower range of motion (or stops completely) when something is closer (in this case, my hand).

https://github.com/user-attachments/assets/d12f69ea-b962-4255-a624-df848da7c4f1,

### **Fabrication**
For fabrication this week, I started by extruding the vector file for my laser cut rings by a couple milimeters and printing them. I realized after the print that this was probably a bad idea, because the laser cut rings were already super small and delicate and some of the detail was way too refined for the printer to handle. On top of that, some weird shrinkage occured when importing the vector file into fusion so I should watch out for that next time. In the end, not a super successful print (especially the house), but I learned a lot about successful scaling for 3D printing and appropriate sizing for fabrication in general. 

<img width="683" height="382" alt="Screenshot 2025-09-21 at 15 16 36" src="https://github.com/user-attachments/assets/39c32472-206f-4690-9be6-2fd148bc6bd8" /> 

<img width="694" height="437" alt="Screenshot 2025-09-21 at 15 16 41" src="https://github.com/user-attachments/assets/0fc63257-942b-4284-bdad-4c1122c8ad49" />

<img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/9729b65d-e53a-4949-bd43-4f858b81dc4d" />

<img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/bff494b6-c374-4d2e-a361-bdb9ed59da2d" /> <img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/7fcc932c-9f2a-49ca-a357-5edae561d16f" />

Then for the next ring, I decided to try to recreate this ring I lost a few years ago. I don't have a picture of it on me, but this is what it looked like:

<img width="637" height="461" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/ba92a5b7-bae2-4f58-89b3-613d8ef8eb90" />

I started by creating a sketch in fusion, keeping an interior diameter of 19.7mm which is about 0.5 mm bigger than my desired ring size, but I wanted to avoid making anything too small after both the laser cut rings and first iteration of 3D printed rings came out so tiny. In hindsight, 0.5mm is not really a lot of added diameter. I made a sketch of a ring surrounded by several half circles for a sort of scalloped edge shape, then I extruded and fileted the tops to get the rounded look. This sounds really easy in summary, but it took about 2 full hours of tweaking with the settings and the spacing on the half circles in order for them to filet correctly when extruded. I added a thin interior ring that holds In the end, I think its a little more pill shaped than the original ring, but I decided to just go for it, because I was worried that flattening the half circles would mess with the settings and it wouldn't filet when extruded.

<img height="400" alt="Screenshot 2025-09-21 at 15 16 50" src="https://github.com/user-attachments/assets/7da17add-6288-432c-b508-a047676dccff" />

I also decided to design a version with a flat bottom (the bottom of the ring was not fileted) in case the original ring had printing issues. My fears were unfounded though because both rings printed really well. I'm pretty happy with how both turned out, even if they're a bit more pill-y than I intended.

<img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/21080bbe-9a4f-44f1-9ef0-d6ed7049c17f" />
<img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/3e9a30ed-350a-4b8f-803f-72ef306468f5" />
<img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/7468fb52-2fdb-4b40-965f-8f2e73e19457" />
<img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/82f151b3-f78b-4583-9b26-7c2624d0b5fc" />

I learned that there is definitely some natural shrinkage that occurs when printing, maybe from the heat, because even though the ring was 0.5mm  bigger than my largest ring size, it still just barely fit comfortably. On top of that, the longer/wider the design (more tube-like) the bigger it should be in diameter of the opening to account for the slight suction that forms around the finger when it's pulled off. 

Lastly, I noticed that there is one joint (between the half pills) on both rings that seems to be weaker than the others. On the flat-bottomed ring, this joint actually broke coming off the printer. I asked Chris about this and he said it is where the printer reverses direction when creating a circle (the Z-seam). Usually it only causes a cosmetic line, but since the interior ring that holds the half pills together is so thin, in my case it caused a structural line as well. This can be fixed in the future by either making the interior ring thicker (a pattern is emerging in which everything I make is too small and too thin) or by setting the slicer to randomize this seam. A good note for later.

<img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/f9711f00-58d3-4d8a-860b-b2158df9728f" /> <img width="400" alt="Screenshot 2025-09-21 at 14 46 41" src="https://github.com/user-attachments/assets/486c9508-2b2f-4373-99e9-169228177161" />

## WEEK 5. 

22 September - 26 September 2025

### **Electronics**

I started by just getting the PIR to work, directly connected to the arduino rather than using a breadboard, and having it turn a light on when motion is detected, as well as print "Motion detected" and "Motion stopped" when those things occur. I used the test code from the tutorial and got it up and running pretty quickly.

I then decided to connect the servo to the the PIR, having it rotate 90 degrees when motion is detected and then reset to the original position when the motion is stopped. The code I wrote is in Week 5, servo-PIR. There is a bit of a delay for the reset, but the PIR is not super sensitive and I'm going to blame it on that. 

https://github.com/user-attachments/assets/c8c17c88-7fab-45ac-8757-fb8ad9bc4259

Lastly, I decided to connect the servo to the LDR, because I think this may be helpful for the origami project. Using the set up shown in the circuit diagram below, the servo spins when low light is detected (hand gets closer), and spins back to its original position (and stops) when light returns. I used the map function to map the input values from the LDR to the rotational degrees of the servo. The code I wrote is in week 5, servo-ldr, and became the base of the final code I used for my origami project. This circuit diagram is the circuit used in my final origami, and pins and placement might not match the following video exactly.

<img width="859" height="487" alt="Screenshot 2025-09-26 at 11 11 27" src="https://github.com/user-attachments/assets/09663a26-e0a0-45a1-b2a9-1e4c853b48a6" />

https://github.com/user-attachments/assets/37f0f32e-7332-4d33-ba6a-0bc3316716ea

### **Fabrication**

For fabrication this week, I started by looking at different origami folds, and I tried folding some umbrella-like shapes, as well as some vaguely mountain-like folds that I thought would be cool if they could switch direction back and forth. However, I realized that paper simply doesn't move this way, and decided instead to go simpler, with a paper fan becoming the base of my origami. 

<img width="2280" height="1383" alt="Untitled_Artwork" src="https://github.com/user-attachments/assets/ed873720-abb5-491c-8ebb-a028ffd77438" />

I realized pretty quickly that it was going to be pretty tricky to have the fan mounted in the middle of the box if I wanted the starting position of the fan (closed) to be flush with the top of the box, because the stick that was controlling the open-close motion of the fan couldn't be flush with the box if the servo was inside the box, and I didn't want the servo to be exposed. So instead, I moved the servo and fan to the back of the box, which would allow the servo and stick to stick out the back of the box, and the fan could be flush with the top, just positioned at the back of the box. I originally had the LDR poking out of the front edge of the box, rather than the top, because I really liked the idea of a completely smooth top of the box except the fan, but after some testing, realized the LDR gets much better readings when its oriented vertically rather than horizontally. Using the servo-ldr code, I was able to get the servo/stick with LDR moving the way i wanted it to (swinging from left to right when the LDR is covered/detects less light). I didn't want to attach the fan yet, because I wanted to make the box black in some way, either through paint or covering it in paper, and the fan would be in the way of this. In the video below you can see evidence of my failed attempts to mount the servo in the centre of the box (oops) but the general mechanism is functioning.

![origami diagram](https://github.com/user-attachments/assets/90a005c0-190c-418b-891a-81b46c33d02f)

![origami-2](https://github.com/user-attachments/assets/5a55e2ef-46d5-4bc3-b302-f7bfa7a6513a)

https://github.com/user-attachments/assets/b62952b8-1e64-4f93-9e4e-5a86bde2715c

After this, it was a matter of sealing the box and changing it to black, and since my failed attempts at mounting the servo and LDR in various places were visible, I opted for black paper instead of paint. I also wasn't super happy with the movement, while it was functional it was kind of janky, so I opted to implement a smoothing function to help the servo move more fluidly, and I'm pretty happy with how this turned out. This code is in Week-5, origami.

https://github.com/user-attachments/assets/068dba86-4b96-49b3-a106-cc05a2eae8bc

Something really dumb I did was fully enclose the arduino, battery, and breadboard in the box. I think I was too concerned with getting a really clean look that I forgot that it might be good to have access to the electronic mechanisms for emergency trouble shooting, or you know... to be able to turn it on and off. After seeing Elisa's work on Thursday at the crit, and seeing that her electronics were mounted upside down and the bottom of the box was cut away, it made me realize that a very clean look with total and complete access to the mechanism was possible and I definitely wish I had done that. The other change I would make is mounting the LDR to be either flush with the top of the box, or recessed into a small hole in the top of the box, I really wanted the top of the box to be flush and clean and yet I mounted my LDR in the ugliest possible way, with its tiny little wires sticking out. Oops. Good points to consider next time and will keep this in mind going forward.

## WEEK 6. 

29 September - 3 October 2025

### **Electronics**
I started this week by getting the DC-motor connected and running the test code, where the p5.js code is tracking the nose across the screen, making the motor spin faster as the user moves from one side of the screen to the other. Since I had never soldered before, getting the DC motor connected to the wires was a bit of a challenge, but I looped in a few classmates for help and managed to get them connected. It's not super pretty but it is functional. 

https://github.com/user-attachments/assets/334d81df-f331-4d43-8448-110b5b3ba0c1

I decided I wanted to use the DC motor for my Expressive Mechanics project, rather than the servo since I thought it would be fun to play with the 360 movement (I know there are 360 servos but we're ignoring that fact for now) and it was a chance to understand and play with something new. For a clear understanding, I charted the system with this diagram:

<img width="872" height="524" alt="diagramatic analysis" src="https://github.com/user-attachments/assets/c76aa8ab-8734-4ddb-8b1a-a920a8b55892" />

### **Fabrication**
For fabrication this week, I decided I wanted to keep with the opening and closing fan movement, but multiplied, so I thought it would be cool to have multiple fans opening and closing at the same time, maybe in different directions. I figured this could be executed with some gears controlled by a DC motor. Originally, I was thinking that the fans would somehow extend out of the box containing the electronics and mechanics (as if the box was lying down with extruded posts connected to the fans, but after some failed sketches I realized it was WAY easier to make the box the "background" and have the fans against the box, like in the sketch below.

![concept_sketch](https://github.com/user-attachments/assets/844bb32e-95b8-43a3-9075-f13550d64f58)

I also started by sketching out a pretty simple gear system. 

![gear_sketch](https://github.com/user-attachments/assets/f87b045f-e768-46ca-89a3-14eeafcaef21)

And then made a really bad cardboard prototype.

https://github.com/user-attachments/assets/3d69bc03-be0d-4dba-ab96-8df455bd3daa

This prototype was SO helpful in helping me conceptualize exactly what was going on, and assure me that my idea would eventually work (with some technical adjustments and better fabrication). Stuff I learned from the prototype: (1) 1/8 inch plywood is WAY too narrow for gears, it's really easy for them to slip out of contact with one another (2) I would need some sort of stopper on the dowels to keep them from moving forward and backward and allowing the gears to slip out of contact with one another (3) the gears needed to be 2-3x bigger so that the mechanism is easier to work with and i'd have more space on the front for the fans (4) washers would probably be a good idea.
Updated sketch:

![cross_sections_sketch](https://github.com/user-attachments/assets/109c4310-a40e-40a7-b1d0-b188edef7b45)

And a big shoutout to Alistair from the IND section for helping me think through the mechanical stuff!

## WEEK 7. 

6 October - 10 October 2025

### **Electronics**
This week I realized that it would be really hard to get the DC motor to open and close the fans, since it doesn't use positions the way the servo does and the timing is quite tricky. Given the time constraints and my own stress level, I decided to pivot to just having the fans stay open and spin. It feels way less cool, but I wanted to focus more on the final fabrication of the mechanism and playing with the arduino code a little bit.

I decided to play with the direction and speed of the motor using the nose code. I made it so as the user moves from the left to the right of the screen the motor goes from fast spinning in one direction to slow spinning to stopped as the user appraoches the centre of the screen and then from slow to fast in the other direction as the user moves fully to the other side of the screen.
The p5 is a bit laggy, but it generally works.

https://github.com/user-attachments/assets/662e02de-0f2b-4653-a716-81a3fec647f7

### **Fabrication**
This week I had to get the final fabrication finished. I started by cutting larger gears and rigging them up into the old cardboard prototype box. 

<img width="500" alt="Untitled_Artwork" src="https://github.com/user-attachments/assets/a4083633-753c-4d4c-8169-75f35ea110ee" />

When I was satisfied that these were big enough and the plywood was thick enough (1/4" instead of 1/8"), I calculated the size of box I would need and generated it using makercase.com. I lasercut the box, and specifically decided not to add holes for the wiring in the side of the box yet, since I wanted to get the mechanism and electronics fitted into the box before deciding where the wires would go, which is why the lasercut files in week 7 won't reflect the final actual cuts (EDIT: I later added two 15mm x 15mm square holes to the east panel for the wiring).
I then partially assembled the box (the base panel and the front panel) so I could play around with the placement of the gears, washers, stoppers and length of the dowel. This was a bit tricky to get the gears glued at a perfect right angle to the dowel but it was mostly just trial, error, and a lot of patience.

<img width="500" alt="Untitled_Artwork" src="https://github.com/user-attachments/assets/b0c9b05d-41cb-4981-a2b1-e5a0b759ee9f" />

Then I had to get everything mostly assembled, leaving off the top and one of the side panels so that I could play around with the wiring and electronics, which was honestly pretty easy. I managed to get the gears moving with the DC motor and everything more or less in position, except I hadnt made a stand for the motor yet, so in this video its being held up by a small container of play-doh and a block of wood. oops.

https://github.com/user-attachments/assets/c9e586c8-1038-4e76-80f1-bfc0f748aad8

I was pretty happy with this but I accidentally ripped the wires off my DC motor while moving the electronics around and had to re-solder them 3 hours before the presentation. rough.

<img width="200" alt="Untitled_Artwork" src="https://github.com/user-attachments/assets/1a300fc0-9882-4306-a71a-c5a7b1eade34" />

Then it was just the final assembly, adding the holes for wiring, which I just marked in pencil on the panel and adjusted the laser cutter manually to cut where I needed, and glueing the rest of the box together. I learned from last time, and did NOT glue the lid down, so that we could see the inside at the presentation (its also really fun to watch the gears spin) and I could make adjustments and remove the arduino when necessary.

<img width="500" alt="Untitled_Artwork" src="https://github.com/user-attachments/assets/8f0a65ef-0b05-406e-a2cb-1248a950a852" />

Lastly I had to add the fans to the front, but decided to pivot to pinwheels instead, because they are thematically similar but I thought looked a little cooler when spun (and since they would no longer be opening and closing the fans didn't seem as cool). I also liked that the pin wheels felt kind of circus-y which felt on brand with the nose-code making the user look like a sad clown.

https://github.com/user-attachments/assets/300b2d61-2fbd-43b7-b9a8-dceb219295a3

I'm pretty happy with how this turned out. I like that the pinwheels spin in different directions, but I do think it would be more obvious that the nose is controlling the direction of the spin if they all spun in the same direction. However, when just watching it spin, the different directions is much more hypnotizing. I'm glad I kept it simple, because it was such a short time frame to work within, and it gave me time to focus on prototyping the idea and a more "museum-quality" final fabrication, but I'm hoping to try something a little more complex next time!

## WEEK 8. 

13 October - 15 October 2025

### **Electronics**
I started this week by familiarizing myself with the ESP32 and API calls in order to get Roopa's weather API example to work. In order to do this, I had to solder the pins to the ESP32 which was also good fabrication practice. 


https://github.com/user-attachments/assets/afd6089c-623b-46ae-b606-70c208571f1b


The blinking blue light in the video was confirmation the weather API was working. For the rest of the electronics this week, we got into groups and started brainstorming ideas for the Ambient Display project, and what APIs we might want to work with. For this project, I am working with Ajia Grant, her journal can be found [here](https://github.com/amg2318/design-journal/blob/main/week8.md). We considered several different APIs from the list, and decided to work with Strava, which is a phone app that tracks users physical activity data (usually routes for running and cycling, among other activities) since we're both runners, and decided on some sort of PR tracker for 5ks.

### **Fabrication**
For fabrication this week, we started by brainstorming form for our project with some concept sketches. We initially considered doing something mechanical with some sort of tracker that ticked across a dial as new PRs were hit, but we things were not really clicking with this idea. The mechanics were not really adding up to us, and it might have to be too specific to our own times and would somehow have to predict future PR times, which we obviously can't do since we can't see the future. 

![IMG_7480](https://github.com/user-attachments/assets/d20d3204-0be6-4dd9-ba30-80967b764546)

Instead, we decided to go with a "bar chart" that compares your most recent 5K time with your PR for the distance. 

![IMG_7478](https://github.com/user-attachments/assets/1cadc57a-b0f0-4073-a7d9-683c4e64eec2)

We were moving generally in the direction of something circular (borrowing the dial shape from our initial mechanical considerations, and maybe resembling a track) but decided for a quick prototype we would build a quick, rectangular wood box to hold our neopixel strips while we ideated and worked on the code and API call. To do this, we had to solder two neopixel strips together twice, one for the PR and one for the latest time. While experimenting with this prototype, we struggled with the cables breaking off of the Neopixels frequently.

We quickly laser cut a box to hold all our electronics and got to running some test code the lights. This gave us a good sense of scale, and we learned that the gaps in the box for the neopixels (which were based on the width of the LED and not the width of the stick) were awkward and difficult to align with the Neopixels. For next week, we plan to refine our design of the box and 3D print a first version.

<img width="500" alt="507354383-2e3c11fb-5b37-4337-8cb3-bb77c447eb61" src="https://github.com/user-attachments/assets/850e4f5c-5b12-4ec7-a70b-11c9a2c3b564" />

<img width="500" alt="507354771-8db39e41-2ec8-43ef-8e0d-98f56835f3bf" src="https://github.com/user-attachments/assets/a9d9cc13-7605-4e99-bae8-5268ae37e6b2" /> <img width="500" alt="507354601-6b8351f0-c7c2-4eab-a1dd-165ef23e439a" src="https://github.com/user-attachments/assets/66867250-7146-4d80-be69-0b5d7a6b173a" />


## WEEK 9. 

21 October - 23 October 2025

### **Electronics**
Our goal for electronics this week was more code-focused than true 'electronics' since we already had the neopixels wired and working. We focused on getting the API up and running, which was a bit more complicated than the Open-Meteo API call from the tutorial since it required 0Auth to access information on our strava accounts. I made an account, but we started by focusing on Ajia's account, since she is new to strava, we felt that it would be easier to recognize if we were pulling the correct data from an account with fewer runs (or zero runs to start). A lot of this was done with Roopa's help in office hours (thank you!) and some back up from ChatGPT.

First, Ajia's application in Strava to get the client id, client secret, and other information:
<img width="443" height="620" alt="507356953-333568fe-2346-462a-80c6-b63dc6eddd50" src="https://github.com/user-attachments/assets/7a109135-e4f8-4259-9b92-080fa54cdc18" />

Then using the local host, we could authorize access and get the initial authorization key:
<img width="445" height="619" alt="507357724-d96a12b4-c419-42f4-ba3c-4b10d6edc01e" src="https://github.com/user-attachments/assets/67982f34-b7a3-4242-a32e-4280539ae8eb" />

With this authorization key, we could then use curl requests in the terminal to pull account-specific data. We had to upgrade access to "read-all" from just "read" (which would allow us to get more detailed data about each run):

<img width="725" height="440" alt="507358715-0652c7b5-ad75-48c9-ba3e-f2cba12b5d8e" src="https://github.com/user-attachments/assets/b181b8fa-7c1d-4617-ac71-580d76404aae" />

Now that we could actually pull from the API, we could start writing actual code for our project to work. Based on the [Strava API documentation](https://developers.strava.com/docs/reference/#api-models-SummaryActivity), we started with a search through all the user's activities marked 5km or longer. We needed to add a lot more functionality after this, but were pleased to see the basic call was working. Since Ajia hadn't actually run using strava yet, we returned null information, which is actually what we wanted!

<img width="1158" height="323" alt="507365150-c31e5b88-ffed-445d-8ad9-71d2b0cda3db" src="https://github.com/user-attachments/assets/624e2ae1-9029-4b14-80e6-3704d73567ec" />

Ajia then ran  a 5k, and we made sure the API was pulling the correct data:

<img width="1144" height="198" alt="508476633-f0a6329d-9cd4-4a4b-a659-7a023775ac5b" src="https://github.com/user-attachments/assets/0585e2fe-87a3-4642-bd54-320c80acff07" />

### **Fabrication**

For fabrication this week, we wanted to get the prototype wood box into a more refined, unique shape. We really wanted an oval shape, not dissimilar from a track, and then needed to build a bit of a base for it to stand on. We decided it made the most sense to have a completely open back with an attached recessed front face, so that we could fully access the electronics (learning from previous mistakes!) from the back, and place a piece of frosted acrylic over the front to diffuse the light from the neopixels. 

We settled on this sketch:

<img width="1131" height="787" alt="508452726-612f47b0-137a-4442-b0c5-bf0e53919b35" src="https://github.com/user-attachments/assets/81c8994c-5434-41ad-8996-79927f328e8f" />

And then started modelling it in fusion:

<img width="500" alt="508467295-c1b95d93-ac26-43ee-885b-c8b78cc34cfa" src="https://github.com/user-attachments/assets/c1f7a1eb-8e2d-4766-be5c-fc3f50cbf6a7" /> <img width="500" height="1336" alt="508467380-b83998cf-c31c-4bb5-81c1-ca29dce32ffe" src="https://github.com/user-attachments/assets/f752e9cb-93d3-463f-b037-9da4037ba18c" />

We printed it on the Prusa, but because of bad plate adhesion and too small of a brim, the print came out a bit warped. The supports left a really messy interior of the print.

<img width="500" alt="508467900-79aff06d-b516-4d08-bdf7-017c4d139edf" src="https://github.com/user-attachments/assets/e61cf636-5c78-453f-b009-f4e88389bcdf" /> <img width="500" alt="508468282-7086c719-f7d8-4786-ba54-9fb0862c62e9" src="https://github.com/user-attachments/assets/6d18ca01-a3e6-489e-923a-8f80a9256c83" />
<img width="500" alt="508468384-48a276f6-f7ff-4545-a532-3b69cbd6782b" src="https://github.com/user-attachments/assets/582a22b8-89b6-484a-8674-f851dd291889" /> <img width="500" alt="508468336-471abe88-232c-46e5-9465-ad216faa2138" src="https://github.com/user-attachments/assets/ff741195-c442-4fae-8215-b19cfbdec677" />

The print was still usable for testing the LEDs, so we assembled the electronics and ran some test code to get the LEDs lit. 

<img width="500" alt="508468823-4d81aa66-afd5-4cc3-9521-0ceddb7e4ac4" src="https://github.com/user-attachments/assets/f00a1bc7-3d66-4161-bf2b-8fafaa3b2b33" />


We decided we also didn't like the way the black PLA looked with the lights, so we decided for our next (and hopefully final print) we'll use a white PLA instead. We made slight adjustments to the fusion file so that the LED slots were a little larger, and we're going to print it on the Bambu printer with organic supports next. This will hopefully avoid the warping, and have a cleaner look when the supports are removed.

We also practiced using heat inserts for screws for the back plate of the enclosure! Very satisfying and fun (my new favourite part of fabrication!).

<img width="500" alt="508469343-dfe0b3ba-679a-4976-91a0-9ffee53aaa5a" src="https://github.com/user-attachments/assets/3bb905bf-bd83-4fec-87c3-34011d213c16" />

## WEEK 10. 

28 October - 30 October 2025

 ### **Electronics**
Final week of Ambient Display! A shorter entry for electronics this week, as we already had the wiring and neopixels working, and could really focus on the fine details of the code. We started by mapping a sequential diagram to better understand how all the electronic parts (code included) were functioning with each other:

![seqdiagram](https://github.com/user-attachments/assets/efc3c16c-ba83-4030-9643-160b45eedf9a)

Since our code was already pulling from the API, we just needed to tell it what to do with the information it pulled. 

We experimented a lot with how the values would map to the number of pixels. We initially thought the latest time should take up one whole Neopixel stick / all 16 LEDs and the best time would display based on the scale of the difference between the two times but upon testing it we realized that any time you don't set a PR you're really slow, and it almost made it redundant to show both times, since technically the PR could always be represented by the length of one Neopixel stick (you wouldn't really need a PR-specific neopixel stick if its always going to show the same thing).

So instead we experimented with using a mapping function to correlate the lights with our general 5k times. In the end we mapped the values of the number of lights to be between 25 and 30 minutes, with 25 minutes being faster than either of us could achieve and 30 minutes being on the longer end of what we would normally run a 5k at. This meant that on both light strips, some of the lights were always lit, but never all of them. However, it means that if this product were to be "marketable" and sold, there would need to be some sort of auto-calibration added on the timeframe across which the lights are mapped, since not every runner's times would be comparable to ours. 

The first version of our code (Week-10 folder, ambient-display-v1) which had the program pull from the API once on upload to the ESP32 and use the loop function to refresh the access code. While this code worked very reliably, we needed the code to run constantly to be truly "ambient", so we had to switch around the placement of the API call to get it to pull continuously for new updated times. (Week-10 folder, ambient-display-final).

We learned a lot about error codes and how to check if the Strava API was really connecting with the ESP32. We added my clientID and necessary permissions data to access information from my account, so that we could test that it was working with other users and not just specifically with Ajia's data. This meant we had to keep increasing the memory of the initial JSON doc (discovered through debugging with ChatGPT), since I am a long-time Strava user with a lot of runs to search through.

We also added a functionality that both lines of lights would light up rainbow when a new PR is set, as a celebration for the user:

<img width="471" height="629" alt="Screenshot 2025-10-31 at 19 24 32" src="https://github.com/user-attachments/assets/64d016d1-3d67-47f0-afe4-ca01eeea238a" />


### **Fabrication**
 We started fab this week by getting our enclosure on the Bambu printer. At first, we consulted some more experienced 3D printers and they suggested we print the enclosure face down. After monitoring the first few layers of printing closely, we realized that the shallow organic supports supporting the recessed face of our print weren't forming super well, and they seemed to be peeling off a bit and would maybe cause the print to fail. So we flipped the print and printed with the recessed face up, though this took a bit longer, I think it ultimately was really worth it because it printed really well, and I'm super happy with how clean it looks. 

<img width="500" alt="508498138-23cfaab5-ce90-488d-a523-37b09890012b" src="https://github.com/user-attachments/assets/52f2be1a-e2e6-4170-a9a2-5d0c67a48a41" /> <img width="500" alt="508498021-1b396089-3f33-4c35-aada-cf0ec7d00286" src="https://github.com/user-attachments/assets/15cfe92a-fbca-4dac-adfc-facc3f876065" />

Next up, we had to laser cut the acrylic for the front diffusion, and the back plate. We added some engraved lines around the front diffusion plate to emphasize the shape being reminiscent of a track. For the back plate, we added holes for the screws that align with the brass inserts and a hole for the wiring. Here is the illustrator file: 

<img width="341" height="514" alt="508499320-a82933f3-5807-472c-8df1-fea938a3945c" src="https://github.com/user-attachments/assets/fa32d235-679c-412e-8553-c858c1684518" /> <img width="357" height="553" alt="508499393-4a13e682-e49a-45e7-8062-d80fe5704274" src="https://github.com/user-attachments/assets/e33af92e-c4b3-407b-af1f-9c0f8f74d90c" />

It took a few iterations to get the front plate to fit perfectly, especially since the laser burns off a bit of material in the process of cutting. So many versions that were a bit too big, and some that were a bit too small, but ultimately we got the right fit on a piece of scrap frosted acrylic, which diffused the light nicely and fit really well! 

Here is one of our attempts that just barely fit:

<img width="500" alt="508499530-b74cb3de-9dc7-42c8-918b-bfffddaaa4c0" src="https://github.com/user-attachments/assets/2fead1aa-5d5e-4b87-97eb-bdf1a2f99ccb" />

And ultimately, the final product assembled:

<img width="400" alt="508499530-b74cb3de-9dc7-42c8-918b-bfffddaaa4c0" src="https://github.com/user-attachments/assets/84c35dad-2abe-40f0-a990-03491e1f01c1" /> <img width="400" alt="508499530-b74cb3de-9dc7-42c8-918b-bfffddaaa4c0" src="https://github.com/user-attachments/assets/8684bacb-d34c-4a1e-9128-a3d5aca04ea4" />

I'm really happy with how the fabrication turned out! I think it looks really clean, and I haven't spent a lot of time with 3D modelling and fusion, so it all feels way less scary now. I also really love adding brass inserts, so I'm looking forward to adding those to more projects because it's super easy and makes the whole thing feel a lot more polished and finished.

## WEEK 11.

Nov 4 - Nov 6

### **Fabrication**

This week, we were assigned our final project for this class. For this project, I am working with Sarah Kwakkelaar and Nengi Njere. Their journals can be found here: [Sarah](https://ambitious-knife-7da.notion.site/tdf-journal) & [Nengi](https://www.notion.so/TDF-Weekly-Design-Journals-269ea4efb77780ac8757e596e39ee18a?source=copy_link).

Our main focus this week, in both fabrication and electronics was to ideate, settle and outline an idea and timeline for our final project. 

### **Electronics**

## WEEK 12.

Nov 11 - Nov 13

### **Fabrication**

For fabrication this week, I was tasked with designing two tests for our infrared temperature sensor to understand what it will need in order to work while integrated into our final form. I decided to test along two variables. The first was to see if it would work behind/enclosed in PLA, so I designed 4 structures in Fusion with top panels of varying widths (4mm, 3mm, 2mm, and 1mm) to see if the sensor is able to work through PLA, and if so, what would the maximum thickness of the material be. This was my original design:

<img width="500" alt="Screenshot 2025-11-18 at 11 33 16" src="https://github.com/user-attachments/assets/d3555ae5-a204-4615-bec2-4383b1c5fb14" />

After printing on the bambu, I realized that the structure was a little too tall and because the sensor was a little less sensitive than we thought it would be, it wasn't changing the temperature readings at all. 

<img width="500" alt="Screenshot 2025-11-18 at 11 32 43" src="https://github.com/user-attachments/assets/603ea997-a756-49b6-afb7-5228cf5c20c7" />

I made all the test structures shorter by 5 mm and reprinted.

<img width="500" alt="Screenshot 2025-11-18 at 11 32 43" src="https://github.com/user-attachments/assets/7092b40b-4a73-4ce3-980e-6a6195445767" /> <img width="500" alt="Screenshot 2025-11-18 at 11 32 43" src="https://github.com/user-attachments/assets/5e7813b8-da81-4621-88a5-1863b7c3e96e" />

The second test I designed was for the consideration of a hole or gap in the PLA, to see if this would significantly alter how quick the sensor reacts to heat, and if so, how large the hole would need to be to make a big differnece in time and accuracy of the heat sensor. Using the 1mm structure design from the first test, I made 4 copies with holes of different diameters: 1mm, 1.5mm, 2mm and 3mm. I also tried 4mm but felt that it was just too large, and at that point we may as well cut a hole for the entirety of the sensor (which is still an option, though I think we'd like to hide the sensor). I printed the structures on the bambu printer. 

The results from both these tests will be reviewed in this week's electronic's section.

### **Electronics**

For electronics this week, I tested the physical structures I made using the infrared sensor, which Sarah wired up and wrote test code for. The test code just tests the sensor and has it detect the temperature. I tested it with my hand over the sensor first, and I wasn't getting much of a change and it turns out its just because my hands were very cold. Once I warmed my hands with warm water, I was able to get a 3-4 degree increase on the sensor with my hand over the sensor. This was the range against which I was comparing my tests.

Starting with the material thickness test, I was able to get a small change in temperature with the 4mm structure. About 1-1.5 degrees C with my hand over the sensor+structure for about 20 seconds. It's good to know this works, but I think we are hoping for a slightly faster and larger change. These are the results from all the varying widths:

4mm -- about 1.0 degrees C of change in 15-20 seconds

3mm -- about 1.5 degrees C of change in 15-20 seconds

2mm -- about 3.0 degrees C of change in 15-20 seconds

1mm -- about 4.5 degrees C of change in 15-20 seconds

The 4mm test:


The 1mm test:

I think the 1mm width will give us enough of a change for our ambient objects to work, but I still wanted to test the different sizes of holes to have the extra information

## WEEK 13. 

Nov 18 - 20

### **Fabrication**

This week for fabrication, we need to settle on a final form for both the Sending and Receiving object. We knew we wanted to do something organic and ergonomic, especially for the Sending object, since our intention is for it to sit really naturally and comfortably in the hand. We want both objects to share aesthetic similarities, and have some physical part of their forms either interlock or relate to each other. We decided that one of the easiest ways to test form, especially since the in-hand feel is very important, would be to model inital ideas with clay. This was a form of 3 dimensional sketching for us, and allowed us to come up with several quick and easy sacrifical prototypes. It also allowed us to instantly test in-hand feeling, instead of having to wait for 3D prints to finish. 



### **Electronics**

## WEEK 14. 

Nov 25 - 27

