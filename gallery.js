let galleryImg = document.querySelectorAll(".galleryImg");
let getLastOpened;
let windowWidth = window.innerWidth;
if (galleryImg){
  galleryImg.forEach(function(image,index){
    image.onclick = function(){
        let imageStyle = window.getComputedStyle(image);
        let imageFullUrl = imageStyle.getPropertyValue("background-image");
        let imageUrl = imageFullUrl.split("/img/");
        let newUrl = imageUrl[1].replace('")',"");
        
        let container = document.body;
        let newElement = document.createElement("div");
        let createddiv = container.appendChild(newElement);
        newElement.setAttribute("class","windowCover");

        let bigImage = document.createElement("img");
        createddiv.appendChild(bigImage);
        bigImage.setAttribute("src","./img/"+newUrl);
        bigImage.setAttribute("onclick","closeImg()");
        bigImage.onload = function(){
            let imageWidth = this.width;
            let buttonPos =((( windowWidth - imageWidth)/2)-80);
            
            let nextButton = document.createElement("button");
            let previousButton = document.createElement("button");

            newElement.appendChild(previousButton);
            newElement.appendChild(nextButton);

            nextButton.innerHTML = "next";
            previousButton.innerHTML = "back";

            nextButton.setAttribute("onclick","next()");
            previousButton.setAttribute("onclick","previous()");

            nextButton.setAttribute("class","btn-next");
            previousButton.setAttribute("class","btn-prev");

            document.querySelector(".btn-next").style.right = buttonPos+"px"
            document.querySelector(".btn-prev").style.left = buttonPos+"px"
        }

    }
  });
}
function closeImg(){
  document.querySelector(".windowCover").remove();

}
function next(){
  let imageNames = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg"];
  let img = document.querySelector(".windowCover img")
  if(img.src.split("/img/")[1] == "img1.jpg" ){
    img.removeAttribute("src");
   img.setAttribute("src","./img/"+imageNames[1]);
  }else if(img.src.split("/img/")[1] == "img2.jpg"){
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[2]);
  
  }else if(img.src.split("/img/")[1] == "img3.jpg"){
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[3]);
  
  }else if(img.src.split("/img/")[1] == "img4.jpg"){
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[4]);
  
  }else if(img.src.split("/img/")[1] == "img5.jpg"){
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[5]);
  
  }else if(img.src.split("/img/")[1] == "img6.jpg"){
    img.removeAttribute("src");
    img.setAttribute ("src","./img/img7.jpg");
  }else{
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[0]);
  }
}
function previous(){
  let imageNames = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg"];
  let img = document.querySelector(".windowCover img")
  if(img.src.split("/img/")[1] == "img1.jpg" ){
   img.removeAttribute("src");
   img.setAttribute("src","./img/"+imageNames[6]);
  }else if(img.src.split("/img/")[1] == "img2.jpg"){
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[0]);
  
  }else if(img.src.split("/img/")[1] == "img3.jpg"){
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[1]);
  
  }else if(img.src.split("/img/")[1] == "img4.jpg"){
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[2]);
  
  }else if(img.src.split("/img/")[1] == "img5.jpg"){
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[3]);
  
  }else if(img.src.split("/img/")[1] == "img6.jpg"){
    img.removeAttribute("src");
    img.setAttribute ("src","./img/img5.jpg");
  }else{
    img.removeAttribute("src");
    img.setAttribute("src","./img/"+imageNames[5]);
  }
}
