import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px]">

                <h1 className="text-3xl text-slate-100 font-bold text-center">Task Manager</h1>
                
                <AddTask />
                <Tasks />
                
            </div>
        </div>
    )
}

export default App;




/*---------------------------------------------------------------------------------------------------------------------------------*/


/*

function App() {

    const defaultMessage = "This is my first React app!";

    // State: is a way to store and manage data in a React component. It allows us to create dynamic and interactive user interfaces.
    const [message, setMessage] = useState("Click the button!");

    return (

        <div>
            <h1 className='text-blue-500'>Hello World!</h1>
            <p>{defaultMessage}</p>

            <button onClick={() => setMessage("You clicked the button!")}>
                {message}
            </button>
        </div>

    );
}

*/