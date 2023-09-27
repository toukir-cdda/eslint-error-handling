"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col">
      <h2>Something went wrong!</h2>
      <span>{error?.message}</span>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}