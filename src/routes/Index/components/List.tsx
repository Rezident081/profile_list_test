import React, { PureComponent } from "react";
import { connect } from "react-redux";
import IProfile from "../../../interfaces/Profile";
import ListItem from "../components/ListItem";
import Pagination from "@material-ui/lab/Pagination";

interface IProps {
  profiles?: IProfile[];
}
interface IState {
  copyProfiles: IProfile[];
  itemPerPage: number;
  selectPage: number;
}

class List extends PureComponent<IProps, IState> {
  state: IState = {
    copyProfiles: [],
    itemPerPage: 5,
    selectPage: 1,
  };

  static getDerivedStateFromProps(props: IProps, state: IState) {
    if (props.profiles && props.profiles.length > 0) {
      return {
        copyProfiles: [...props.profiles],
      };
    }
    return null;
  }

  openProfileInNewTab = (profile: IProfile) => {
    profile.html_url && window.open(profile.html_url);
  }

  onPaginateChange = (e: any, value: number) => {
    this.setState({
      selectPage: value,
    });
  };

  render() {
    const { copyProfiles, itemPerPage, selectPage } = this.state;
    const start: number = itemPerPage * (selectPage - 1);
    const end: number = start + itemPerPage;

    return (
      <React.Fragment>
        <div className="list">
          {copyProfiles &&
            copyProfiles.length > 0 &&
            copyProfiles
              .slice(start, end)
              .map((profile: IProfile, i) => (
                <ListItem key={i} item={profile} buttonClick={this.openProfileInNewTab} />
              ))}
          <div className="pagination"></div>
        </div>
        {copyProfiles.length > itemPerPage && (
          <Pagination
            className="list-pagination"
            hidePrevButton
            hideNextButton
            count={copyProfiles.length / itemPerPage}
            page={selectPage}
            variant="outlined"
            shape="round"
            onChange={this.onPaginateChange}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store: any) => ({
  profiles: store.profiles.data,
});

export default connect(mapStateToProps, null)(List);
