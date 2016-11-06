(function() {

function checkTime(){
    console.log(videoTime);
}

function init() {
    var player = document.getElementById('laracasts-video_html5_api');

    //The autoplay wasn't working properly anyway
    document.getElementsByClassName("vjs-big-play-button")[0].click();

   //HTML5 is cool enough to allow us to check when a video ends
    player.addEventListener('ended',function(){
        nextButton = document.getElementsByClassName('next-lesson-arrow next')[0];
        //Checks if we have a next button (aka, is the series over)
        if(nextButton != undefined)
        {

            console.log("Let's play the next one");
            //Gets the URL from the anchor's href
            nextVideoUrl = nextButton.getElementsByTagName('a')[0].getAttribute('href');
            //Redirects to the next video
            window.location.href = nextVideoUrl;
        }
    });
}



init();
console.log('Laracasts Extension Loaded');
})();
