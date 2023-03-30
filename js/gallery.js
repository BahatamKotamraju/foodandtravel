var imageArray=["0","1","2","3","4","5","6","7","8","9","10","11","12"];
var i=0;
function header()
{
    if(i>=12)
    {
        i=0;
    document.getElementById("header").style.backgroundImage=`url(../gallary/${imageArray[i]}.jpg)`
    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../gallary/${imageArray[i]}.jpg)`  
    }
    i++;
    var time=setTimeout(header,10000);
}
function right()
{
    i++;
    if(i>imageArray.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../gallary/${imageArray[i]}.jpg)` 
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../gallary/${imageArray[i]}.jpg)`
    }

}
function left()
{
    i--;
    if(i<0)
    {
        i=imageArray.length-1
        document.getElementById("header").style.backgroundImage=`url(../gallary/${imageArray[i]}.jpg)` 
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../gallary/${imageArray[i]}.jpg)`
    }

}
var img=document.images;
console.log(img)
for(i=1;i<img.length;i++)
{
    img[i].src=`../gallary/${i}.jpg`
}
function closeTheImage()
{
    document.getElementById("bigimage").setAttribute("style","display:none")
}
function openTheImage(img)
{
    document.getElementById("bigimg").setAttribute("src",`../gallary/${i}.jpg`)
    document.getElementById("bigimage").removeAttribute("style")
}