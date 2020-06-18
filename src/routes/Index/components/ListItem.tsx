import React from "react";
import IProfile from "../../../interfaces/Profile";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

interface IProps {
  item: IProfile;
  buttonClick: (profile: IProfile) => void;
}

const ListItem = React.memo(function ListItem(props: IProps) {
  const { item, buttonClick } = props;
  const classes = useStyles();

  return (
    <Grid container xs={12} className="item-container">
      <Grid container xs={6}>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          className="item-container-avatar"
        >
          <Link to={`/user/${item.login}`}>
            <Avatar
              alt={item.login}
              src={item.avatar_url}
              className={classes.large}
            />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          className="item-container-name"
        >
          <Link to={`/user/${item.login}`}>{item.login}</Link>
        </Grid>
      </Grid>
      <Grid
        container
        xs={6}
        direction="row"
        alignItems="center"
        justify="flex-end"
      >
        <Button
          variant="contained"
          className="item-button"
          onClick={() => buttonClick(item)}
        >
          Кнопка
        </Button>
      </Grid>
    </Grid>
  );
});

export default ListItem;
