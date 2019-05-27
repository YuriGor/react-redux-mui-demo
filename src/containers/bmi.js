import { connect } from "react-redux";
import BMI from "../components/bmi";
import { setBMI } from "../redux/actions/bmi";

const mapStateToProps = state => {
  return {
    weight: state.bmi.weight,
    height: state.bmi.height,
    age: state.bmi.age,
    sex: state.bmi.sex,
    nicotine: state.bmi.nicotine,
    alcohol: state.bmi.alcohol
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (name, value) => {
      // console.log(setBMI);
      dispatch(setBMI(name, value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BMI);
