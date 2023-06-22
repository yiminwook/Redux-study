import userSlice from "@/redux/reducers/user";
import { logIn } from "@/redux/actions/user";
import { useDispatch, useSelector } from "@/redux/store";

const App = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);

  const onLogin = () => {
    dispatch(logIn({ id: 1, name: "name" }));
  };

  const onLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  if (userData?.isLoggingIn) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="App">
      <h1>hello {userData ? userData.data?.name : ""}</h1>
      {userData.data?.id ? (
        <button onClick={onLogOut}>로그아웃</button>
      ) : (
        <button onClick={onLogin}>로그인</button>
      )}
    </div>
  );
};

export default App;
