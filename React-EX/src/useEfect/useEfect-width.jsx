// useEffext(function, [dependences])

import React, {useState, useEfect} from 'react';

const MyComponent = () => {
    const [width, setWidth] = useState(windous.innerWidth);
    const [height, setHeight] = useState(windous.innerHeight);


    useEfect(() => {
        window.addEventListener('resize', handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEfect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(windous.innerWidth);
        setHeight(windous.innerHeight);
    }

}
return(<>
<p>Window Width: {width}px</p>
<p>Window Height: {height}px</p>
</>)

export default MyComponent;