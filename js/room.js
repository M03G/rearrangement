$(document).ready(function(){
    var k = 10;
    var coordinates = function(element) {
        var room = $(".room");
        var length_room = room.innerWidth();
        var height_room = room.innerHeight();
        element = $(element);
        var top = element.position().top;
        var bottom = height_room - top - element.outerHeight()
        var left = element.position().left;
        var right = length_room - left - element.outerWidth()

        console.log((top / k).toFixed(2) + " " + (right / k).toFixed(2) + " " + (bottom / k).toFixed(2) + " " +(left / k).toFixed(2));
    };

    $(".form").on("click", "#add_obj", function(){
        var room = $(".room");
        var length_room = room.innerWidth();
        var height_room = room.innerHeight();
        var width = $("#width_obj").val();
        var height = $("#height_obj").val();
        var title = $("#title_obj").val();
        if ((width * k) < length_room && (height * k) < height_room) {
            var newObj = $('<div class="drag" style="left:1px;top:1px;width:' + (width * k * 100 / length_room) +
            '%;height:' + (height * k * 100 / height_room) +
            '%;" l="' + width + '" h="' + height + '"><p>' + title + '</p></div>').draggable({containment: ".room", scroll: false, stack: ".drag", drag: function() {
                coordinates($(this));
            }}).css({"position":"absolute"});
            room.prepend(newObj);
        } else {
            var status = "Size of object to be added can not be larger than the size of the room.";
            console.log(status);
        }

    });

    $(".form").on("click", "#apply_room", function(){
        var room = $(".room");
        var roomWidth = room.innerWidth();
        var length_room = $("#length_room").val();
        var height_room = $("#height_room").val();
        var diff = length_room / height_room;
        var roomHeight = roomWidth / diff;
        k = roomWidth / length_room;
        room.css({"height":roomHeight + "px"})

    });

    $(".form").on("click", "#add_wr", function(){
        var room = $(".room");
        var roomWidth = room.innerWidth();
        var roomHeight = room.innerHeight();
        var length_wr = $("#length_wr").val();
        var distance_wr = $("#distance_wr").val();
        var side = $("#side_wr").val();
        var param, cl, os;
        switch (side) {
            case '1':
                param = 'left:' + (distance_wr * k * 100 / roomWidth) + '%;top:-4px;height:7px;width:' + (length_wr * k * 100 / roomWidth) + '%;';
                cl = 'gor';
                os = 'x';
                break;
            case '2':
                param = 'top:' + (distance_wr * k * 100 / roomHeight) + '%;right:-4px;width:7px;height:' + (length_wr * k* 100 / roomHeight) + '%;';
                cl = 'ver';
                os = 'y';
                break;
            case '3':
                param = 'left:' + (distance_wr * k * 100 / roomWidth) + '%;bottom:-4px;height:7px;width:' + (length_wr * k* 100 / roomWidth) + '%;';
                cl = 'gor';
                os = 'x';
                break;
            case '4':
                param = 'top:' + (distance_wr * k * 100 / roomHeight) + '%;left:-4px;width:7px;height:' + (length_wr * k* 100 / roomHeight) + '%';
                cl = 'ver';
                os = 'y';
                break;
            default:
                console.log("Incorrect");
        }


        var newObj = $('<div class="wr ' + cl + '" style="' + param + '"></div>').draggable({containment: ".room", axis: os, drag: function() {
            coordinates($(this));
        }}).css({"position":"absolute"});;
        room.append(newObj);


    });

    $(".drag").draggable({ containment:".room", scroll:false, stop: function() {
        coordinates('.drag');
    } });
});