import { logIn, logOut } from "@/redux/actions/user";
import { useSelector, useDispatch } from "@/redux/store";

const App = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);

  const onLogin = () => {
    dispatch(logIn({ data: 1 }));
  };

  const onLogOut = () => {
    dispatch(logOut());
  };

  console.log(userData);

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
