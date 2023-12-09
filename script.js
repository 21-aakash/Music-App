console.log('spotify');



//initilaise the variables 

let songindex=0;
let audioelement= new Audio('assets/songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');

let mastersong=document.getElementById('mastersong');

let gif=document.getElementById('gif');

let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[

    { songname:"Love-Dose", filepath:"assets/songs/1.mp3", cover:"assets/covers/1.jpg" },
    { songname:"Kalaster", filepath:"assets/songs/2.mp3", cover:"assets/covers/2.jpg" },
    { songname:"Blue Eyes", filepath:"assets/songs/3.mp3", cover:"assets/covers/3.jpg" },
    { songname:"Brown Rang", filepath:"assets/songs/4.mp3", cover:"assets/covers/4.jpg" },
    { songname:"Hogi-MeriJeet", filepath:"assets/songs/5.mp3", cover:"assets/covers/5.jpg" },
    { songname:"Dheere Dheere", filepath:"assets/songs/6.mp3", cover:"assets/covers/6.jpg" },
    { songname:"First Kiss", filepath:"assets/songs/7.mp3", cover:"assets/covers/7.jpg" },
    { songname:"Billo Tu Aag", filepath:"assets/songs/8.mp3", cover:"assets/covers/8.jpg" },
    { songname:"Desi Kalakar", filepath:"assets/songs/9.mp3", cover:"assets/covers/9.jpg" },
]



// audioelement.play();

songItem.forEach((element,i)=>{

console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].cover;
element.getElementsByClassName("songname")[0].innerText=songs[i].songname;


}
)


//hamdle play pause click
masterplay.addEventListener('click',()=>{

if(audioelement.paused|| audioelement.currentTime<=0)
{
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

    gif.style.opacity=1;

}
else
{

    audioelement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');

gif.style.opacity=0;

}
})


 




//listen to events 
audioelement.addEventListener('timeupdate', ()=>{

console.log('timeupdate');


progress=parseInt((audioelement.currentTime/audioelement.duration)*100);

console.log('progress');

progressbar.value=progress;


})

progressbar.addEventListener('change' , ()=>{

    audioelement.currentTime=((progressbar.value*audioelement.duration)/100);


}
);

//makedeafault pause 

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);  
        makeAllPlays();
        songindex= parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        

        audioelement.currentTime=0;

        audioelement.src=`assets/songs/${songindex+1}.mp3`;

        audioelement.play();
        gif.style.opacity=1;
        mastersong.innerText= songs[songindex].songname;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');


    });
});

document.getElementById('next').addEventListener('click',()=>{


    if(songindex>=8)
    {
songindex=0;

    }
    else{
        songindex+=1;

    }
mastersong.innerText= songs[songindex].songname;
    
    audioelement.currentTime=0;

    audioelement.src=`assets/songs/${songindex+1}.mp3`;

    audioelement.play();
    gif.style.opacity=1;

    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{


    if(songindex<=0)
    {
songindex=0;

    }
    else{
        songindex-=1;

    }
    mastersong.innerText= songs[songindex].songname;
    audioelement.currentTime=0;

    audioelement.src=`assets/songs/${songindex+1}.mp3`;

    audioelement.play();
    gif.style.opacity=1;

    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})
