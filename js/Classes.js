var Author = function (_name, _email) {
    this.name = _name;
    this.email = _email
    this.books = []

    Author.prototype.add = function (book) {
        this.books.push(book)
    }
    Author.prototype.getBooksNum = function (book) {
        return this.books.length;
    }
    Author.prototype.toString = function () {
        return `
name: ${this.name}
email: ${this.email}
`}

}
var Book = function (_bookName, _price, _author) {
    this.bookName = _bookName;
    this.price = _price;
    this.author = _author;

    Book.prototype.toString = function () {
        return `
    bookName : ${this.bookName}
    price : ${this.price}
    author : ${this.author.toString()}
    `
    }
}