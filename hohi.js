document.addEventListener("DOMContentLoaded", function () {
    const words = ["خرزا", "وحش عندو الترمة", "رلك مليح", "انا عمك"];
    const container = document.body;

    words.forEach(word => {
        let span = document.createElement("span");
        span.textContent = word;
        span.style.position = "absolute";
        span.style.fontSize = "24px";
        span.style.fontWeight = "bold";
        span.style.color = "white"; // تغيير اللون إلى الأبيض
        span.style.left = Math.random() * window.innerWidth + "px";
        span.style.top = Math.random() * window.innerHeight + "px";
        container.appendChild(span);

        let speedX = (Math.random() - 0.5) * 4;
        let speedY = (Math.random() - 0.5) * 4;

        function animate() {
            let rect = span.getBoundingClientRect();
            let x = rect.left + speedX;
            let y = rect.top + speedY;

            if (x < 0 || x + rect.width > window.innerWidth) speedX *= -1;
            if (y < 0 || y + rect.height > window.innerHeight) speedY *= -1;

            span.style.left = x + "px";
            span.style.top = y + "px";

            requestAnimationFrame(animate);
        }

        animate();
    });
});