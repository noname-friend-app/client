import {Navigate} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

interface Props {
  children: JSX.Element
}

const ProtectedRoute: React.FC<Props> = ({children}) => {
  const {user} = useContext(UserContext)
  if (!user) return <Navigate to="/login" />
  return children
}

export default ProtectedRoute