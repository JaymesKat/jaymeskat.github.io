$(document).ready(function(){
    let wallsHit = false;
    let gameStarted = false;
    $(".boundary").on("mouseenter", function() {
        $(".boundary").addClass("youlose");
        wallsHit = true
    });

    $("#end").on("mouseenter", function() {
        if(!wallsHit){
            $("#status").text("You win! :]");
        } else {
            $("#status").text("Sorry, you lost :[");
        }
        gameStarted = false;
    });

    $("#start").on("click", function() {
        $(".boundary").removeClass("youlose");
        wallsHit = false;
        gameStarted = true;
        $("#status").text('Click the "S" to begin.');
    });

    $("#maze").on("mouseleave", function() {
        if(gameStarted) {
            $(".boundary").addClass("youlose");
            gameStarted = false;
            $("#status").text("Sorry, you lost :[");
        }
    });
});