/*var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'Hybrid_inst_final/facebook_shots/antonono/antonio_profile.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/img/Splash_image2.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'images/img/Splash_image3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'images/img/Splash_image4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'images/img/Splash_image5.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg';*/

/*------------------------------------*/

//var myJSONObject = {1:1};

var faceNum;
var roomNum;

function randomizeImages(){
    console.log("catfish");

    var faceImg = document.getElementById("face");
    var roomImg = document.getElementById("room");

    faceNum = Math.round(Math.random()*2)+1;
    faceImg.src = "images/faces/"+faceNum+".jpeg";

    roomNum = Math.round(Math.random()*2)+1;
    roomImg.src = "images/rooms/"+roomNum+".jpeg";
}

//when user makes a choice, call this
function checkAnswer(){
    console.log("check answer");
    
    //compare face and room image numbers

    //if answer is correct go to CORRECT page
    window.location.href = "right.html";

    //if answer is wrong, go to WRONG page
    window.location.href = "wrong.html";
}

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0;i<imgArray.length;i++)
    {
        if(imgArray[i] == img)
        {
            if(i == imgArray.length)
            {
                var j = 0;
                document.getElementById(element).src = imgArray[j].src;
                break;
            }
            else
            var j = i + 1;
            document.getElementById(element).src = imgArray[j].src;
            break;
        }
    }   
}
