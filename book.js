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
    console.log('set');
    this._name = name;

    return this;
  }
  get sold() {
    console.log(this._sold);
    return this._sold;
  }
  set sold(amount) {
    console.log('one more sell', amount);
    this._sold = amount;
  }
  incrementSold(){
    this.sold = this.sold + 1;
  }
}
