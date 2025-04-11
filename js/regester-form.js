
function buildRegisterForm(numOfBooks) {

    document.body.innerHTML = ""
    document.body.innerHTML = `
<form action="" class="register-form">
    <div class="input-contianer">
        <Label>Book's Name </Label> 
        <input id="bookName" type="text" name="name">
        <span id="invalid-bookName" class="invalid">Invalid Book Name</span>
    </div>
    <div class="input-contianer">

        <Label>Price </Label>
        <input type="text" id="bookPrice" name="price">
        <span id="invalid-price" class="invalid">Invalid Price</span>
    </div>

    <div class="input-contianer">
        <Label>Author Name </Label> 
        <input type="text" id="auth-name" name="auth-name">
        <span id="invalid-authName" class="invalid">Invalid Author Name</span>
    </div>

    <div class="input-contianer">
        <Label>Author Email </Label> <input type="text" id="authEmail" name="auth-email">
         <span id="invalid-authEmail" class="invalid">Invalid Auth Email</span>
    </div>
    <button type="submit">Add</button>
    <button type="reset">Reset</button>
</form>
`;
    var author = new Author()

    var register_form = document.getElementsByClassName("register-form")[0]
    register_form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(register_form)
        saveFormData(numOfBooks, author, bookNameIn, bookPriceIn, authEmailIn, authNameIn)
        register_form.reset()
    })

    var bookNameIn = document.getElementById("bookName")
    bookNameIn.addEventListener("input", () => {
        var bookName = bookNameIn.value;
        console.log("enter validateinon")
        validateBookName(bookName)


    })

    var bookPriceIn = document.getElementById("bookPrice")
    bookPriceIn.addEventListener("input", () => {
        var bookPrice = bookPriceIn.value;
        console.log("enter validateinon")
        validateBookPrice(bookPrice)


    })

    var authEmailIn = document.getElementById("authEmail")
    authEmailIn.addEventListener("input", () => {
        var authEmail = authEmailIn.value;

        validateEmail(authEmail)


    })

    var authNameIn = document.getElementById("auth-name")
    authNameIn.addEventListener("input", () => {
        var authName = authNameIn.value;

        validateAuthName(authName)
    })

}



function saveFormData(numOfBooks, author, bookNameIn, bookPriceIn, authEmailIn, authNameIn) {

    var bookName = bookNameIn.value;
    var bookPrice = bookPriceIn.value;
    var authName = authNameIn.value;
    var authEmail = authEmailIn.value;
    if (!validateAuthName(authName)
        || !validateBookName(bookName)
        || !validateBookPrice(bookPrice)
        || !validateEmail(authEmail)) return

    author.name = authName
    author.email = authEmail

    var book = new Book(bookName, bookPrice, author);
    author.add(book)
    console.log("book", book)
    console.log("author", author)
    if (numOfBooks === author.getBooksNum()) {
        buildResultTable()
    }
    console.log("numOfBooks", numOfBooks)
}
