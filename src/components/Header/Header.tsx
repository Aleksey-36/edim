import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import Sidebar from "../Sidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Имя компании
          </Typography>
          <Hidden smDown>
            <ButtonGroup
              variant="text"
              color="inherit"
              aria-label="text button group"
            >
              <Button>Пункт 1</Button>
              <Button>Пункт 2</Button>
              <Button>Пункт 3</Button>
            </ButtonGroup>
          </Hidden>
          <Hidden mdUp>
            <Sidebar />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
