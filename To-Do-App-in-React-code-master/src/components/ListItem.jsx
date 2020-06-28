import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListItem extends React.Component {
  render() {
    const { item, setUpdate, deleteItem } = this.props;

    return (
      <div className="list">
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              setUpdate(e.target.value, item);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              onClick={() => {
                deleteItem(item.key);
              }}
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  }
}

export default ListItem;
