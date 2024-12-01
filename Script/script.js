// ******reload page*****


//********* Login page *********

function login(){
    var loginpageemail = document.getElementById('login-page-email').value;
    var loginpagepassword = document.getElementById('login-page-password').value;
    var loginEmailAns = "Dhisha";
    var loginPasswordAns = "Dhisha@143";
    var dispaly =document.getElementById('display');
    
    
    if(loginpageemail == loginEmailAns && loginpagepassword == loginPasswordAns){
        window.location.href = 'https://stackoverflow.com/questions/20991618/how-to-navigate-to-another-file-using-jquery-or-javascript'
    }
    else{
        var hide = document.getElementById('hide').innerHTML = "Please enter correct password";
        dispaly.style.display = "block";
    }
}

function hideAndShow(){
    var x = document.getElementById("login-page-password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
setTimeout(hideAndShow , 5000);

// *******searchBox*******
function searchBox_show(){
    var search_click_bar=document.getElementById('search_click_bars');
    if (search_click_bar.style.display === "none") {
        search_click_bar.style.display = "block";
        // alert('hi')
    } else {
        search_click_bar.style.display = "none";
    }
}
// *******notification*******
function notification(){
    var notifications = document.getElementById('notifications');
    if (notifications.style.display === "none") {
        notifications.style.display = "block";
        // alert('hi')
    } else {
        notifications.style.display = "none";
    }
}

// *******create*******
function openAttachment() {
    document.getElementById('attachment').click();
}

function fileSelected(input){
    document.getElementById('btnAttachment').value = "File: " + input.files[0].name
}

// *******create_bg*******

function create(){
    var create_bg =document.getElementById('create_bg');
    var body_x = document.getElementById('body_x');
    body_x.style.overflow = "hidden";
    if (create_bg.style.display === "none") {
        create_bg.style.display = "block";
        // alert('hi')
    } else {
        create_bg.style.display = "none";
        body_x.style.overflow = "scroll";
    }
    // alert('hi');
}
function create_bg_x(){
    var create_bg =document.getElementById('create_bg');
    var body_x = document.getElementById('body_x');
    body_x.style.overflow = "scroll";
    if (create_bg.style.display === "none") {
        create_bg.style.display = "block";
        // alert('hi')
    } else {
        create_bg.style.display = "none";
    }
}




var arr=[];
function searchBox(){
    var search_box_side = document.getElementById('search_box_side').value;
    console.log(search_box_side);
    arr.push(search_box_side);
    console.log(arr);
    
}

// *******more*******

function more(){
    var more = document.getElementById('more');
    if (more.style.display === "none") {
        more.style.display = "block";
        // alert('hi')
    } else {
        more.style.display = "none";
    }
}

// *******emoji*******

function emoji(){
    var emoji=document.getElementById('emoji');
    if (emoji.style.display === "none") {
        emoji.style.display = "block";
    } else {
        emoji.style.display = "none";
    }
}
function emojis(){
    var emoji=document.getElementById('emojis');
    if (emoji.style.display === "none") {
        emoji.style.display = "block";
    } else {
        emoji.style.display = "none";
    }
}
function emojione(){
    var emoji=document.getElementById('emojione');
    if (emoji.style.display === "none") {
        emoji.style.display = "block";
    } else {
        emoji.style.display = "none";
    }
}
function emojisone(){
    var emoji=document.getElementById('emojisone');
    if (emoji.style.display === "none") {
        emoji.style.display = "block";
    } else {
        emoji.style.display = "none";
    }
}

// *****mute*****

const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("video");

function mute() {
    if (audio.paused) {
        audio.volume = 0.2;
        audio.play();
        icon.classList.add('fa-volume-high');
        icon.classList.remove('fa-volume-xmark');
        
    } else {
        audio.pause();
        icon.classList.add('fa-volume-xmark');
        icon.classList.remove('fa-volume-high');
    }
    button.classList.add("fade");
}

const buttons = document.querySelector("#buttons");
const icons = document.querySelector("#buttons > i");
const audios = document.querySelector("#videos");
function mutes() {
    if (audios.paused) {
        audios.volume = 0.2;
        audios.play();
        icons.classList.add('fa-volume-high');
        icons.classList.remove('fa-volume-xmark');
        
    } else {
        audios.pause();
        icons.classList.add('fa-volume-xmark');
        icons.classList.remove('fa-volume-high');
    }
    buttons.classList.add("fade");
}

const buttonone = document.querySelector("#buttonone");
const iconone = document.querySelector("#buttonone > i");
const audioone = document.querySelector("#videoone");
function muteone() {
    if (audioone.paused) {
        audioone.volume = 0.2;
        audioone.play();
        iconone.classList.add('fa-volume-high');
        iconone.classList.remove('fa-volume-xmark');
        
    } else {
        audioone.pause();
        iconone.classList.add('fa-volume-xmark');
        iconone.classList.remove('fa-volume-high');
    }
    buttonone.classList.add("fade");
}

// ************* Explore_comment **************
const Explore_comment1_video = document.querySelector("#Explore_comment1_video");
function Xmark(){
    var Explore_comment1 = document.getElementById('Explore_comment1');
    var body = document.getElementById('body');
    Explore_comment1.style.display = "none";
    body.style.overflow = "scroll";
    Explore_comment1_video.pause();

}
function img1(){
    var Explore_comment1 = document.getElementById('Explore_comment1');
    var body = document.getElementById('body');
    body.style.overflow = "hidden";
    Explore_comment1.style.display = "block";
    Explore_comment1_video.play();
}

// Explore_comment2
const Explore_comment2_video = document.querySelector("#Explore_comment2_video");
function Xmark1(){
    var Explore_comment2 = document.getElementById('Explore_comment2');
    Explore_comment2.style.display = "none";
    var body = document.getElementById('body');
    body.style.overflow = "scroll";    
    Explore_comment2_video.pause();
}
function img2(){
    var Explore_comment2 = document.getElementById('Explore_comment2');
    var body = document.getElementById('body');
    body.style.overflow = "hidden";
    Explore_comment2.style.display = "block";
    Explore_comment2_video.play();
    // alert('img')
}

// Explore_comment3
const Explore_comment3_video = document.querySelector("#Explore_comment3_video");
function Xmark2(){
    var Explore_comment3 = document.getElementById('Explore_comment3');
    Explore_comment3.style.display = "none";
    var body = document.getElementById('body');
    body.style.overflow = "scroll";
    Explore_comment3_video.pause();
}
function img3(){
    var Explore_comment3 = document.getElementById('Explore_comment3');
    var body = document.getElementById('body');
    body.style.overflow = "hidden";
    Explore_comment3.style.display = "block";
    Explore_comment3_video.play();
    // alert('img')
}

// Explore_comment4
const Explore_comment4_video = document.querySelector("#Explore_comment4_video");
function Xmark3(){
    var Explore_comment4 = document.getElementById('Explore_comment4');
    Explore_comment4.style.display = "none";
    var body = document.getElementById('body');
    body.style.overflow = "scroll";
    Explore_comment4_video.pause();
}
function img4(){
    var Explore_comment4 = document.getElementById('Explore_comment4');
    var body = document.getElementById('body');
    body.style.overflow = "hidden";
    Explore_comment4.style.display = "block";
    Explore_comment4_video.play();
    // alert('img')
}

// Explore_comment5
const Explore_comment5_video = document.querySelector("#Explore_comment5_video");
function Xmark4(){
    var Explore_comment5 = document.getElementById('Explore_comment5');
    Explore_comment5.style.display = "none";
    var body = document.getElementById('body');
    body.style.overflow = "scroll";
    Explore_comment5_video.pause();
}
function img5(){
    var Explore_comment5 = document.getElementById('Explore_comment5');
    var body = document.getElementById('body');
    body.style.overflow = "hidden";
    Explore_comment5.style.display = "block";
    Explore_comment5_video.play();
    // alert('img')
} 

// ***************reels******************
function loadVideos(){
    var videos = document.querySelectorAll('video');
    for(const video of videos){
        // ive tried changing the click function to scroll but didn't work
        video.addEventListener('click', function(){
            if(video.paused){
                video.play();
            }else{
                video.pause()
            }
        });
    }
}

loadVideos()



// chats_history1()

function chats_history(){
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content1.style.display = 'block';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
}
function chats_history1(){
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content2.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
    
}
function chats_history2(){
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content3.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
    
}
function chats_history3(){
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');
    
    click_chat_message_text_content4.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
    
}
function chats_history4(){
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content5.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
}
function chats_history5(){
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content6.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
}
function chats_history6(){
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content7.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
}
function chats_history7(){
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content8.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
}
function chats_history8(){
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content9.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
}
function chats_history9(){
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');

    click_chat_message_text_content10.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content11.style.display = 'none';
}
function chats_history10(){
    var click_chat_message_text_content11= document.getElementById('click_chat_message_text_content11');
    var click_chat_message_text_content10= document.getElementById('click_chat_message_text_content10');
    var click_chat_message_text_content9= document.getElementById('click_chat_message_text_content9');
    var click_chat_message_text_content8= document.getElementById('click_chat_message_text_content8');
    var click_chat_message_text_content7= document.getElementById('click_chat_message_text_content7');
    var click_chat_message_text_content6= document.getElementById('click_chat_message_text_content6');
    var click_chat_message_text_content5= document.getElementById('click_chat_message_text_content5');
    var click_chat_message_text_content4= document.getElementById('click_chat_message_text_content4');
    var click_chat_message_text_content3= document.getElementById('click_chat_message_text_content3');
    var click_chat_message_text_content2= document.getElementById('click_chat_message_text_content2');
    var click_chat_message_text_content1= document.getElementById('click_chat_message_text_content1');

    click_chat_message_text_content11.style.display = 'block';
    click_chat_message_text_content1.style.display = 'none';
    click_chat_message_text_content2.style.display = 'none';
    click_chat_message_text_content3.style.display = 'none';
    click_chat_message_text_content4.style.display = 'none';
    click_chat_message_text_content5.style.display = 'none';
    click_chat_message_text_content6.style.display = 'none';
    click_chat_message_text_content7.style.display = 'none';
    click_chat_message_text_content8.style.display = 'none';
    click_chat_message_text_content9.style.display = 'none';
    click_chat_message_text_content10.style.display = 'none';
}

