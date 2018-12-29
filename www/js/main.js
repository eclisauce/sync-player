const socket = io();

let play = $('.play');
let pause = $('.pause');

// Load video from User input via video ID
$(".myForm").submit(function (e) {
    e.preventDefault();
    let vidID = $("#videoID").val();
    player.loadVideoById(vidID);
    $("#videoID").val('');

});

$('.play').click(function (e) {
    socket.emit('playEvent', 'play');
    player.playVideo();
})

$('.pause').click(function (e) {
    socket.emit('playEvent', 'pause');
    player.pauseVideo();
})


// Function to show the progressbar animation
function progressBarLoop() {
    let progressBar = $('.progressBar');
    let timeLine = $('.timeLine');

    // progressBar.click(function (event) {
    //     let divOffSet = $(this).offset();
    //     console.log((event.pageX - divOffSet.left));

    // })

    setInterval(function () {
        if (player == null || progressBar == null) {
            return
        }
        let fraction = (player.getCurrentTime() / player.getDuration()) * 100;
        timeLine.css("left", fraction.toString() + '%');
    }, 150)
}
