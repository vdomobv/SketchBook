import { connect } from "react-redux";

function Ready(state) {
  console.log(state);

  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sound: state.device.sound,
  };
};

export default connect(mapStateToProps)(Ready);