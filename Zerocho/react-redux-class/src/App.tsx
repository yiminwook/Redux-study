import { logIn, logOut } from "@/redux/actions/user";
import { Dispatch, initialState } from "@/redux/store";
import { Component } from "react";
import { connect, MapStateToProps } from "react-redux";

interface AppProps {
  user: {
    data: any;
    isLoggingIn: boolean;
  };
  logIn: (data: any) => void;
  logOut: () => void;
}

class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  onLogin = () => {
    this.props.logIn({ data: 1 });
  };

  onLogOut = () => {
    this.props.logOut();
  };

  render() {
    if (this.props.user?.isLoggingIn) {
      return <div>로딩중...</div>;
    }

    return (
      <div className="App">
        <h1>hello {this.props.user ? this.props.user.data?.name : ""}</h1>
        {this.props.user.data?.id ? (
          <button onClick={this.onLogOut}>로그아웃</button>
        ) : (
          <button onClick={this.onLogin}>로그인</button>
        )}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<typeof initialState, any, any> = (
  state,
  ownProps
) => {
  //reselect 필요
  return {
    user: state.user,
  };
};
const mapDisPatchToProps = (dispatch: Dispatch) => {
  return {
    logIn: (data: any) => dispatch(logIn(data)),
    logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(App);
