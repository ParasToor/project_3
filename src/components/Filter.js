import React from "react";

const Filter = ({ filterHandler, filterData }) => {
  return (
    <div>
      {filterData.map((data) => {
        // return <button onClick={()=>{filterHandler(data.title)}} key={data.id}> {data.title}</button>;
        return (
          <button
            onClick={() => {
              filterHandler(data.title);
            }}
            key={data.id}
          >
            {" "}
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
