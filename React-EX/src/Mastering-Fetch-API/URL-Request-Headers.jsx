import { useEffect } from "react";

const UrlRequestHeaders = () => {
    const str = 'https://jsonplaceholder.typicode.com/users';
    const url = new URL(str);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = new Request(url, {
                    headers: { 'x-steve': 'hello' },
                    method: 'GET',
                });

                const response = await fetch(request);
                console.log(response.status);
                
                // Optional: If you need to log the response data
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        
        fetchData();
    }, []);

    return <div></div>;
};

export default UrlRequestHeaders;
