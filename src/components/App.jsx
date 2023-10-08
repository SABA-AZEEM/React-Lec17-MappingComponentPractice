import React from "react";
import emojipedia from "../emojipedia.js";
import ShowItems from "./ShowItem.jsx";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((item) => (
          <ShowItems
            key={item.id}
            emoji={item.emoji}
            name={item.name}
            meaning={item.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
