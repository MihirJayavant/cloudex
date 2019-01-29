import React from "react";

const todoList = props => {
  const list = props.list.map(data => (
    <div key={data.id} className="flex-column">
      {" "}
      {data.value}{" "}
    </div>
  ));

  return <div> {list} </div>;
};

export default todoList;
