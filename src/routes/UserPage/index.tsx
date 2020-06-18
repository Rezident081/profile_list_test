import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { requestUser } from "../../redux/actions/user";
import Container from "@material-ui/core/Container";
import IUser from "../../interfaces/User";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

interface IProps extends RouteComponentProps<{ name?: string }> {
  user?: IUser;
  requestUser: Function;
}
interface IState {}

class UserPage extends PureComponent<IProps, IState> {
  componentDidMount() {
    const { match, requestUser } = this.props;
    match.params && requestUser(match.params.name);
  }

  readonly placeholderName: string = "None name";
  readonly placeholderLocation: string = "None location";
  readonly placeholderDate: string = "None date";

  render() {
    const { user } = this.props;
    const date = user?.created_at
      ? "From " + moment(user?.created_at).format("DD/MM/YYYY")
      : this.placeholderDate;
    return (
      <Container maxWidth="md">
        <div className="user-page-inner">
          <Grid container alignItems="center">
            <Grid item xs={12} sm={2} md={2}>
              <div className="user-image">
                <Avatar alt={user?.login} src={user?.avatar_url} />
              </div>
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
              <h2 className="user-name">
                {user?.name || this.placeholderName}
              </h2>
              <p className="user-location">
                {user?.location || this.placeholderLocation}
              </p>
              <span className="user-from-date">{date}</span>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user.data,
});

const mapDispatchToProps = {
  requestUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserPage));
