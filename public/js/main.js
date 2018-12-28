
// Load video from User input via video ID
$(".myForm").submit(function (e) {
    e.preventDefault();
    let vidID = $("#videoID").val();
    player.loadVideoById(vidID);
    $("#videoID").val('');
})
