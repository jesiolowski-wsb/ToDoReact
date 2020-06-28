import React from "react";
import "./ListItems.css";
import FlipMove from "react-flip-move";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./ListItem";
import TODO_ANIMATION from "../consts/consts";

library.add(faTrash);

function ListItems(props) {
  const { items } = props;
  return (
    <div>
      <FlipMove duration={TODO_ANIMATION.FLIP_DURATION} easing="ease-in-out">
        {items.map((item) => (
          <ListItem
            item={item}
            key={item.key}
            setUpdate={props.setUpdate}
            deleteItem={props.deleteItem}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default ListItems;
