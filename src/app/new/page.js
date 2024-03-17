"use client";
import { useEffect } from "react";
import { usePosts } from "../../context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const PostFormPage = ({ params }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { createPost, updatePost, posts } = usePosts();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    if (!params.id) {
      createPost(data.title, data.description, data.image);
      toast.success("Post created successfully");
    } else {
      updatePost(params.id, data);
      toast.success("Post updated successfully");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const postFound = posts.find((post) => post.id === params.id);
      if (postFound) {
        setValue("title", postFound.title);
        setValue("description", postFound.description);
        setValue("image", postFound.image);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form className="bg-gray-700 p-10" onSubmit={onSubmit}>
        <h1 className="text-3xl mb-3">
          {params.id ? "Edit Post" : "New Post"}
        </h1>
        <input
          type="text"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-2 block"
          placeholder="Title"
          autoFocus
          name="title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="block text-red-400 mb-2">
            This field is required
          </span>
        )}

        <textarea
          cols="2"
          placeholder="Description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-1 block"
          name="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="block text-red-400 mb-2">
            This field is required
          </span>
        )}

<input
          type="file"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-2 block"
          placeholder="Upload Image"
          name="image"
          {...register("image")}
        />

        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostFormPage;