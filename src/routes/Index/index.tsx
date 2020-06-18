import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { requestProfiles } from "../../redux/actions/profiles";
import List from "./components/List";
import Container from "@material-ui/core/Container";

interface IProps {
  requestProfiles: Function;
}
interface IState {}

class Index extends PureComponent<IProps, IState> {
  componentDidMount() {
    const { requestProfiles } = this.props;
    requestProfiles();
  }
  render() {
    return (
      <div className="main-page">
        <Container maxWidth='md'>
          <List />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  requestProfiles,
};

export default connect(null, mapDispatchToProps)(Index);
