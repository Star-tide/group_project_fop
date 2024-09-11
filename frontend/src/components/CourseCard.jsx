import { useEffect, useState } from "react";
import { grabCourseById } from "../utils/utils";
import { useNavigate } from "react-router-dom";

export const CourseCard = (course_id) => {
  const [course, setCourse] = useState("No course");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleViewCourseDetails = () => {
    navigate(`/course/${course_id["course_id"]}`);
  };

  const handleCourseStart = () => {
    navigate(`/learn/${course_id['course_id']}`)
  }

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await grabCourseById(course_id['course_id']);
        setCourse(response);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [course_id]);
  if (loading) return <div>Loading...</div>;
  if (!course) return <div>No course found</div>;
  console.log(course);
  return (
    <>
    {/* Main Div */}
    <div className="container w-1/2 mx-auto pt-5">
      <div className="overflow-hidden rounded-lg bg-gray-200 p-4">
        <div className="flex items-start justify-between">
          {/* Course info Div */}
          <div className="flex flex-col gap-2">
            <p>Course Title: {course.title}</p>
            <p>ID: {course.id}</p>
            <p>Course Difficulty: {course.difficulty}</p>
            <p>Course Description: {course.course_description}</p>
          </div>

          {/* Button Div */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleCourseStart}
              className="bg-primary p-4 text-white rounded hover:bg-secondary"
            >
              Start Course
            </button>
            <button
              onClick={() => handleViewCourseDetails(course_id)}
              className="bg-primary p-4 text-white rounded hover:bg-secondary"
            >
              View Course Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
