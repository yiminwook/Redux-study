import userSlice from "@/redux/reducers/user";
import { logIn } from "@/redux/actions/user";
import { addPost } from "@/redux/actions/post";
import { useDispatch, useSelector } from "@/redux/store";

const App = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);
  const isLoggingIn = useSelector((state) => state.user.isLoggingIn);
  const postData = useSelector((state) => state.posts.data) as {
    title: string;
    desc: string;
  }[];

  // createSelector
  // const priceSelector = (state) => state.user.prices;
  // 매번 새로운 createSelector를 만들어야 한다.
  // const makeSumPriceSelector = () => createSelector(priceSelector, (prices) =>
  //   prices.reduce((a, c) => a + c, [])
  // );
  // const sumPriceSelector = makeSumPriceSelector();
  // const totalPrice = useSelector(sumPriceSelector);

  const onLogin = () => {
    dispatch(logIn({ id: 1, name: "name" }));
  };

  const onLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  const onAddPost = () => {
    dispatch(addPost({ title: "title", desc: "desc" }));
  };

  if (isLoggingIn) {
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
