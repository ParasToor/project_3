import React, { useState } from "react";
// import { useEffect} from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData, courseData } from "./data";
import { toast } from "react-toastify";
import Card from "./components/Card";

function App() {
  const [courses, setCourses] = useState(courseData);

  console.log("CourseData - ");
  console.log(courseData);

  // setCourses(courseData);

  // useEffect(() => {
  //   const fetchCardDetails = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://codehelp-apis.vercel.app/api/get-top-courses"
  //       );
  //       const output = await res.json();
  //       setCourses(output.data);
  //       console.log("hello");
  //       console.log(courses);
  //     } catch (err) {
  //       toast.error("Something went wrong");
  //     }
  //   };

  //   fetchCardDetails();
  // }, []);

  function filterHandler(title) {

    // setCourses(courseData[title]);
    console.log(courseData[title]);
    
    let allCourses = courseData[title];

      return (
        <div>
          {allCourses.map((data) => {
            return <Card key={data.id} course={data} />;
          })}
        </div>
      );

      setCourses(courseData);
  }

  return (
    <div>
      <Navbar />

      <Filter filterHandler={filterHandler} filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
