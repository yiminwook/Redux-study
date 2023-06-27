import { toHaveDescription } from "@testing-library/jest-dom/matchers";
import { action, configure, observable } from "mobx";

// configure({ enforceActions: "always" }); //엄격모드
// store는 구조분해 할당을 하면 안됌
const userStore = observable({
  isLogginIn: false,
  data: null as any,
  logIn(data: any) {
    this.isLogginIn = true;
    setTimeout(
      action(() => {
        this.data = data;
        this.isLogginIn = false;
        postStore.data.push(1);
      }),
      2000
    );
  },
  logOut() {
    this.data = null;
  },
});

const postStore = observable({
  data: [] as number[],
  addPost(data: number) {
    this.data.push(data);
  },
  //computed
  get postLength() {
    return this.data.length;
  },
});

export { userStore, postStore };
