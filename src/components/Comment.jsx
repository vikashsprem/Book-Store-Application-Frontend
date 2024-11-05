import React, { useState } from "react";

export default function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="m-5 ml-10 animate-slide-fade rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">
        Ask a Question or Leave a Comment
      </h3>
      <input
        className="w-2/3 p-2 outline-none rounded mb-2 bg-transparent border-b-2 border-gray-500 decoration-transparent"
        rows="3"
        placeholder="Leave your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <br />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleCommentSubmit}
      >
        Submit Comment
      </button>

      <div className="mt-10">
        <h4 className="font-bold">Comments:</h4>
        {comments.length > 0 ? (
          <ul className="list-disc pl-5">
            {comments.map((comment, index) => (
              <li key={index} className="text-gray-700 mt-2">
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
}
