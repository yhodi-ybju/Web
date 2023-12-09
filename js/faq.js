var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.maxHeight) {
            pannel.style.maxHeight = null;
        }
        else {
            pannel.style.maxHeight = pannel.scrollHeight + "px";
        }

    });
}
