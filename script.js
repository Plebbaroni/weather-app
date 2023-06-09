let searchForm = document.getElementById("searchForm");
let content = document.querySelector(".content");

const apiKey = "529676f7f86af93bf3cc52b1dff741b9";
const input = searchForm.value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    fadeIn(content);
})

fetch(url)
    .then(response => response.json())
    .then(data =>{

    })
function fadeIn(content){
    var op = 0.1;
    content.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        content.style.opacity = op;
        content.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}