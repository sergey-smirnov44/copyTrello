import { Button, IconButton, Paper } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { InputBase } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { fade, makeStyles } from "@material-ui/core/styles";
import storeAPI from "../../utils/storeAPI";

const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: "#5AAc44",
    color: "#fff",
    "&:hover": {
      background: fade("#5AAc44", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

export default function InputCard({ setOpen, listId }) {
  const classes = useStyle();
  const { addMoreCard } = useContext(storeAPI);
  const [cardTitle, setCardTitle] = useState("");

  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, listId);
    setCardTitle("");
    setOpen(false);
  };

  const handleBlur = () => {
    setOpen(false);
    setCardTitle("");
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            onBlur={handleBlur}
            multiline
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={cardTitle}
            placeholder="Enter a title of this card"
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          Add a Card
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
