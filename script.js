const password = document.querySelector("#password")

document.addEventListener("input", (e) => {
    if (e.target.name == "cpassword") {
        if (e.target.value != password.value) {
            e.target.style.border = "3px solid red"
            password.style.border = "3px solid red"
        } else {
            e.target.style.border = "3px solid green"
            password.style.border = "3px solid green"
        }
    }
})