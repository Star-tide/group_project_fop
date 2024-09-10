import { useParams } from "react-router-dom";
import { AddQuestion } from "../components/AddQuestion";
import { useEffect, useState } from "react";
import { grabCourseById } from "../utils/utils";

export const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [courseQuestions, setCourseQuestions] = useState(null)
  const { course_id } = useParams();

  useEffect(() => {
    isLoaded
    const getCourseInfo = async () => {
      try {
        const courseDetails = await grabCourseById(course_id);
        setCourse(courseDetails);
        if (course) {
          console.log(course.questions.length())
          setLoaded(true);
          setCourseQuestions(course.questions)
          }
      } catch (error) {
        console.error(
          "Course details.jsx - Failed to load course details:",
          error
        );
      }
    };
    getCourseInfo();
  }, [course_id]);

  useEffect(() => {
    console.log(`Course details.jsx - course state:`, course);
  }, [course]);

  return (
    <>
      {/* Container */}
      <main className="card">
        {/* Show Course info */}
        <div className="card bg-neutral w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Title: {course?.title}</h2>
            <p>Description: {course?.course_description}</p>
            <div className="card-actions justify-end">
              <p>Difficulty: {course?.difficulty}</p>
              <button className="btn btn-primary">Edit</button>
            </div>
            <div className="divider"></div>
            {/* Edit/Show questions/ course title, course description, course difficulty */}
            <ul role="list" className="divide-y divide-gray-800">
            {courseQuestions?.map((question) => (
                <li
                  key={question.id} // Assuming each question has a unique id
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 ">
                        {question.prompt}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 ">
                        {question.solution}
                      </p>
                    </div>
                        {question.learning_content}
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 ">
                      <button className="btn btn-primary">Edit</button>
                    </p>
                    {/* Assuming you want to conditionally render something */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Add new question */}
        <div>
          <AddQuestion courseQuestions = {{setCourseQuestions, courseQuestions}}/>
        </div>
      </main>
    </>
  );
};
