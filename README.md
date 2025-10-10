# TDF FA25 DESIGN JOURNAL

## Table of Contents

[WEEK 3](#week-3)

[WEEK 4](#week-4)

[WEEK 5](#week-5)

[WEEK 6](#week-6)

[WEEK 7](#week-7)

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
