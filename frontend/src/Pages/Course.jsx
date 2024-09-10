import { CourseCard } from "../components/CourseCard"
import { FetchAllCourses } from "../components/FetchAllCourses";

export const Course = () => {
  // Step1: make an api call to the backend to grab all current courses
  // Step2: take that array of courses, and append them to the main div
  // courseList.forEach((course) => {
    // <CourseCard course_id{course.id} />
    // })
  return (
    <>
      <FetchAllCourses />
    </>
  );
}