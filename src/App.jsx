import { useState } from 'react'

function App() {

    const defaultMessage = "This is my first React app!";

    // State: is a way to store and manage data in a React component. It allows us to create dynamic and interactive user interfaces.
    const [message, setMessage] = useState("Click the button!");

    return (

        <div>
            <h1>Hello World!</h1>
            <p>{defaultMessage}</p>

            <button onClick={() => setMessage("You clicked the button!")}>
                {message}
            </button>
        </div>

    );
}

export default App;