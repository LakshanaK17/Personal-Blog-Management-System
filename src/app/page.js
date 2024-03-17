"use client";

import { usePosts } from "../context/TasksContext";
import { VscTasklist } from "react-icons/vsc";
import { TaskCard } from "../components/TaskCard";

function Home() {
  const { posts } = usePosts();

  return (
    <div className="flex justify-center">
      {posts.length === 0 ? (
        <div className="block">
          <h2 className="text-2xl">There are no posts</h2>
          <VscTasklist size="8rem" />
        </div>
      ) : (
        <div className="w-7/10">
          {posts.map((task, i) => (
            <TaskCard task={task} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
