import { NavLink } from 'react-router'
import logo from '/qr-code.png'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
        <div className='max-w-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse logo-container">
                <img src={logo} className="logo" alt="Vite logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">QR Code generator</span>
            </NavLink>
        </div>
    </>
  )
}

export default NavigationBar