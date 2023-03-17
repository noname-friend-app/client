import { Button } from "@chakra-ui/react"
import {useLogout} from '../libs/api'
const Logout: React.FC = () => {
  const {mutate} = useLogout()
  return (
    <>
    <Button onClick={() => mutate()}>Logout</Button>
    </>
  )
}

export default Logout