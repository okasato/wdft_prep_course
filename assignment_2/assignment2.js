/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
var i;
for (i = 0; i < 100; i++){
    console.log(i+1);
}

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var l;
var a = "";
for (l = 0; l < 7; l++){
    a = a + "#";
    console.log(a);
}