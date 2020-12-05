import React from "react";
import ListItem from "./ListItem";
import "../App.css";

interface ListType {
  result: object[];
}

export default function Lists({ result }: ListType) {
  return (
    <div className="list_body">
      {result.map((item) => {
        return <ListItem item={item} />;
      })}
    </div>
  );
}
