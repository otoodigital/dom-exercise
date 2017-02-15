/*Task 1

Access HTML element with id tag-line.
Access all headings that belong to div with the class name bg-main-content.
Create the variable collect and assign it with content of tag-line.
Loop through the array of headings and append the content of each heading to variable collect
After the loop, use alert to print collect*/


//Access HTML element with id tag-line.

var taglineElement = document.getElementById("tag-line");

//Access all headings that belong to div with the class name bg-main-content.
var head = document.querySelectorAll(".bg-main-content h2");
//console.log(head);

//Create the variable collect and assign it with content of tag-line.
var collect = document.getElementById("tag-line").innerHTML + "\n-------------------------------------------\n";

//Loop through the array of headings and append the content of each heading to variable collect
for (var i = 0; i < head.length; i += 1) {
    var collect = collect + head[i].firstChild.innerHTML + "\n";
}

//After the loop, use alert to print collect
alert(collect);


// TASK 2
/*Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.
Use property children to "scoop" in array all HTML elements that belong to that div.
Create the variable collect and assign it with content of heading that belongs to gotten array.
Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
After the loop, use alert to print collect*/


//Access 13th div with class name box that belongs to div with the class name bg-main-content. 
var when_to_launch = document.querySelector(".bg-main-content .box:nth-child(13)");

//Use property children to "scoop" in array all HTML elements that belong to that div.
var scoop = when_to_launch.children;

//Create the variable collect and assign it with content of heading that belongs to gotten array.
var collect = scoop[0].innerHTML;

//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
for (var j = 1; j < scoop.length; j += 3) {
    var collect2 = collect + "\n------------------------\n" + scoop[j].innerHTML;
}

//After the loop, use alert to print collect
alert(collect2);




