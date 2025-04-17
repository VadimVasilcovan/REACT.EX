import React, { useEffect, useReducer } from "react";


const contextData = Provider
const initialState = {
  isLoading: false,
  fetchedData: [],
};


function reducer() {
  switch (action.type) {
    case "fetch/succes":
      return { ...state, fetchedData: action.payload };
    case "loading/start":
      return { ...state, isLoading: true };
    case "loading/finish":
      return { ...state, isLoading: false };
  }
}

export default function contextData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function DataFetching() {
      dispatch({ type: "loading/start" });
      try {
        const data = await fetch("http://localhost:8000/questions");
        const respons = await data.json();
        if (!respons.ok) throw new Error("data can't be fetched");
        dispatch({ type: "fetch/succes", payload: respons });
      } catch (err) {
      } finally {
        dispatch({ type: "loading/finish" });
      }
    }
    DataFetching();
  }, []);

  return <div>contextData</div>;
}
