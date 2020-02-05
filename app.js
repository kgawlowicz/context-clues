//builds h3's adds click event
// Write a function that captures the value of i in the for loop.
$(document).ready(function () {
    for (i = 1; i < 101; i++) {
        var h3 = $('<h3></h3>');
        h3.text('Accusation ' + i)
        $(h3).click(Accusations(i));
        $('.h3Container').append(h3);
    }
    function Accusations(index) {
        return function () {
            alert(friends[index % 5] + " killed them with a " + weapons[index % 20] + " in the " + locations[index % 10])
        }
    }
});
//create arrays for friends, locations, weapons
var friends = ['Jeff', 'Joe', 'Bruce', 'Lori', 'Karen'];
var locations = ['House', 'Work', 'School', 'Grocery Store', 'Park', 'Theater', 'Room', 'Basement', 'Garage', 'Cemetary'];
var weapons = ['Knife', 'Gun', 'Oozie', 'Fork', 'Rope', 'Limp noodle', 'Can', 'Jar', 'Blunt instrument', 'Book', 'File', 'Candlestick', 'Stick', 'Bat', 'Rod', 'Reel', 'Glass', 'Bowling Ball', 'Tire', 'Animal'];
