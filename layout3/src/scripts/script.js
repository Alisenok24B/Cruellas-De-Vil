document.addEventListener("DOMContentLoaded", function() {
    var editProfileBtn = document.getElementById("editProfileBtn");
    var editModal = document.getElementById("editModal");
    var confirmPhoneBtn = document.getElementById("confirmPhoneBtn");
    var saveChangesBtn = document.getElementById("saveChangesBtn");
    var closeModal = document.getElementsByClassName("close")[0];

    editProfileBtn.onclick = function() {
        editModal.style.display = "block";
    }

    closeModal.onclick = function() {
        editModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == editModal) {
            editModal.style.display = "none";
        }
    }

    confirmPhoneBtn.onclick = function() {
        alert("Номер подтвержден!");
    }

    saveChangesBtn.onclick = function() {
        var nameInput = document.querySelector("#editModal input:nth-of-type(1)").value;
        var locationInput = document.querySelector("#editModal input:nth-of-type(2)").value;
        var priceInput = document.querySelector("#editModal input:nth-of-type(3)").value;
        var phoneInput = document.querySelector("#editModal input:nth-of-type(4)").value;
        var aboutMeInput = document.querySelector("#editModal textarea").value;

        document.querySelector(".name h1").innerText = nameInput;
        document.querySelectorAll(".info p")[0].innerText = "Местоположение: " + locationInput;
        document.querySelectorAll(".info p")[1].innerText = "Цена за услуги: " + priceInput;
        document.querySelectorAll(".info p")[2].innerText = "Номер телефона: " + phoneInput;
        document.querySelector(".info p + h2 + p").innerText = aboutMeInput;

        editModal.style.display = "none";
        alert("Изменения сохранены!");
    }
});
