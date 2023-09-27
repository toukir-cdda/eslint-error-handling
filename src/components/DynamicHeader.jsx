"use client";

const DynamicHeader = ({ data = [] }) => {
  return (
    <div>
      {/* <h1>DynamicHeader</h1> */}
      {data?.map((error, index) => (
        <div key={index} className="flex flex-col gap-2 border">
          <span>Error path: {error.errorPath}</span>
          <div>
            {error?.errors?.map((err, idx) => (
              <div key={idx} className="flex flex-col gap-2 ">
                <span>error message: {err.message}</span>
                <span>error Line: {err.line}</span>
                <span>error Type: {err.nodeType}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicHeader;
