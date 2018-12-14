function mytriangle(){
    var part  = [
               parseInt(document.getElementById("part1").value),
               parseInt(document.getElementById("part2").value),
               parseInt(document.getElementById("part3").value)
               ];
               
     
     var partsum=parseInt(part[0])+parseInt(part[1]);
    if (part[0]==part[1]&& part[1]==part[2])
    {
    console.log("this triangle is equilateral");
    }
    else if (part[0]==part[1]||part[1]==part[2]||part[0]==part[2])
    {
    console.log("this triangle is isosceles");
    }
    else if (partsum>part[2]) 
    {
    console.log("this triangle is scalene");
    }
    else 
    {
    console.log("Not a triangle");
