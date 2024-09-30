import { NavLink } from "react-router-dom"
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-96">
      <FaExclamationTriangle className='mb-4 text-green fa-5x w-[80px] h-[80px]'/>
          <h1 className="mb-4 text-5xl font-bold">404 - Page Not Found</h1>
          <p className="mb-5 text-xl">Sorry, the page you are looking for could not be found.</p>
          <NavLink to={'/'} className="px-3 py-2 mt-4 text-white rounded-md bg-green hover:bg-hover-color">Go Back</NavLink>
    </section>
  )
}

export default NotFound