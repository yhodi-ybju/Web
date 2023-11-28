window.addEventListener("load", function () {
    const durationElement = document.querySelector(".time_duration");

    if (durationElement) {
        const loadTime = performance.now();
        durationElement.textContent = loadTime.toFixed(1) + " мс";
    }
});

window.addEventListener("load", function () {
    const navItems = document.querySelectorAll('nav>ul>li');

    for (const item of navItems) {
        const link = item.querySelector('a');
        const href = link.getAttribute('href');

        if (document.location.href.includes(href)) {
            item.classList.add('active');
            break;
        }
    }
});