import React from "react";

const VideoCard = (props) => {
  return (
    <>
      <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative rounded-lg">
        <img
          className="w-full rounded-lg rounded-b-none"
          src={props.thumbnail}
          alt="thumbnail"
        />
        <div class="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
          {props.duration}
        </div>

        <div className="desc p-4 text-gray-800">
          <a
            href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
            target="_new"
            className="title font-bold block cursor-pointer hover:underline"
          >
            {props.title}
          </a>
          <a
            href="https://www.youtube.com/user/sam14319"
            target="_new"
            className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
          >
            {props.tag}
          </a>
          <span className="description text-sm block py-2 border-gray-400 mb-2">
            {props.description}
          </span>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
