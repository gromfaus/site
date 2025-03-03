document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("form-message").textContent = "Сообщение отправлено!";
        this.reset();
    });
});