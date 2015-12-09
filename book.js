"use strict";
class Book {
  constructor(name, isbn, autor) {
    this._name = name || '';
    this._isbn = isbn || '';
    this._autor = autor || '';
    this._sold = 0;
  }
  get name() {
    console.log(this._name);
  }
  set name(name){
    this._name = name;

    return this;
  }
  get sold() {
    return this._sold;
  }
  set sold(amount) {
    this._sold = amount;
  }
  incrementSold(){
    this.sold = this.sold + 1;
  }
}
