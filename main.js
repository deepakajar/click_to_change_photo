function fun()
{
    var a=['jailer.png','mac.png','pro.png'];
    var c=Math.round(Math.random()*(a.length-1));
    document.getElementById('imagepreview').innerHTML=`<img src="${a[c]}" width="500" >`;
}
