const btn = document.querySelector(".btn");
const search = document.querySelector(".text");
const container = document.querySelector(".container");
const pictures = document.querySelector(".imgs");
const zoom = document.querySelector(".bigImg");
let prevImg = null;
let newImg;
let imgs;

function vyvod(e){
    if(e.code == "Enter"){
        const img = fetch('https://api.unsplash.com/search/photos?query='+search.value+'&per_page=39&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
        img
        .then(data => data.json())
        .then(img => generateImg(img))
    };
};

btn.addEventListener("click", function(){
    const img = fetch('https://api.unsplash.com/search/photos?query='+search.value+'&per_page=39&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
    img
    .then(data => data.json())
    .then(img => generateImg(img));
});

function generateImg(imgages){
    pictures.innerHTML = "";
    for(let i of imgages.results){
        imgs = i.urls.small;
        newImg = document.createElement("img");
        let url = newImg.setAttribute("src", imgs);
        pictures.appendChild(newImg);
    }
};
search.addEventListener("keydown", vyvod);

function zoomImg(e){
    if(e.target.tagName == "IMG"){
        if(prevImg){
            prevImg.style.width = "";
            prevImg.style.height = "";
            prevImg.style.transition = "";
            prevImg.style.transform = "";
            prevImg.style.cursor = "";
        }
        e.target.style.transition = "none";
        e.target.style.transform = "none";
        e.target.style.cursor = "default";
        e.target.style.width = 490 + "px";
        e.target.style.height = 390 + "px";
        prevImg = e.target;
    }
};

pictures.addEventListener("click", zoomImg);