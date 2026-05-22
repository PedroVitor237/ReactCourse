function AddTask() {
    return (
        <div className="space-y-2 p-3 bg-slate-200 rounded-md shadow-md flex flex-col">
            <h2>Add Task</h2>
            <input
                type="text"
                placeholder="Task title"
                className="w-full p-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <input
                type="text"
                placeholder="Task description"
                className="w-full p-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <button className="w-full bg-slate-400 text-white p-2 rounded"
            >
                
                Add Task
            </button>
        </div>
    );
}

export default AddTask;