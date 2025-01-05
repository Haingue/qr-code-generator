import { useState } from 'react'
import viteLogo from '/qr-code.png'
import './Generator.css'
import QRCode from 'react-qr-code'

function Generator() {
  const [value, setValue] = useState("Fill input to set QR code value")

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div style={{ background: 'white', padding: '16px' }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}/>
      </div>
    </>
  )
}

export default Generator
