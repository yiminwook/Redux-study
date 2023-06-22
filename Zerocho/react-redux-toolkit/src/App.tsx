import userSlice from "@/redux/reducers/user";
import { logIn } from "@/redux/actions/user";
import { addPost } from "@/redux/actions/post";
import { useDispatch, useSelector } from "@/redux/store";

const App = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);
  const postData = useSelector((state) => state.posts.data) as {
    title: string;
    desc: string;
  }[];

  const onLogin = () => {
    dispatch(logIn({ id: 1, name: "name" }));
  };

  const onLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  const onAddPost = () => {
    dispatch(addPost({ title: "title", desc: "desc" }));
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
      <button onClick={onAddPost}>게시글 작성</button>
      <ul>
        {postData.map(({ title, desc }) => (
          <li>
            <h2>{title}</h2>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
