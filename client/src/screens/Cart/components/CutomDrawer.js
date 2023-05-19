import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function CustomDrawer(props) {
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={props.isCustomDrawer}
            onClose={() => props.setIsCustomDrawer(false)}
            onOpen={() => props.setIsCustomDrawer(true)}
            PaperProps={{
              style: { width: 500 },
            }}
          >
            {props.children}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
