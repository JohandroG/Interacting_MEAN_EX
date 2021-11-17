var WinnieThePooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("I love Honey!");
        } };

var Piglet = { 
    character: "Piglet",
    greet: function(){
        console.log("Piglet says hi!");
        } };

var Bees = { 
    character: "Bees",
    greet: function(){
        console.log("Bees says hi!");
        } };

var ChristopherRobin = { 
    character: "Christopher Robin",
    greet: function(){
        console.log("Christopher says hi!");
        } };

var Owl = { 
    character: "Owl",
    greet: function(){
        console.log("Owl says hi!");
        } };;

var Rabbit = { 
    character: "Rabbit",
    greet: function(){
        console.log("Rabbit says hi!");
        } };

var Gopher = { 
    character: "Ghoper",
    greet: function(){
        console.log("Ghoper says hi!");
        } };

var Kanga = { 
    character: "Kanga",
    greet: function(){
        console.log("Kanga says hi!");
        } };

var Eeyore = { 
    character: "Eeyore",
    greet: function(){
        console.log("Eeyore says hi!");
        } };


var Heffalumps = { 
    character: "Heffalumps",
    greet: function(){
    console.log("Heffalumps says hi!");
    } };

var Tigger = { 
    character: "Tigger", 
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
        }};


Heffalumps.north = null
Heffalumps.south = null
Heffalumps.west = Eeyore
Heffalumps.east = null

Eeyore.north = null
Eeyore.south = Kanga
Eeyore.west = null
Eeyore.east = Heffalumps

Kanga.north = Eeyore
Kanga.south = ChristopherRobin
Kanga.west = null
Kanga.east = null

ChristopherRobin.north = Kanga
ChristopherRobin.south = WinnieThePooh
ChristopherRobin.west = Owl
ChristopherRobin.east = Rabbit

Rabbit.north = null
Rabbit.south = Bees
Rabbit.west = ChristopherRobin
Rabbit.east = Gopher

Gopher.north = null
Gopher.south = null
Gopher.west = Rabbit
Gopher.east = null

Bees.north = Rabbit
Bees.south = null
Bees.west = WinnieThePooh
Bees.east = null

WinnieThePooh.north = ChristopherRobin
WinnieThePooh.south = Tigger
WinnieThePooh.west = Piglet
WinnieThePooh.east = Bees

Tigger.north = WinnieThePooh
Tigger.south = null
Tigger.west = null
Tigger.east = null

Piglet.north = Owl
Piglet.south = null
Piglet.west = null
Piglet.east = WinnieThePooh

Owl.north = null
Owl.south = Piglet
Owl.west = null
Owl.east = ChristopherRobin



let player = {
    location: Tigger
}

function travel(direction){
    let newLocation = player.location

if (direction == "north"){
    
    if(newLocation.north == null){
        console.log("The is not anybody there!")
        return
    }
    newLocation = newLocation.north
    console.log("You are in " + newLocation.character + "'s house");
    console.log(newLocation.greet())
}


if (direction == "south"){
    if(newLocation.south == null){
        console.log("The is not anybody there!")
        return
    }
    newLocation = newLocation.south
    console.log("You are in " + newLocation.character + "'s house");
    console.log(newLocation.greet())
}

if (direction == "west"){
    if(newLocation.west == null){
        console.log("The is not anybody there!")
        return
    }
    newLocation = newLocation.west 
    console.log("You are in " + newLocation.character + "'s house");
    console.log(newLocation.greet())
}

if (direction == "east"){
    if(newLocation.east == null){
        console.log("The is not anybody there!")
        return
    }
    newLocation = newLocation.east
    console.log("You are in " + newLocation.character + "'s house");
    console.log(newLocation.greet())
}
player.location = newLocation
}

travel("north");
travel("south");
travel("north");
travel("west");
travel("east");
// travel("west");
// travel("east");