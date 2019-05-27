import { connect } from "react-redux";
import Main from "../components/main";
import { logout } from "../redux/actions/auth";
import { toggleShowWIP } from "../redux/actions/main";

const mapStateToProps = state => {
  return {
    pending: state.auth.pending,
    showWIP: state.main.showWIP
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: (values, d) => {
      console.log("logout!");
      dispatch(logout("You've been logged out successfully"));
    },
    onShowWIP: (event, checked) => {
      dispatch(toggleShowWIP(checked));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
