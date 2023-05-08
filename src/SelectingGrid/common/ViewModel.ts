import { IItem } from "./IItem";
import { Side } from "./Side";

class ItemViewModel implements IItem {
  id: string;
  name: string;
  checked: boolean;
  position: Side;

  constructor(item: IItem) {
    this.id = item.id;
    this.name = item.name;
    this.checked = false;
    this.position = Side.L;
  }
  // item position methods
  isLeft = (): boolean => this.position === Side.L;
  togglePosition = (): void => {
    this.position = this.isLeft() ? Side.R : Side.L;
  };

  // item checked Methods
  isChecked = (): boolean => this.checked;
  setChecked = (toVal: boolean) => (this.checked = toVal);
  toggleChecked = (): void => {
    this.checked = !this.checked;
  };
}

export class SelectableViewModel {
  items: ItemViewModel[];
  constructor(items: IItem[]) {
    this.items = items.map((item) => new ItemViewModel(item));
  }

  leftItems = () => this.items.filter((item) => item.isLeft());
  rightItems = () => this.items.filter((item) => !item.isLeft());

  selectAll = (side: Side) => {
    const els = side === Side.L ? this.leftItems() : this.rightItems();
    els.forEach((el) => el.setChecked(true));
  };
  deselectAll = (side: Side) => {
    const els = side === Side.L ? this.leftItems() : this.rightItems();
    els.forEach((el) => el.setChecked(false));
  };
  sendSelected = (sideFrom: Side) => {
    let els = sideFrom === Side.L ? this.leftItems() : this.rightItems();
    els.forEach((el) => {
      if (el.checked) {
        el.togglePosition();
        el.setChecked(false);
      }
    });
  };
}
