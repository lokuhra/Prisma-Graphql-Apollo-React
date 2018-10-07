import { observable, action } from "mobx";

import R from "rambda";
export default class GoogleLogin {
  @observable
  data = {
    id: "",
    name: "",
    email: ""
  };

  @observable
  signed = false;

  @action
  setLogin(obj) {
    this.signed = true;
    this.data = R.pick(R.keys(this.data), obj);
  }

  @action
  setLogOut() {
    this.data = R.map(x => "", this.data);
    this.signed = false;
  }
}
