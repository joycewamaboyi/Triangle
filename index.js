function mytriangle(){
    var part  = [
               parseInt(document.getElementById("part1").value),
               parseInt(document.getElementById("part2").value),
               parseInt(document.getElementById("part3").value)
               ];
               
     
    
     if(part[0]+part[1]>part[2]&& part[0]+part[2]>part[1]&& part[1]+part[2]>part[0])
     {
    if (part[0]===part[1]&& part[1]===part[2] &&part[1]===part[2])
    {
    alert("this triangle is equilateral");
    }
    else if (part[0]===part[1]||part[1]===part[2]||part[0]===part[2])
    {
    alert("this triangle is isosceles");
    }
    else 
    {
    alert("this triangle is scalene");
    }
    }
    else 
    {
    alert("Not a triangle");
    }
    }