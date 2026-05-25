import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useEffect, useState } from 'react';

function App() {

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) ||
        [
        // Hardcoded tasks for testing purposes

        // { id: 1, title: "Task 1", description: "This is the first task", isCompleted: false },
        // { id: 2, title: "Task 2", description: "This is the second task", isCompleted: true },
        // { id: 3, title: "Task 3", description: "This is the third task", isCompleted: false },
        
    ]);

    useEffect(() => {
        // Save the tasks to local storage whenever the tasks state changes
        localStorage.setItem("tasks", JSON.stringify(tasks)); 
    }, [tasks]); // The dependency array [tasks] ensures that this effect runs whenever the tasks state changes


    // Update the tasks state by toggling the completed status of the clicked task
    function onTaskClick(taskId) {
        const updatedTasks = tasks.map((task) => {
            // It's needed to update this task
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            // No need to update this task, return it as is
            return task;
        });

        setTasks(updatedTasks);
    }

    // Delete a task from the tasks state based on its id
    function onTaskDelete(taskId) {
        // Filter out the task with the given id
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        // Update the tasks state with the new array of tasks
        setTasks(updatedTasks);
    }

    // AddTask 
    function onAddTask(title, description) {
        const newTask = {
            id: Date.now(), // Generate a unique id based on the current timestamp
            title,
            description,
            isCompleted: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
    }


    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-6">

                <h1 className="text-3xl text-slate-100 font-bold text-center">Task Manager</h1>
                
                <AddTask onAddTask={onAddTask} />
                <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />

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

/*---------------------------------------------------------------------------------------------------------------------------------*/

// Suggested code by Copilot for toggling task completion status when a task is clicked. This function updates the tasks state by mapping through the existing tasks and toggling the completed status of the task that was clicked based on its id.
// Remember to verify which way if more suitable and efficient //

/*

function onTaskClick(taskId) {
        // Update the tasks state by toggling the completed status of the clicked task
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    }

*/



// -------------------------------------------------------------------------------------------------- //

/*
---------------------------------------------------------------------------------------------------
Feching data from an API and storing it in the state using useEffect. This code will run once when the component mounts, and it will fetch a list of tasks from the JSONPlaceholder API and store them in the tasks state. The _limit=5 query parameter is used to limit the number of tasks fetched to 5 for testing purposes.
---------------------------------------------------------------------------------------------------
But it made the local storage implementation not working properly, because the fetched tasks will overwrite the tasks stored in local storage, so it's better to keep it commented out for now, but you can uncomment it if you want to test the API fetching functionality.
---------------------------------------------------------------------------------------------------

useEffect(() => {
    const fetchTasks = async () => {
        // Call API
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
            method: "GET", // The default method is GET, so this line is optional, was added for clarity purposes
        });
        // Get data
        const data = await response.json();
        // Store and persist data in state
        setTasks(data);
    };

    fetchTasks();

}, []); // When a empty array is passed as the second argument, the effect will only run once when the component mounts, you can use it for any initialization logic if needed

*/



//---------------------------------------------------------------------------------------------------//
// Future implementations and features to add: //

/*

- Simple integration with a SQLite database, using an ORM like Prisma 

- Edit task functionality: Add an edit button to each task that allows the user to edit the title and description of the task. This can be implemented by creating a new component for editing tasks and using state to manage the editing process.

- Task filtering and sorting: Add functionality to filter tasks based on their completion status (e.g., show only completed tasks or only incomplete tasks) and to sort tasks by title or creation date.

- User authentication: Implement user authentication to allow multiple users to have their own task lists. This can be done using Firebase Authentication or another authentication service.

- Responsive design: Make the application responsive so that it works well on different screen sizes, including mobile devices.

- Task due dates and reminders: Add functionality to set due dates for tasks and send reminders to users when tasks are approaching their due dates.

- Task categories or tags: Allow users to categorize or tag their tasks for better organization and filtering.

- Drag and drop functionality: Implement drag and drop functionality to allow users to reorder their tasks or move them between different categories.

- Integration with external APIs: Integrate the application with external APIs, such as calendar APIs, to allow users to sync their tasks with their calendar.

- Theme customization: Allow users to customize the theme of the application, such as changing colors or fonts.

- Task comments and collaboration: Add functionality for users to comment on tasks and collaborate with other users on shared task lists.

- Task history and activity log: Implement a history or activity log feature that allows users to see the changes made to their tasks over time.

- Export and import tasks: Allow users to export their tasks to a file (e.g., CSV or JSON) and import tasks from a file.

- Offline functionality: Implement offline functionality so that users can access and manage their tasks even when they don't have an internet connection.

- Performance optimization: Optimize the performance of the application, especially as the number of tasks grows, by implementing techniques such as pagination or lazy loading.

- Accessibility improvements: Ensure that the application is accessible to all users, including those with disabilities, by following accessibility best practices and guidelines.
*/