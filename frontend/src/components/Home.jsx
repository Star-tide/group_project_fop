import { useOutletContext } from "react-router-dom"
import { logOut } from "../utils/auth"


export const Home = () => {

  const { setUser } = useOutletContext();

  const handleLogOut = () => {
    setUser(null)
    console.log(logOut())
  }
  return (
    <>
        <div className="container flex flex-col text-center w-60">
          <h1>Youre Logged In!</h1>
          <button onClick={handleLogOut}className="btn btn-primary">Logout</button>
        </div>
    </>
  )
}
