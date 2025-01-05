import { Link } from 'react-router'

const NotFound = () => {
  return (
    <>
        <h1>Page not found</h1>
        <Link to={"/"}>Go Home</Link>
    </>
  )
}

export default NotFound