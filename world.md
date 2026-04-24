---
title: The World of Almerra
layout: map
post-image: "https://almerra.com/assets/images/bg-4.png"
description: An Iron-Age Waterworld with sprawling continents and stormy seas separate the warring kingdoms, each seeking their claim to the legacy of a fallen ancient legacy.
tags:
- almerra
- post
- about
---




### (WIP)

The open-world shown below is constantly being updated through a CI/CD pipeline as development in Unreal progresses.  Mountain and coastline sculpting, fauna and flora refinements and the various biomes are being continuously built out and will be updated many more times in the future.   


<div id="map"></div>

<script src="https://almerra.com/assets/js/leaflet.js"></script>
<script>
var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: 1,
  maxZoom: 5
});

L.tileLayer('/assets/images/worldmap/{z}/{x}/{y}.png', {
  tms: true,
  noWrap: true
}).addTo(map);

map.setView([-200, 200], 1);

</script>




### Interacting with the World

Every Nation, City and Village in the world is simulated across multiple threads that operate their economy and military whether the player is present or not.  Each one has its own regional attributes, military units and trade operations that respond to their surroundings.  Some are near to hostile Nations and Tribes and must focus on defense and martial professions, whereas some others prioritise peaceful trade and order.  Depending on what actions the player may take, they can all be influenced to forge future Alliances to differing goals. 

Below is a short clip of entering the town and having the data come to life, with a small number of inhabitants in a work-in-progress Village.   

[![Interaction](http://img.youtube.com/vi/jku7vaf1ppU/0.jpg)](https://www.youtube.com/watch?v=jku7vaf1ppU&list=PLLcxd4soKLM7Wa4h2sFvUjYCaAIBJf5Lb "Dev Scrolls - Threaded AI LODs and Dialogues")

### World Travel

Accessed via the World Map, time compression in Almerra allows for unrestricted passage to anywhere in the world within a short time as long as you are not in combat.  This is built upon on a grid-based data system, able to access any world-specific data via its coordinate in a database.  While in Auto-Travel, every square travelled consumes turns that advances the AI as well, and decisions will have sometimes unforseen impacts that can cause turmoil and topple reigemes.
 
World Travel via the map is usable at anytime while travelling via a Landcraft or Watercraft, the latter behind the only way of _affectively_ crossing the seas.  _(Mistakes have been made)_


[![Worlddata](http://img.youtube.com/vi/QeITXEhehkc/0.jpg)](https://www.youtube.com/watch?v=QeITXEhehkc&list=PLLcxd4soKLM7Wa4h2sFvUjYCaAIBJf5Lb&index=12 "DataBuilder")


### Watercraft
The various Nations all employ some forms of Nautical vessels in their Economy and Military, with each one being based on their regional resources and historical experience.  They use them to haul specific goods which require different considerations for how they build them, and also have differences in how theyre used tactically by their respective military doctrines. 

Below are some initial Player-Controller tests for climbing aboard, interacting and riding the base class which is still under heavy development.

[![Seamanship](http://img.youtube.com/vi/R-2igygUVRc/0.jpg)](https://www.youtube.com/watch?v=R-2igygUVRc&list=PLLcxd4soKLM7Wa4h2sFvUjYCaAIBJf5Lb&index=4 "Seamanship")

### Landcraft
There are all sorts of operational objects within the world including Ballistas, Siege Catapults, and War Elephants beyond the usual Horse and Camel.  Master of them all through commanding your troops will ensure no enemies stand in your way!


![Mounts](https://almerra.com/assets/images/mounts.jpg)

