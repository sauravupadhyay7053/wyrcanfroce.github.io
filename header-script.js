document.addEventListener("DOMContentLoaded", function() {
    let serviceBtn = document.getElementById("serviceBtn");
    let dropdownContent = document.getElementById("dropdownContent");

    serviceBtn.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('#serviceBtn')) {
            dropdownContent.style.display = "none";
        }
    });
});
