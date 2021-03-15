import { useState } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    linkText: {
      paddingLeft: theme.spacing(2),
    },
    colorIcon: {
      color: "#fff",
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Пункт 1", "Пункт 2", "Пунтк 3"].map((text) => (
          <ListItem button key={text}>
            <LinkIcon />
            <ListItemText className={classes.linkText} primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <>
        <IconButton
          onClick={toggleDrawer(true)}
          className={classes.colorIcon}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
};

export default Sidebar;
