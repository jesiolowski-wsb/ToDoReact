import React, { Component } from "react";
import "./App.css";
import ListItems from "./components/ListItems";
import TODO_LABELS from "./consts/labels";

class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
        },
      });
    }
  };

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  setUpdate = (text, item) => {
    const items = [...this.state.items];
    const itemId = items.indexOf(item);
    items[itemId].text = text;

    this.setState({
      items,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder={TODO_LABELS.NEW_TASK_HINT}
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">{TODO_LABELS.NEW_TASK_BUTTON}</button>
          </form>
          <p>{this.state.items.text}</p>

          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </header>
      </div>
    );
  }
}

export default App;
