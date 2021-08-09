import React, { useState } from "react";
import { Collapse, Paper, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "300px",
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#EBECF0",
    border: 0,
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}));

export default function InputContainer({ listId, type }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "card" ? "+ Add a card" : "+ Add another List"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
