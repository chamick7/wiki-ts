import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Lists from './Components/Lists';

function App() {
  const [result, setResult] = useState<object[]>([]);

  return (
    <div className="body">
      <Input setResult={setResult} />
      <Lists result={result} />
    </div>
  );
}

export default App;
