




import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "../API's/Title";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";

const TodoTableList = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [selectedPriority, setSelectedPriority] = useState("all");

    const { data: fetchedTasks = [] } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks`);
            return res.data;
        },
    });

    const task = fetchedTasks.filter((task) => task.email === user?.email);

    const filteredTasks = selectedPriority === "all"
        ? task
        : task.filter((item) => item.Priority === selectedPriority);

    const handleOngoing = (id) => {
        const status = {
            status: 'ongoing',
        };
        axiosSecure.patch(`/tasks/${id}`, status).then((res) => {
            if (res?.data?.modifiedCount > 0) {
                toast.success('Your Task is added to Ongoing list');
            }
        });
    };

    const handleComplete = (id) => {
        const status = {
            status: 'complete',
        };
        axiosSecure.patch(`/tasks/${id}`, status).then((res) => {
            if (res?.data?.modifiedCount > 0) {
                toast.success('Your Task is added to complete list');
            }
        });
    };

    return (
        <div>
            <Title heading={'To-Do List '}></Title>

          <div className="flex justify-between">
          <h1 className="text-lg"> Total Task : {task.length}</h1>

<div className="mt-4">
    <label htmlFor="priorityFilter" className="mr-2">
        Filter by Priority:
    </label>
    <select
        id="priorityFilter"
        onChange={(e) => setSelectedPriority(e.target.value)}
        value={selectedPriority}
    >
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
    </select>
</div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-10">
                {filteredTasks.map((item) => (
                    <div key={item._id} className="card w-72 bg-base-100 shadow-xl">
                        <div className={`card-body ${item?.Priority === 'high' ? 'bg-red-100' : `${item?.Priority === 'low' ? 'bg-green-100' : 'bg-yellow-200'}`}`}>
                            <h2 className="card-title">{item?.Title}</h2>
                            <p>{item?.description}</p>
                            <p>Name: {item?.name}</p>
                            <p>Email: {item?.email}</p>

                            <div className="card-actions justify-end">
                                <button onClick={() => handleOngoing(item?._id)} className="btn bg-[#6069a6] text-white">Not Completed</button>
                                <button onClick={() => handleComplete(item?._id)} className="btn bg-[#6069a6] text-white">Completed</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoTableList;
