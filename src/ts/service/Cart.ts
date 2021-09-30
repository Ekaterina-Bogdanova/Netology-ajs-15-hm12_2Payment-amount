import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getSum(): number {
      return this._items.reduce((acc, current) => {
        return acc + current.price;
      }, 0)
    }

    getDiscount(discount: number): number {
     return Number(((this.getSum() * (100 - discount) / 100)).toFixed(2));
    }
    removeItem(idItem: number): void {
      const removable: number = this._items.findIndex((element: Buyable) => element.id === idItem);
      this._items.splice(removable, 1);
    }
}
