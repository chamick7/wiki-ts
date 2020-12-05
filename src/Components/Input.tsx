import React, { Dispatch, FormEvent, useState } from "react";
import axios from "axios";
import "../App.css";

interface searchType {
  setResult: React.Dispatch<React.SetStateAction<object[]>>;
}

export default function Input({ setResult }: searchType) {
  const [search, setSearch] = useState<string>("");
  const url: string = "https://en.wikipedia.org/w/api.php";

  const getData = (e: FormEvent): void => {
    e.preventDefault();

    axios
      .get(url, {
        params: {
          action: "query",
          list: "search",
          prop: "info",
          inprop: "url",
          utf8: "",
          format: "json",
          srlimit: 20,
          srsearch: search,
          origin: "*",
        },
      })
      .then((result) => {
        const searchResult: object[] = result.data.query.search;
        console.log(searchResult);
        
        setResult(searchResult);
      });
  };

  return (
    <div>
      <form
        className="input_form"
        onSubmit={(e) => {
          getData(e);
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png"
          alt=""
        />
        <div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="wiki search"
          />

          <button type="submit">
            <img
              src="https://img.icons8.com/2266EE/search"
              draggable="false"
              style={{ width: "30px" }}
              alt="search-img"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
