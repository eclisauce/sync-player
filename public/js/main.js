
// Load video from User input via video ID
$(".myForm").submit(function (e) {
    e.preventDefault();
    let vidID = $("#videoID").val();
    player.loadVideoById(vidID);
    $("#videoID").val('');

})


function progressBarLoop() {
    let timeLineBase = $('.timeLineBase');
    let timeLine = $('.timeLine');
    setInterval(function () {
        if (player == null || timeLineBase == null) {
            return
        }
        let fraction = (player.getCurrentTime() / player.getDuration()) * 100;


        timeLine.css("left", fraction.toString() + '%');
    }, 150)
}
