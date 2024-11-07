//Asybc/Aait = Async= makes a function return a promise
//             Await = makes an async function wait for a promise 

//             Allows you write asynchronous code in a synchronous manner
//             Async doesn't have resolve or reject parameters
//             Everything after Await is placed in an event queue



import { useEffect, useState } from "react";

const AsyncAwaytMethod = () => {
    const [data, setData] = useState([]); // Define state for data
    const [error, setError] = useState(null); // Define state for error

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setData(data); // Set fetched data in state
            } catch (error) {
                setError(error.message); // Set error message in state if fetch fails
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {data.length > 0 ? (
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                !error && <p>Loading...</p>
            )}
        </div>
    );
};

export default AsyncAwaytMethod;
