// document.addEventListener("DOMContentLoaded", function () {
//   let open = document.querySelector("#book-btn");
//   const submit = document.querySelector("#submit");
//   let close = document.getElementById("close");
//   let modal = document.querySelector("dialog");

//   open.addEventListener("click", function () {
//     modal.showModal();
//   });
//   close.addEventListener("click", () => {
//     modal.close();
//   });

//   //array for books
//   const myLibrary = [];

//   //submit fucntionality to create new books
//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     addBookToLibrary();
//   });

//   class Book {
//     constructor(title, author, pages, read) {
//       // the constructor...
//       this.title = title;
//       this.author = author;
//       this.pages = pages;
//       this.read = read;
//     }
//   }

//   function addBookToLibrary() {
//     // fucntionaly for adding the books to the library array
//     let title = document.querySelector("#title").value;
//     let author = document.querySelector("#author").value;
//     let pages = document.getElementById("number-pages").value;
//     let read = document.querySelector("#read").checked;

//     authorEl = document.createElement("div");

//     const libEl = document.querySelector(".library");
//     // libEl.innerHTML = '';
//     if (title == "" || author == "" || pages == "") {
//       alert("input respective values");
//     } else {
//       authorEl.append(author);
//       authorEl.textContent = `Author: ${author}`;
//       titleEl = document.createElement("div");
//       titleEl.append(title);
//       titleEl.textContent = `Title: ${title}`;
//       pagesEl = document.createElement("div");
//       pagesEl.append(pages);
//       pagesEl.textContent = `Number of pages: ${pages}`;
//       const readEl1 = document.createElement("div");
//       const readEl = document.createElement("div");
//       const checkRead = (readEl.type = "checkbox");
//       if (read == true) {
//         readEl1.innerHTML = `read:`;
//       } else if (read == false) {
//         readEl1.textContent = `not read`;
//       }
//       const card = document.createElement("div");
//       card.classList.add("card");
//       const remove = document.createElement("button");
//       remove.textContent = "remove";
//       remove.classList.add("remove");
//       const unread = document.querySelector("#unread");
//       readEl.append(unread);
//       card.append(authorEl, titleEl, pagesEl, readEl1, readEl, remove);

//       remove.addEventListener("click", () => {
//         const content = document.createElement("div");
//         for (i = 0; i < myLibrary.length; i++) {
//           content.append(card);
//           myLibrary.push(content);
//           content.removeChild(card);
//           myLibrary.splice(i, 1);
//         }
//       });
//       libEl.append(card);
//       const newBook = new Book(title, author, pages, read);
//       myLibrary.push(newBook);
//       displayBook();
//     }
//   }
//   function displayBook() {
//     for (let i = 0; i < myLibrary.length; i++) {
//       let book = myLibrary[i];
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  let open = document.querySelector("#book-btn");
  const submit = document.querySelector("#submit");
  let close = document.getElementById("close");
  let modal = document.querySelector("dialog");
  const libEl = document.querySelector(".library");

  open.addEventListener("click", function () {
    modal.showModal();
  });

  close.addEventListener("click", () => {
    modal.close();
  });

  const bookArray = [];

  // Book constructor
  function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.isRead ? "already read" : "not read yet"
      }`;
    };
  }

  // Handle submit
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.getElementById("number-pages").value;
    let isRead = document.querySelector("#read").checked;

    if (title === "" || author === "" || pages === "") {
      alert("Please fill out all fields!");
      return;
    }

    const book = new Book(title, author, pages, isRead);
    bookArray.push(book);

    addBookToDOM(book);

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.getElementById("number-pages").value = "";
    document.querySelector("#read").checked = false;

    modal.close();
  });

  function addBookToDOM(book) {
    // Create card
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", book.id); // For future deletion

    // Elements
    const titleEl = document.createElement("div");
    titleEl.textContent = `Title: ${book.title}`;

    const authorEl = document.createElement("div");
    authorEl.textContent = `Author: ${book.author}`;

    const pagesEl = document.createElement("div");
    pagesEl.textContent = `Pages: ${book.pages}`;

    const readEl = document.createElement("div");
    readEl.textContent = `Status: ${book.isRead ? "Read" : "Not read"}`;

    // Remove button
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("remove");
    remove.addEventListener("click", () => {
      card.remove();
      removeBookFromArray(book.id);
    });

    // Append elements to card
    card.append(titleEl, authorEl, pagesEl, readEl, remove);

    // Add card to library
    libEl.appendChild(card);
  }

  function removeBookFromArray(id) {
    const index = bookArray.findIndex((book) => book.id === id);
    if (index !== -1) {
      bookArray.splice(index, 1);
      console.log("Updated book array:", bookArray);
    }
  }
});
