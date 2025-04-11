
function validateBookName(name) {
    if (isNaN(name)) {
        document.getElementById("invalid-bookName").style.display = "none";
    }
    else document.getElementById("invalid-bookName").style.display = "block";
    return isNaN(name)
}

function validateAuthName(name) {
    if (isNaN(name)) {
        document.getElementById("invalid-authName").style.display = "none";
    }
    else document.getElementById("invalid-authName").style.display = "block";
    return isNaN(name)
}

function validateEmail(email) {
    var reg = /^\w{3,}@\w{3,}\.\w{2,3}/

    if (reg.test(email)) {
        document.getElementById("invalid-authEmail").style.display = "none";
    }
    else document.getElementById("invalid-authEmail").style.display = "block";

    return reg.test(email)
}

function validateBookPrice(price) {
    if (!isNaN(price)) {

        document.getElementById("invalid-price").style.display = "none";
    }
    else document.getElementById("invalid-price").style.display = "block";

    return !isNaN(price)
}
