$( document ).ready(function() {
    $("#space-invaders-game-button").click(function(event){
        alert("hello");
        $.getScript("starfield.js", function(){
                var container = document.getElementById('container');
                var starfield = new Starfield();
                starfield.initialise(container);
                starfield.start();
        });
    });
});