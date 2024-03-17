"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const usePosts = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("usePosts must be used within a PostsProvider");
  return context;
};

export const TasksProvider = ({ children }) => {
  // save in MySQL database
  const [posts, setPosts] = useState([]);

  const createPost = (title, description) =>
    setPosts([...posts, { id: uuid(), title, description }]);

  const updatePost = (id, updatedTask) =>
    setPosts([
      ...posts.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);

  const deletePost = (id) =>
    setPosts([...posts.filter((task) => task.id !== id)]);

  return (
    <TaskContext.Provider
      value={{
        posts,
        createPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
