import React from "react";
import "../App.css";

interface ItemType {
  item: {
    title?: string;
    snippet?: string;
  };
}

export default function ListItem({ item }: ItemType) {
  return (
    <div className="list_item">
      <a href={`https://en.wikipedia.org/wiki/${item.title}`}>
        <h2>{item.title}</h2>

        <p>{item.snippet?.replace(/(<([^>]+)>)/gi, "")}</p>
      </a>
    </div>
  );
}
