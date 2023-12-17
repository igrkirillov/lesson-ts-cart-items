import Buyable from "./Buyable";

export default class Gadget implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly multiple: boolean;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.multiple = true;
    }
}