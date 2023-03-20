import { Heading } from "@chakra-ui/react"
import {useLogout} from '../libs/api'
const Logout: React.FC = () => {
  const {mutate} = useLogout()
  return (
    <>
    <Heading _hover={{cursor: 'pointer', color: 'purple.100'}} size='sm' onClick={() => mutate()}>Logout</Heading>
    </>
  )
}

export default Logout