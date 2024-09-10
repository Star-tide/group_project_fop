import React from "react";
import { useParams } from "react-router-dom";
import { grabCourseById } from "../utils/utils";
import { useState, useEffect } from "react";

export const Pagination = () => {
  const { course_id } = useParams();
  const [questions, setQuestions] = useState();
  const [loading, setLoading ] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    const fetchQuestions = async () => {
      const courseData = await grabCourseById(course_id);
      setQuestions(courseData.questions);
      
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    console.log(questions)
    if(questions) {
      setLoading(false)
    }
  }, [questions]);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion+1)
  }

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion-1)
  }

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <main>
        <div className="questions">{questions[currentQuestion]?.prompt}</div>

      </main>
      <nav
        aria-label="Pagination"
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      >
        <div className="hidden sm:block">
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            onClick={handlePrev}
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            onClick={handleNext}
          >
            Next
          </a>
        </div>
      </nav>
    </>
  );
};
