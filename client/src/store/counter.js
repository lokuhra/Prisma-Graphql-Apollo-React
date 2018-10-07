import { observable } from 'mobx'

export default class Counter {
  @observable
  data = 0

  increment() {
    this.data++
  }

  decrement() {
    this.data--
  }
}
