<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Обставь комнату!</title>
    <link href="/css/room.css" rel="stylesheet">
    <script src="/js/jquery-2.1.1.min.js"></script>
    <script src="/js/jquery-ui.min.js"></script>
    <script src="/js/room.js"></script>
</head>
<body>
<div class="wrapper">
    <div class="sidebar">
        <div class="form">
            <h2>Room parameters</h2>
            <input type="text" id="length_room" placeholder="Length, m">
            <input type="text" id="height_room" placeholder="Height, m">
            <div id="apply_room" class="button">Apply</div>
        </div>
        <div class="clear"></div>
        <div class="form">
            <h2>Add object</h2>
            <input type="text" id="width_obj" placeholder="Width, m">
            <input type="text" id="height_obj" placeholder="Height, m">
            <input type="text" id="title_obj" placeholder="Title">
            <input type="checkbox" id="fav"><label for="fav">Rotation</label>
            <div id="add_obj" class="button">Add</div>
        </div>
        <div class="clear"></div>
        <div class="form">
            <h2>Window/door</h2>
            <input type="text" id="length_wr" placeholder="Length, m">
            <input type="text" id="distance_wr" placeholder="Distance to, m">
            <select id="side_wr">
                <option value="1">Top</option>
                <option value="2">Right</option>
                <option value="3">Bottom</option>
                <option value="4">Left</option>
            </select>

            <div id="add_wr" class="button">Add</div>
        </div>
    </div>
    <div class="rear">
        <h2>Rearrangement in the room.</h2>
        <div class="room">
        </div>
        <div class="coords">
            Left: <span id="di_left">0</span> m;
            Right: <span id="di_right">0</span> m;
            Top: <span id="di_top">0</span> m;
            Bottom: <span id="di_bottom">0</span> m;
        </div>

    </div>
</div>
</body>
</html>