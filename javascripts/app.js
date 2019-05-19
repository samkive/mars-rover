// Rover Object Goes Here
var rover ={
  direction: "&uarr;",
  x: 0,
  y: 0,
  travelLog:[],
}
// ======================


// ======================
function turnLeft(rover){

  ChangeLetterToArrow(rover.direction);

  console.log("turnLeft was called!");
  if(rover.direction=="N")
      rover.direction="W";
  else if(rover.direction=="E")
      rover.direction="N";
  else if(rover.direction=="S")
      rover.direction="E";
  else if(rover.direction=="W")
      rover.direction="S";
  else
        throw "wrong direction";

  console.log("The rover is now pointing to the : " +rover.direction + " direction");
  var roverID = ""+rover.x + "," + rover.y;
  ChangeLetterToArrow(rover.direction);
  document.getElementById(roverID).innerHTML = rover.direction;
}



function turnRight(rover){

  ChangeLetterToArrow(rover.direction);
  console.log("turnRight was called!");
  if(rover.direction=="N")
      rover.direction="E";
  else if(rover.direction=="E")
      rover.direction="S";
  else if(rover.direction=="S")
      rover.direction="W";
  else if(rover.direction=="W")
      rover.direction="N";
  else
        throw "wrong direction";

  console.log("The rover is now pointing to the : " +rover.direction + " direction");
  var roverID = ""+rover.x + "," + rover.y;
  ChangeLetterToArrow(rover.direction);
  document.getElementById(roverID).innerHTML = rover.direction;
}

function moveForward(rover){
  console.log("moveForward was called");
  var roverID = ""+rover.x + "," + rover.y;
  document.getElementById(roverID).innerHTML="";
  ChangeLetterToArrow(rover.direction);
  var wrongMove=false;
  if(rover.direction=="N"){
    if(rover.y>0)
    rover.y--;
    else
    wrongMove=true;}
  else if(rover.direction=="E" ){
    if(rover.x<9)
    rover.x++;
    else
    wrongMove=true;

  }
  else if(rover.direction=="S"){
    if(rover.y<9)
    rover.y++;
    else
    wrongMove=true;
  }
  else if(rover.direction=="W"){
    if(rover.x>0)
    rover.x--;
    else
    wrongMove=true;
    
  }
  else
    throw "wrong direction";


  
  if(wrongMove){
  console.log("Bounderie reached, cannot move in this direction");

  }
  else{
  console.log("The rover's coordinates are now : ( " +rover.x + " , " + rover.y + " )");
 
  }
  roverID = ""+rover.x + "," + rover.y;
  ChangeLetterToArrow(rover.direction);
  document.getElementById(roverID).innerHTML = rover.direction;
}


function command(commandline){

  for(var i =0;i<commandline.length;i++){
    rover.travelLog.push("( "+rover.x+" , "+rover.y + " )");
    var character = commandline[i];
    if(character=="l"){
      turnLeft(rover);
    }
    else if(character=="r"){
      turnRight(rover);
    }
    else if(character=="f"){
      moveForward(rover);
    }
    else if (character=="b"){
      MoveBackward(rover);
    }
    else{
      console.log("Wrong character");
    }
    

  }

  console.log(rover.travelLog);
}

function MoveBackward(rover){

  console.log("moveBackward was called");
  var roverID = ""+rover.x + "," + rover.y;
  document.getElementById(roverID).innerHTML="";
  ChangeLetterToArrow(rover.direction);
  var wrongMove=false;
  if(rover.direction=="N"){
    if(rover.y<9)
    rover.y++;
    else
    wrongMove=true;}
  else if(rover.direction=="E" ){
    if(rover.x>0)
    rover.x--;
    else
    wrongMove=true;

  }
  else if(rover.direction=="S"){
    if(rover.y>0)
    rover.y--;
    else
    wrongMove=true;
  }
  else if(rover.direction=="W"){
    if(rover.x<9)
    rover.x++;
    else
    wrongMove=true;
    
  }
  else
    throw "wrong direction";


  
  if(wrongMove){
  console.log("Bounderie reached, cannot move in this direction");

  }
  else{
  console.log("The rover's coordinates are now : ( " +rover.x + " , " + rover.y + " )");
 
  }
  roverID = ""+rover.x + "," + rover.y;
  ChangeLetterToArrow(rover.direction);
  document.getElementById(roverID).innerHTML = rover.direction;


}



function ChangeLetterToArrow(letter){
  if(letter == "N")
  rover.direction = "&uarr;";
  else if (letter=="S")
  rover.direction = "&darr;";
  else if (letter == "E")
  rover.direction = "&rarr;";
  else if (letter == "W")
  rover.direction = "&larr;";
  else if (letter == "&uarr;")
  rover.direction = "N";
  else if (letter == "&darr;")
  rover.direction = "S";
  else if (letter == "&rarr;")
  rover.direction = "E";
  else if (letter == "&larr;")
  rover.direction ="W";
  else 
   console.log("Wrong input in changeLetter");
}