console.log('error');

// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Contructot
function Display() {

}

// Add Method to display prototype
Display.prototype.add = function(book) {
    console.log(book);
    let tableBody = document.getElementById('tableBody');
    let uiString = `
                 <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML += uiString;
};

// impelent clear function
Display.prototype.clear = function() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};


// impelent validate function
Display.prototype.validate = function(book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }

};

Display.prototype.show = function(type, message) {
    let msg = document.getElementById('msg');
    msg.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
    <strong>${message}</strong>
</div>`;

    setTimeout(function() {
        msg.innerHTML = "";
    }, 1000);

}


// Add submit event listner to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener("submit", libraryFormSubmit)


function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    // let type = document.getElementById('').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    name.toUpperCase();
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    // console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.clear();
        display.show('success', 'Your book has beens successfully added');
        display.add(book);
    } else {
        // Show error to user
        display.show('danger', 'Sorry you can not add this book')
    }

}