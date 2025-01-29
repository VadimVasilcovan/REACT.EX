import { useEffect, useState } from "react";

export default function FindIndex07() {
  const [apiFetch, setApiFetch] = useState([]);
  const [addToWishList, setAddToWishList] = useState([]);

  async function getData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await data.json();
      setApiFetch(result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const addToWishListFun = (value) => {
    const WishList = addToWishList.findIndex((i) => i.id === value.id);
    if (WishList === -1) {
      setAddToWishList([...addToWishList, value]);
    }
  };
  
  const deleteTask = (idToDelete) => {
    setAddToWishList((prevWishList) =>
      prevWishList.filter((person) => person.id !== idToDelete)
    );
  };
  
  
  
  return (
    <div className="main-div-ex">
      <div className="pages-div">
        <h1>List of values</h1>
        {apiFetch.map((person) => (
          <ul className="span-element" key={person.id}>
            <li>
              <h2>name:{person.name}</h2>
            </li>
            <li>
              <h2> username: {person.username}</h2>
            </li>
            <button
              className="button-add"
              onClick={() => addToWishListFun(person)}
            >
              Add
            </button>
          </ul>
        ))}
      </div>
      <div className="pages-div">
        <h1>Wish list</h1>
        {addToWishList.map((person) => (
          <ul className="span-element" key={person.id}>
            <li>
              <h2>name:{person.name}</h2>
            </li>
            <li>
              <h2> username: {person.username}</h2>
            </li>
            <button className="button-add" onClick={() => deleteTask(person.id)}>

              Delete
            </button>
          </ul>
        ))}
      </div>
      {console.log(apiFetch)}
    </div>
  );
}
