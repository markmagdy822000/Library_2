function buildResultTable(author) {
    document.body.innerHTML = ""
    buildTableHeader()
    // catch Elements
    var table = document.getElementById("tableId")

    author.books.forEach(book => {
        var row = document.createElement("tr")

        var bookName = document.createElement("td")
        var price = document.createElement("td")
        var authName = document.createElement("td")
        var authEmail = document.createElement("td")

        var edit = document.createElement("button")
        var del = document.createElement("button")

        bookName.innerText = book.bookName
        price.innerText = book.price
        authName.innerText = author.name
        authEmail.innerText = author.email

        edit.setAttribute("id", "editBtn")
        edit.innerText = "Edit"


        edit.addEventListener("click", (e) => {
            // console.log(e.target.parentElement)
            var row = e.target.closest("tr")

            row.innerHTML = `
            <input id="bookNameId" value=${book.bookName}>
            <input id="priceId" value=${book.price}>
            <input id="authNameId" value=${author.name}>
            <input id="authEmailId" value=${author.email}>
            <button id="save"> Save</button>
            <button id="cancel"> Cancel</button>

            `

            var cancelBtn = document.getElementById("cancel")
            cancelBtn.addEventListener("click", () => {
                buildResultTable(author)
                return
            })

            var saveBtn = document.getElementById("save")
            saveBtn.addEventListener("click", (se) => {
                var bookNameId = document.getElementById("bookNameId")
                var priceId = document.getElementById("priceId")
                var authNameId = document.getElementById("authNameId")
                var authEmailId = document.getElementById("authEmailId")

                // console.log("rowIndex=> ", se.target.closest("tr").rowIndex)
                // se.target.closest("tr").rowIndex - 1
                author.name = authNameId.value;
                author.email = authEmailId.value;
                book.bookName = bookNameId.value;
                book.price = priceId.value;
                book.author = author;
                buildResultTable(author)


            })
        })


        del.setAttribute("id", "delBtn")
        del.innerText = "Delete"
        // del.addEventListener("click", deleteData)    

        row.append(bookName, price, authName, authEmail, edit, del)
        table.append(row)


    });
}



function buildTableHeader() {
    document.body.innerHTML = ""
    document.body.innerHTML = `
    <div class="container">
        <table id="tableId">
            <tr>
                <th>Book Name </th>
                <th> Price</th>
                <th> Author Name</th>
                <th>Author Email </th>
                <th>Controls</th>
                <th>Controls </th>
            </tr>
        </table>
    </div>
    `

}