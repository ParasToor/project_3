import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];

  const getCourses = () => {
    Object.values(courses).forEach((couseCategory) => {
      couseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
  };

  getCourses();

  return (
    <div>
      {allCourses.map((data) => {
        return <Card key={data.id} course={data} />;
      })}
    </div>
  );
};

export default Cards;
