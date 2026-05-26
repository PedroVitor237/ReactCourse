import { ChevronLeft } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/Button";


function TaskDetailsPage() {

    const [searchParams] = useSearchParams(); // Get the search parameters from the URL
    const title = searchParams.get("title"); // Get the title from the search parameters
    const description = searchParams.get("description"); // Get the description from the search parameters
    const isCompleted = searchParams.get("isCompleted"); // Get the isCompleted status from the search parameters
    const navigate = useNavigate(); // Get the navigate function from react-router-dom to navigate programmatically

    return (
        <div className="w-screen h-screen bg-slate-500 flex items-center p-6 flex-col gap-4 space-y-6 rounded-md shadow-md">
            
            <div className="flex justify-center relative w-full p-6">

                <Button 
                onClick={() => navigate(-1)}
                >
                    <ChevronLeft className="inline-block mr-2" />
                </Button>

                <Title>Task Details Page</Title>

            </div>

            <div className="w-[500px] space-y-4 flex gap-2 flex-col">

                 {/* Display the task details using the values from the search parameters */}
                <div className="bg-slate-300 p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-bold text-slate-700">{title}</h1>
                </div>

                <div className="bg-slate-300 p-4 rounded-md shadow-md">
                    <p className="text-slate-600">{description}</p>
                    
                    <code>
                        <p className="text-slate-800 ">Status: {isCompleted === "true" ? "Completed" : "Incomplete"}</p>
                    </code>
                    
                </div>

            </div>

            
            {/* Future implementation */}
            {/* Home and Edit buttons */}
            
            {/* 
            <button>
                <House />

                <a href="/" className="text-white bg-slate-400 p-2 rounded mb-2">
                    Back to Home
                </a>
            </button> 
            */}

        </div>  
    );
}

export default TaskDetailsPage;





        {/*
        Alternative way without using URLSearchParams:
        <div className="bg-slate-200 p-4 rounded-md shadow-md">
            <h1>{searchParams.get("title")}</h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md shadow-md">
            <p>{searchParams.get("description")}</p>
        </div>
        */}