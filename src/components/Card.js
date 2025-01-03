import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const [liked, setLiked] = useState(false);

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      setLiked(false);
      toast.warning("Course Unliked");
    } else {
      likedCourses.push(course.id);
      setLikedCourses(likedCourses);

      //we can't use this method as prev.push does't return array
      // setLikedCourses((prev)=> prev.push(course.id))

      // We can use this method also
      // setLikedCourses((prev) => [...prev, course.id]);
      setLiked(true);
      toast.success("Couse liked");
    }
  }

  return (
    <div className="w-[300px] bg-blue-950 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />

        <div
          className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3
        grid place-items-center"
        >
          <button onClick={clickHandler}>
            {liked ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substring(0, 100)
            : course.description}...
        </p>
      </div>
    </div>
  );
};

export default Card;
