import React from "react";
import Card from "./Card";

const Cards = ({courses}) => {

  let allCourses = [];

  const getCourses = () => {

    Object.values(courses).forEach((couseCategory) => {
      couseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    
    return allCourses;
  };

  return (
    <div>
      {getCourses().map((data) => {
        <Card course={data} />;
      })}
    </div>
  );
};

export default Cards;
