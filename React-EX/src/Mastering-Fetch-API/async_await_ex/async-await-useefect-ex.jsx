import React from "react";
import { useEffect } from React;

const asyncAwaitUseEffectEx = () => {
    useEffect(() => {
        // Define an asynchronous (async) function to fetch data 
        // (this means that this part of code can run in parallel and won't block other parts of the application)
        const fetchData = async () => {
            try {
                // 1. Make the request to the API
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                // 2. If the response is not successful, throw an error
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                // 3. If the request is successful, parse the response as JSON
                const users = await response.json();
                console.log(users); // Log the fetched data to the console

            } catch (error) {
                // 4. If an error occurred, log the error message
                console.error('Error:', error.message);
            }
            // In 'try' we write the code that could potentially cause an error.
            // In 'catch' we handle errors, for example, by logging error messages or adding solutions to prevent them.
        };
        
        fetchData(); 

    }, []);
    return <div>Component is loaded!</div>; 
};

export default asyncAwaitUseEffectEx;
