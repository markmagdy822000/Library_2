/*=========== initial Form =========== */
window.addEventListener("load", () => {
    var numOfBooksInput = document.getElementById("numberOfBooks")
    var intialForm = document.getElementById("intialForm")

    intialForm.addEventListener('submit', (e) => {
        e.preventDefault();
        var numOfBooks = numOfBooksInput.value;
        buildRegisterForm(Number(numOfBooks))


    })

})

