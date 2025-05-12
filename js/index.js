const scrollBtn = document.querySelector('.scrolltotop');
const textTypingJs = document.querySelector('#text_typing_js');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('cust-animate-up');
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.cust-animation-div').forEach(card => {
    observer.observe(card);
});

const isMobile = window.innerWidth <= 768;
const text = "Tirumani Nadar";
let i = 0;
textTypingJs.innerHTML = '';
function printText() {
    if (i < text.length) {
        textTypingJs.innerHTML += text.charAt(i);
        i++;
        setTimeout(printText, 250);
    }
}

if (!isMobile) {
    printText();
} else {
    textTypingJs.innerHTML = text;
}