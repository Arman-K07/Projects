var themeBBtn = document.getElementById('theme-black');
var themeWBtn = document.getElementById('theme-white');
var navEl = document.getElementById('nav');
var bodyEl = document.getElementById('body');

themeBBtn.addEventListener('click', () => {
    navEl.style.background = "black";
    bodyEl.style.background = "darkgray";
    themeBBtn.style.display = "none";
    themeWBtn.style.display = "block";
});

themeWBtn.addEventListener('click', () => {
    navEl.style.background = "#5095da";
    bodyEl.style.background = "rgba(255, 192, 203, 0.3)";
    themeBBtn.style.display = "block";
    themeWBtn.style.display = "none";
});

var filterButtons = document.querySelectorAll('.filter');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        var filterValue = button.getAttribute('data-filter');
        filterCards(filterValue);
    });
});

function filterCards(filterValue) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (filterValue === 'all' || card.classList.contains(filterValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};


var allF = document.getElementById("all");
var utiF = document.getElementById("utilities");
var gameF = document.getElementById("games");

allF.addEventListener('click', () => {
    utiF.classList.remove('active');
    gameF.classList.remove('active');
    allF.classList.add('active');
});

utiF.addEventListener('click', () => {
    utiF.classList.add('active');
    gameF.classList.remove('active');
    allF.classList.remove('active');
});

gameF.addEventListener('click', () => {
    utiF.classList.remove('active');
    gameF.classList.add('active');
    allF.classList.remove('active');
})


