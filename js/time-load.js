const startTime = performance.now();

window.addEventListener("load", function () {
    const durationElement = document.querySelector(".time-duration");

    if (durationElement) {
        const loadTime = performance.now() - startTime;
        durationElement.textContent = loadTime.toFixed(1) + " ms";
    }

    const navItems = document.querySelectorAll('nav>ul>li');
    const footerItems = document.querySelectorAll('footer>div>div');
    const currentPage = document.location.href;
    const items = [...navItems, ...footerItems];

    for (const item of items) {
        const link = item.querySelector('a');
        if (link && link.href === currentPage) {
            item.classList.add('active');
        }
    }
});
