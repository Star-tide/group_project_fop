import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CourseCard } from "../components/CourseCard";

export const FetchAllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/course/getall/"
        );  // Adjust the URL to match your API endpoint
        setCourses(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);


  
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {courses.length > 0 ? (
        courses.map((course) => (
          <CourseCard key={course.id} course_id={course.id} />
        ))
      ) : (
        <p>No courses available</p>
      )}
    </>
  );
};
