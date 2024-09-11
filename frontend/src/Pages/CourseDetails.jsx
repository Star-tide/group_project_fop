import { useParams } from "react-router-dom";
import { AddQuestion } from "../components/AddQuestion";
import { useEffect, useState } from "react";
import { grabCourseById } from "../utils/utils";

export const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [courseQuestions, setCourseQuestions] = useState([]);
  const { course_id } = useParams();

  useEffect(() => {
    const getCourseInfo = async () => {
      try {
        const courseDetails = await grabCourseById(course_id);
        setCourse(courseDetails);
        if (courseDetails && courseDetails.questions) {
          setCourseQuestions(courseDetails.questions);
        }
        setLoaded(true);
      } catch (error) {
        console.error(
          "Course details.jsx - Failed to load course details:",
          error
        );
        setLoaded(true);
      }
    };
    getCourseInfo();
  }, [course_id]);

  useEffect(() => {
    console.log(`Course details.jsx - course state:`, course);
    console.log(`Course details.jsx - courseQuestions state:`, courseQuestions);
  }, [course, courseQuestions]);

  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen bg-primary">Loading...</div>;
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-primary">
      <div className="card bg-neutral shadow-xl mx-auto w-2/3">
        <div className="card-body">
          <h2 className="card-title">Title: {course?.title}</h2>
          <p>Description: {course?.course_description}</p>
          <div className="card-actions justify-end">
            <p>Difficulty: {course?.difficulty}</p>
            <button className="btn btn-primary">Edit</button>
          </div>
          <div className="divider"></div>
          <ul role="list" className="divide-y divide-gray-800">
            {courseQuestions.map((question, index) => (
              <li
                key={question.id || `question-${index}`}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6">
                      {question.prompt}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5">
                      {question.solution}
                    </p>
                  </div>
                  <p>{question.learning_content}</p>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <AddQuestion 
              courseQuestions={courseQuestions} 
              setCourseQuestions={setCourseQuestions} 
            />
          </div>
        </div>
      </div>
    </main>
  );
};