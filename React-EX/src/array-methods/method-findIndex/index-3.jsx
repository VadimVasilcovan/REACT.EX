import { useState } from "react";
import "../method-findIndex/index.css";

export default function MethodExercise() {
  const [addToFavorite, setAddToFavorite] = useState([]);

  const ArrayofData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const AddToFavoriteFun = (data) => {
    const findValue = addToFavorite.findIndex((i) => i === data);

    if (findValue === -1) {
      
      setAddToFavorite([...addToFavorite, data]);
    } else {
      console.log("Item already in favorites");
    }
  };

  return (
    <div className="main-div-ex">
      <div className="pages-div">
        <p>List of Numbers</p>
        {ArrayofData.map((showData, index) => (
          <span key={index}>
            <p>{showData}</p>
            <button onClick={() => AddToFavoriteFun(showData)}>
              Add To favorite
            </button>
          </span>
        ))}
      </div>
      <div className="pages-div">
        <p>Saved items</p>
        {addToFavorite.map((showData, index) => (
          <span key={index}>
            <p>{showData}</p>
            <button onClick={() => AddToFavoriteFun(showData)}>
              Add To favorite
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
