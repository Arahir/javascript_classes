"use strict";
let hlBook = new Book('The Gun Seller', '0-671-02082-X', 'hgh laurie');
hlBook.name = 'hugh laurie';
hlBook.name;

hlBook.sold++;
console.log('number of books sold: ', hlBook.sold);
