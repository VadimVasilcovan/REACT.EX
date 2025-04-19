import  { createContext, useEffect, useReducer, useContext } from "react";

// Create context
const PostData = createContext();

// Initial state
const initialState = {
  isLoading: false,
  fetchedData: [],
  currentQuestion: {},
  yourAnswer: '',
  correctAnswer: ''
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "fetch/success": 
      return { ...state, fetchedData: action.payload };
    case "loading/start":
      return { ...state, isLoading: true };
    case "loading/finish":
      return { ...state, isLoading: false };
      case "yourAnswer/select":
        case 'correctAnswer':
          return ;
          case 'currentQuestion':
          return{...state, currentQuestion: action.payload}
    default:
      return state;
  }
}

// Context provider component
export default function PostDataProvider({ children }) {
  const [{ isLoading, fetchedData }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function DataFetching() {
      dispatch({ type: "loading/start" });
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();

        if (!res.ok) throw new Error("Data can't be fetched");

        dispatch({ type: "fetch/success", payload: data }); 
      } catch (err) {
        console.error("Fetch error:", err.message);
      }  finally {
        dispatch({ type: "loading/finish" });
      }
    }

    DataFetching();
  }, []);

  return (
    <PostData.Provider value={{ isLoading, fetchedData, dispatch }}>
      {children}
    </PostData.Provider>
  );
}


export const usePostData = () => useContext(PostData);
