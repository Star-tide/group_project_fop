import { useOutletContext } from "react-router-dom"
import { logOut } from "../utils/auth"
import { CourseCreation } from "./CourseCreate";


export const Home = () => {

  const { setUser } = useOutletContext();

  const handleLogOut = () => {
    setUser(null)
    console.log(logOut())
  }
  return (
    <>
        <div className="w-100">
          <CourseCreation />
          <button onClick={handleLogOut}className="btn btn-primary">Logout</button>
        </div>
    </>
  )
}
