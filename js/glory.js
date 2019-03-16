document.getElementById('glory').addEventListener('click' , function(){
    document.querySelector('.portfolio-none').style.display = 'block';
});

document.getElementById('video-button').addEventListener('click' , function(){
    document.querySelector('.video-none').style.display = 'block';
});

function openbox (box) {
    display = document.getElementById('box').style.display;
    if (display == 'block'){
        document.getElementById('box').style.display = 'none';
    } else {
        document.getElementById('box').style.display = 'block';
    }
}