let isPlaySong = true
let song = document.getElementById('song')

function playSong() {     
   if(isPlaySong) {
       song.play()
       isPlaySong = false
       document.querySelector('.info-area').classList.add('play-song')             
       document.querySelector('.btn-play').classList.add('play')              
   } else {
       song.pause()
       isPlaySong = true
       document.querySelector('.info-area').classList.remove('play-song')      
       document.querySelector('.btn-play').classList.remove('play')      
   }
}



var i=0
var txt = "I’m NGUYEN TRI DUNG I am creative front-end dev. I'm currently learning web development."

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("text").innerHTML += txt.charAt(i); //Phương thức charAt () trả về ký tự tại một chỉ mục (vị trí) được chỉ định trong một chuỗi.
      i++;
      setTimeout(typeWriter, 50);
    }
}

var navItems=document.querySelectorAll('.nav-item');



var line = document.querySelector('.nav-list .line')
var navItem=document.querySelector('.nav-item.active')
line.style.left = navItem.offsetLeft + 'px';
line.style.width = navItem.offsetWidth + 'px';

window.onload = typeWriter;



let bg2 = true

function changeBg2() {
    if(bg2) {
        document.querySelector('.background-1').classList.add('none-bg')
        document.querySelector('.nav-item:nth-child(1)').classList.remove('active')
        document.querySelector('.nav-item:nth-child(2)').classList.remove('active')
        document.querySelector('.nav-item:nth-child(3)').classList.add('active')
        document.querySelector('.background-2').classList.add('open-bg')
        document.querySelector('.background-3').classList.add('none-bg')
        var navItem=document.querySelector('.nav-item.active')
        line.style.left = navItem.offsetLeft + 'px';
        line.style.width = navItem.offsetWidth + 'px';
        bg2 = false
    } else {
        document.querySelector('.background-1').classList.remove('none-bg')
        document.querySelector('.background-2').classList.remove('open-bg')
        document.querySelector('.background-3').classList.remove('none-bg')
        document.querySelector('.nav-item:nth-child(3)').classList.remove('active')
        document.querySelector('.nav-item:nth-child(1)').classList.remove('active')
        document.querySelector('.nav-item:nth-child(2)').classList.add('active')
        var navItem=document.querySelector('.nav-item.active')
        line.style.left = navItem.offsetLeft + 'px';
        line.style.width = navItem.offsetWidth + 'px';
        bg2 = true
    }
}

let bg3=true

function changeBg3() {
    if(bg3) {
        document.querySelector('.background-1').classList.add('none-bg-top')
        document.querySelector('.nav-item:nth-child(3)').classList.remove('active')
        document.querySelector('.nav-item:nth-child(2)').classList.remove('active')
        document.querySelector('.nav-item:nth-child(1)').classList.add('active')
        document.querySelector('.background-2').classList.add('open-bg')
        document.querySelector('.background-3').classList.add('open-bg')
        var navItem=document.querySelector('.nav-item.active')
        line.style.left = navItem.offsetLeft + 'px';
        line.style.width = navItem.offsetWidth + 'px';
        bg3= false
    } else {
        document.querySelector('.nav-item:nth-child(1)').classList.remove('active')
        document.querySelector('.nav-item:nth-child(3)').classList.remove('active')
        document.querySelector('.nav-item:nth-child(2)').classList.add('active')
        document.querySelector('.background-1').classList.remove('none-bg-top')
        document.querySelector('.background-2').classList.remove('open-bg')
        document.querySelector('.background-3').classList.remove('open-bg')
        var navItem=document.querySelector('.nav-item.active')
        line.style.left = navItem.offsetLeft + 'px';
        line.style.width = navItem.offsetWidth + 'px';
        bg3 = true
    }
}

