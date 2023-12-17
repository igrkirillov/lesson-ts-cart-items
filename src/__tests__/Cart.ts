import Cart from "../Cart";
import Book from "../Book";
import Gadget from "../Gadget";

describe('Cart module', () => {
  test ('test add not multiple item', () => {
    const book = new Book(1, "Отцы и дети", 950.90);
    const cart = new Cart();
    cart.addItem(book);
    expect(cart).toEqual({
      itemsMap: new Map([[book, 1]])
    });
  });
  test ('test add not multiple item no more than once', () => {
    const book = new Book(1, "Отцы и дети", 950.90);
    const cart = new Cart();
    cart.addItem(book);
    cart.addItem(book);
    expect(cart).toEqual({
      itemsMap: new Map([[book, 1]])
    });
  });
  test ('test remove not multiple item', () => {
    const book = new Book(1, "Отцы и дети", 950.90);
    const cart = new Cart();
    cart.addItem(book);
    cart.removeItem(book);
    expect(cart).toEqual({
      itemsMap: new Map()
    });
  });
  test ('test add multiple item', () => {
    const gadget = new Gadget(1, "Айфон", 800.90);
    const cart = new Cart();
    cart.addItem(gadget);
    expect(cart).toEqual({
      itemsMap: new Map([[gadget, 1]])
    });
  });
  test ('test add multiple item many times', () => {
    const gadget = new Gadget(1, "Айфон", 800.90);
    const cart = new Cart();
    cart.addItem(gadget);
    cart.addItem(gadget);
    expect(cart).toEqual({
      itemsMap: new Map([[gadget, 2]])
    });
  });
  test ('test remove multiple item', () => {
    const gadget = new Gadget(1, "Айфон", 800.90);
    const cart = new Cart();
    cart.addItem(gadget);
    cart.addItem(gadget);
    cart.removeItem(gadget);
    expect(cart).toEqual({
      itemsMap: new Map([[gadget, 1]])
    });
  });
})