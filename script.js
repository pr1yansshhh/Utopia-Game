score = 0;
cross = true;

audio = new Audio('song.mp3');
audiogo = new Audio('gameover2.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
    console.log("key code is: ", e.keyCode);
    travis = document.querySelector('.travis');
    if (e.keyCode == 38) {
        // Handle up arrow key
        travis.classList.add('animateTravis');
        setTimeout(() => {
            travis.classList.remove('animateTravis');
        }, 700);
    } else if (e.keyCode == 39) {
        // Handle right arrow key
        travisX = parseInt(window.getComputedStyle(travis, null).getPropertyValue('left'));
        travis.style.left = travisX + 112 + "px";
    } else if (e.keyCode == 37) {
        // Handle left arrow key
        travisX = parseInt(window.getComputedStyle(travis, null).getPropertyValue('left'));
        travis.style.left = (travisX - 112) + "px";
    }
}


setInterval(() => {
    travis = document.querySelector('.travis');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(travis, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(travis, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY)
    if (offsetX < 200 && offsetY < 101) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause(); 
        }, 1000);
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000); 
    }
}, 10); 
function updateScore(score){
    scoreCont.innerHTML = 'Your Score: ' + score
}
