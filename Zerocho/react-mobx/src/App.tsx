import {
  useObserver,
  useLocalStore,
  useLocalObservable,
  observer,
} from "mobx-react";
import { ChangeEvent, useEffect } from "react";
import { postStore, userStore } from "@/mobx/store";
import { useStore } from "@/Context";
import { action, runInAction } from "mobx";

const App = () => {
  const { userStore: userContext, postStore: postContext } = useStore();

  // useLocalStore === useLocalObaservable
  const state = useLocalObservable(() => ({
    name: "",
    password: "",
    onChangeName: action((e: ChangeEvent<HTMLInputElement>) => {
      state.name = e.target.value;
    }),
    onChangePassword(e: ChangeEvent<HTMLInputElement>) {
      runInAction(() => {
        this.password = e.target.value;
      });
    },
  }));

  const onLogIn = () => {
    userStore.logIn({
      id: 1,
      name: state.name,
      password: state.password,
    });
  };

  const onLogOut = () => {
    userStore.logOut();
  };

  useEffect(() => {
    const button = document.getElementById("test") as HTMLButtonElement;
    button.addEventListener("click", function () {
      console.log(this);
    });
  }, []);

  //더이상 useObserver로 감싸지 않음
  return (
    <div className="App">
      {userStore.isLogginIn ? (
        <div>로그인 중</div>
      ) : userStore.data ? (
        <>
          <div>{userStore.data?.name ?? ""}</div>
          <div>{userStore.data?.password ?? ""}</div>
        </>
      ) : (
        "로그인 해주세요"
      )}
      {!userStore.data ? (
        <button onClick={onLogIn}>로그인</button>
      ) : (
        <button onClick={onLogOut}>로그아웃</button>
      )}
      <div>{postStore.data.length}</div>
      <div>
        <div>
          <label htmlFor="name-input">{state.name}</label>
          <input
            id="name-input"
            type="text"
            value={state.name}
            onChange={state.onChangeName}
          />
        </div>
        <div>
          <label htmlFor="password-input">{state.password}</label>
          <input
            id="password-input"
            type="text"
            value={state.password}
            onChange={state.onChangePassword}
          />
        </div>

        <button id="test">테스트</button>
      </div>
    </div>
  );
};

export default observer(App);
