const socket = io();

let buttons = document.getElementsByTagName('button');
let playButton = buttons[0];
let pauseButton = buttons[1];

// slider
let slider = document.getElementById('slider');

// pause and play event listener added
playButton.addEventListener('click', playVideo);
pauseButton.addEventListener('click', pauseVideo);


function onPlayerReady() {
    $(".myForm").submit(function (e) {
        e.preventDefault();
        let videoId = new String($("#videoID").val());
        $("#videoID").val('');
        socket.emit('loadVid', videoId);
        player.loadVideoById(videoId);
        player.stopVideo();
    });
}


let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            onReady: onPlayerReady,
            onError: onPlayerError
        },
        playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
            controls: 0,
            disablekb: 1,
            showInfo: 0
        },

    });
}

function onPlayerError() {
    console.log(player.m.onError);
    if (player.m.onError = true) {
        $('#inputHelp').removeClass('d-none');
        setTimeout(function () {
            $('#inputHelp').addClass('d-none');
        }, 4000);
    } else {
        onPlayerReady();
    }
}

// play event added
function playVideo() {
    socket.emit('play')
    player.playVideo();
    setInterval(() => {
        let fraction = player.getCurrentTime() / player.getDuration() * 100;
        slider.value = fraction;
        socket.emit('slider', slider.value);
    }, 150)
}

// pause event handled
function pauseVideo() {
    socket.emit('pause')
    player.pauseVideo();
}

// seeker handled
function changeTime(e) {
    let goTo = player.getDuration() * (e.value / 100);
    player.seekTo(goTo, true);
    e.value = goTo
    socket.emit('update', goTo);
}

// socket events handled

socket.on('loadVid', (videoId) => {
    player.loadVideoById(videoId);
    player.stopVideo();
})

socket.on('update', (data) => {
    slider.value = data;
    player.seekTo(data, true);
})

socket.on('play', () => {
    player.playVideo();
})

socket.on('pause', () => {
    player.pauseVideo();
})

socket.on('slider', (data) => {
    slider.value = data;
})
