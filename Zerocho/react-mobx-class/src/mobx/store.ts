import { observable } from "mobx";

const userStore = observable({
  isLogginIn: false,
  data: null as any,
  logIn(data: any) {
    this.isLogginIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLogginIn = false;
      postStore.data.push(1);
    }, 2000);
  },
  logOut() {
    this.data = null;
  },
});

const postStore = observable({
  data: [] as number[],
});

export { userStore, postStore };
