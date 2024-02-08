const btn = document.querySelector(".btn");
const search = document.querySelector(".text");
const container = document.querySelector(".container");
const pictures = document.querySelector(".imgs");
const zoom = document.querySelector(".bigImg");
const btnExit = document.querySelector(".btn-exit");
const blackWindow = document.querySelector(".model-window");
let prevImg = null;
let newImg;
let imgs;
let bigImg;

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

function prevImgFunc(){
    if(prevImg){
        prevImg.style.width = "";
        prevImg.style.height = "";
        prevImg.style.transition = "";
        prevImg.style.transform = "";
        prevImg.style.cursor = "";
    }
};

function zoomImg(e){
    if(e.target.tagName == "IMG"){
        prevImgFunc();
        prevImg = e.target;
        bigImg = document.createElement("img");
        bigImg.src = e.target.src;
        blackWindow.innerHTML = "";
        blackWindow.style.display = "block";
        btnExit.style.display = "block";
        blackWindow.appendChild(bigImg);
        bigImg.style.transition = "none";
        bigImg.style.transform = "none";
        bigImg.style.width = 490 + "px";
        bigImg.style.height = 380 + "px";
        bigImg.style.cursor = "default";
        blackWindow.classList = "model-window-x";
        btnExit.style.display = "block"
    };
};

btnExit.addEventListener("click", function asd(){
    blackWindow.innerHTML = "";
    blackWindow.style.display = "none";
    btnExit.style.display = "none";
    blackWindow.classList = "model-window";
});

pictures.addEventListener("dblclick", zoomImg);