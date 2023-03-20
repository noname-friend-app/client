import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const UserBanner: React.FC = () => {
  const {user} = useContext(UserContext)
  return (
    <>
    </>
  )
}

export default UserBanner