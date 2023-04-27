import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    (
      <Container className="my-4 mt-5 pt-5">
    <h1 className='mt-4 text-center'>Not Created Yet</h1>
 </Container> 
    )
 )
}

export default Contact