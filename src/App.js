import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

function App() {
  
  const [courses, setCourses] = useState('');

  useEffect( async () => {
      try {
        const res =  await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
        console.log(courses);
      } catch (err) {
        toast.error("Something went wrong");
      }
  },[]);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
