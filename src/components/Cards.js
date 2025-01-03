import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((data) => {
          allCourses.push(data);
        });
      });
      return allCourses;
    }
    else{
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((data) => {
        return (
          <Card
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
            key={data.id}
            course={data}
          />
        );
      })}
    </div>
  );
};

export default Cards;
