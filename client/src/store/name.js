import { observable } from "mobx";

export default class Name {
  @observable
  data = "Salih Kesepara";

  increment() {
    this.data++;
  }

  decrement() {
    this.data--;
  }
}
