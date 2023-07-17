import React from "react";

function Two(props) {
  return (
    <div>
      this is Two
      <Three name={props.name} course={props.course}/>
    </div>
  );
}

function Three(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h1>{props.course}</h1>
    </div>
  );
}
export { Three };
export default Two;
