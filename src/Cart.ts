import Buyable from "./Buyable";

export default class Cart {
    private itemsMap: Map<Buyable, number> = new Map();

    addItem(item: Buyable): void {
        if (item.multiple) {
            this.addMultipleItem(item);
        } else {
            this.addNotMultipleItem(item);
        }
    }

    private addMultipleItem(item: Buyable): void {
        if (!this.isItemIncludeInCart(item)) {
            this.itemsMap.set(item, 1);
        } else {
            this.itemsMap.set(item, (this.itemsMap.get(item) || 0) + 1);
        }
    }

    private addNotMultipleItem(item: Buyable): void {
        if (!this.isItemIncludeInCart(item)) {
            this.itemsMap.set(item, 1);
        }
    }

    private isItemIncludeInCart(item: Buyable): boolean {
        return Array.from(this.itemsMap.keys()).includes(item);
    }

    removeItem(item: Buyable): void {
        if (this.isItemIncludeInCart(item)) {
            let quantity = this.itemsMap.get(item) || 0;
            quantity -= 1;
            if (quantity === 0) {
                this.itemsMap.delete(item);
            } else {
                this.itemsMap.set(item, quantity);
            }
        }
    }
}