import { useParams } from "react-router-dom"
import { AddQuestion } from "../components/AddQuestion"
import { useEffect, useState } from "react"
import { grabCourseById } from "../utils/utils"

export const CourseDetails = () => {
  const [course, setCourse] = useState(null)
  const { course_id } = useParams()
  console.log(`Course details.jsx - course ID from url parameter: ${course_id}`)

  useEffect(() => {
    const getCourseInfo = async () => {
      try {
        const courseDetails = await grabCourseById(course_id)
        setCourse(courseDetails)
      } catch (error) {
        console.error('Course details.jsx - Failed to load course details:', error)
      }
    }
    getCourseInfo()
  }, [course_id])

  useEffect(() => {
    console.log(`Course details.jsx - course state:`, course)
  }, [course])
 
  return (
    <>
    {/* Container */}
      <main>
        {/* Show Course info */}
        <div>

        </div>

        {/* Edit/Show questions */}
        <div>

        </div>

        {/* Add new question */}
        <div>
          <AddQuestion />
        </div>
      </main>
    </>
  )
}