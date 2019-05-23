import React from "react";
import queryString from "query-string";

const Posts = (props) => {
  const {year,month}=props.match.params
  const {location}=props;
  const result=queryString.parse(location.search);
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year:{year} , Month:{month}
    </div>
  );
};

export default Posts;
