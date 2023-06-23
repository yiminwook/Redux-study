import { observer } from "mobx-react";
import { ChangeEvent, Component } from "react";
import { postStore, userStore } from "@/mobx/store";
import { observable } from "mobx";

@observer
class App extends Component<
  {},
  {
    name: string;
    password: string;
  }
> {
  data: { name: string; password: string };

  constructor(props: any) {
    super(props);
    this.data = observable({ name: "", password: "" });
  }

  onLogIn = () => {
    userStore.logIn({
      id: 1,
      name: this.data.name,
      password: this.data.password,
    });
  };

  onLogOut = () => {
    userStore.logOut();
  };

  onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    // this.setState((pre) => ({ ...pre, name: e.target.value }));
    this.data.name = e.target.value;
  };
  onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    // this.setState((pre) => ({ ...pre, password: e.target.value }));
    this.data.password = e.target.value;
  };

  render() {
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
          <button onClick={this.onLogIn}>로그인</button>
        ) : (
          <button onClick={this.onLogOut}>로그아웃</button>
        )}
        <div>{postStore.data.length}</div>
        <div>
          <div>
            <label htmlFor="name-input">{this.data.name}</label>
            <input
              id="name-input"
              type="text"
              value={this.data.name}
              onChange={this.onChangeName}
            />
          </div>
          <div>
            <label htmlFor="password-input">{this.data.password}</label>
            <input
              id="password-input"
              type="text"
              value={this.data.password}
              onChange={this.onChangePassword}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
