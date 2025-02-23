// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages - pages;
//   this.read = read;
//   this.info = function () {
//     return { title, author, pages, read };
//   };
// }
// const book1 = new Book('Wind Against My Veil', 'Sanni', 150 + '' + 'pages', 'Not yet read');
// console.log(book1 );
// console.log(book1.info());

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayName = function () {
//   console.log(`Hello, I am ${this.name}!`);
// };
// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   // this.sayName = function () {
//   //   console.log(this.name);
//   // };
// }
// Player.prototype.getMarker = function () {
//   console.log(`My marker is ${this.marker}`);
// };
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
// console.log(player1, player2);
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'
// Object.getPrototypeOf(player1) === Player.prototype; // returns true
// Object.getPrototypeOf(player2) === Player.prototype; // returns true
// Object.getPrototypeOf(Player) === Object.prototype;
// player1.valueOf();
// console.log(Object.prototype.hasOwnProperty('valueOf'));

document.addEventListener('DOMContentLoaded', function () {
  let open = document.querySelector('#book-btn');
  const submit = document.querySelector('#submit');
  let close = document.getElementById('close');
  let modal = document.querySelector('dialog');
  // card.appendChild(displayBook());
  open.addEventListener('click', function () {
    modal.showModal();
  });
  close.addEventListener('click', () => {
    modal.close();
  });
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
  });
  const myLibrary = [];
  // const remove = document.createElement('button');
  // remove.textContent = 'remove';
  // remove.classList.add('remove');
  // remove.addEventListener('click', (index) => {
  //   myLibrary.splice(index, 1);
  // });
  class Book {
    constructor(title, author, pages, read) {
      // the constructor...
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }
  Book.prototype.toggleRead = function () {
    this.read = !this.read;
  };
  function changeRead(i) {
    myLibrary[i].toggleRead();
    displayBook();
  }

  function addBookToLibrary() {
    // do stuff here
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.getElementById('number-pages').value;
    let read = document.querySelector('#read').checked;
    authorEl = document.createElement('div');
    const libEl = document.querySelector('.library');
    // libEl.innerHTML = '';
    if (title == '' || author == '' || pages == '') {
      // const error = document.createElement('div');
      // const library = document.querySelector('.library');
      // error.classList.add('card');
      // error.textContent = 'input required values';
      // library.append(error);
      alert('input respective values');
    } else {
      authorEl.append(author);
      authorEl.textContent = `Author: ${author}`;
      titleEl = document.createElement('div');
      titleEl.append(title);
      titleEl.textContent = `Title: ${title}`;
      pagesEl = document.createElement('div');
      pagesEl.append(pages);
      pagesEl.textContent = `Number of pages: ${pages}`;
      const readEl1 = document.createElement('div');
      const readEl = document.createElement('div');
      // readEl.textContent = `${read}`;
      const checkRead = (readEl.type = 'checkbox');
      if (read == true) {
        readEl1.innerHTML = `read:`;
      } else if (read == false) {
        readEl1.textContent = `not read`;
      }
      // readEl.addEventListener('click', () => {
      //   toggleRead(`${index}`);
      // });
      const card = document.createElement('div');
      card.classList.add('card');
      const remove = document.createElement('button');
      remove.textContent = 'remove';
      remove.classList.add('remove');
      const unread = document.querySelector('#unread');
      //   unread.style.display = 'block';
      readEl.append(unread);
      card.append(authorEl, titleEl, pagesEl, readEl1, readEl, remove);

      remove.addEventListener('click', () => {
        // const itemToremove = document.querySelector('.library-head');
        // myLibrary.filter((item) => item !== library1);
        const content = document.createElement('div');
        for (i = 0; i < myLibrary.length; i++) {
          content.append(card);
          myLibrary.push(content);
          content.removeChild(card);
          myLibrary.splice(i, 1);
        }
        // each.removeChild(library);
        // console.log('upd', myLibrary);
        // addBookToLibrary();
      });
      libEl.append(card);
      const newBook = new Book(title, author, pages, read);
      myLibrary.push(newBook);
      displayBook();
      // console.log(myLibrary);
    }
  }
  function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
      // const display = myLibrary.push(i);
      let book = myLibrary[i];
      // console.log(addBookToLibrary());
    }
  }
  // localStorage.setItem('card', 'trying to store some data here');
  // console.log(localStorage.getItem('card'));
});

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.hasJob = false;
//   }

//   setFirstName(firstName) {
//     this.firstName = firstName;
//   }

//   setLirstName(lastName) {
//     this.lastName = lastName;
//   }
//   fullName() {
//     `${this.firstName} ${this.lastName}`;
//   }
// }

// class Worker extends Person {
//   constructor(firstName, lastName, job) {
//     super(firstName, lastName);
//     this.job = job;
//     this.hasJob = true;
//   }
//   setJob(job) {
//     this.job - job;
//   }
//   get biography() {
//     const bio = `${this.fullName()} is a ${this.job}`.toUpperCase;
//     return bio;
//   }
//   set setFullName(name) {
//     name = name.split(' ');
//     this.setFirstName(name[0]);
//     this.setLastName(name[1]);
//   }
// }
// const worker1 = new Worker('Jamal', 'Agara', 'programmer');
