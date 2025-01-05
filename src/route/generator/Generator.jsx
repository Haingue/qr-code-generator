import { useState } from 'react'
import viteLogo from '/qr-code.png'
import './Generator.css'
import QrCodeViewer from '../../components/QRCodeViewer'

function Generator() {
  const levels = ['L', 'M', 'Q', 'H']
  const [qrCode, setQRCode] = useState({
    title: 'QR Code generator',
    value: 'Hello world !',
    fgColor: '#000000',
    bgColor: '#FFFFFF',
    size: 300,
    level: 'L'
  })

  const updateQRCode = (event) => {
    const attributeName = event.target.id
    const value = event.target.value
    console.debug(`Update QR Code ${attributeName}:`, value)
    setQRCode({ ...qrCode, [attributeName]: value })
  }

  return (
    <>
      <div className="flex flex-wrap space-x-2">
        <div className="flex-none md:flex-1 p-2 rounded-lg border-solid border-2 border-sky-500">
          <QrCodeViewer
            value={qrCode.value}
            fgColor={qrCode.fgColor}
            bgColor={qrCode.bgColor}
            title={qrCode.title}
            size={qrCode.size}
            level={qrCode.level}
            />
        </div>
        <div className="flex-auto p-2 mt-2 md:mt-0 rounded-lg border-solid border-2 border-sky-500">
          <div>
            QR Code Editor
          </div>

          <div className="place-items-start">
            <div className="block w-full py-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input
                disabled
                id="title"
                type="text"
                placeholder="QR Code generator"
                title="Set the tiltle under your QR Code, keep empy to remove it"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={updateQRCode}
                />
            </div>
            <div className="block w-full py-2">
              <label htmlFor="value" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Value</label>
              <textarea
                id="value"
                type="text"
                placeholder="Fill input to set QR code value"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={updateQRCode}
                />
            </div>
            <div className="block w-full py-2">
                <label htmlFor="level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Error correction level</label>
                <select
                  id="level"
                  type="text"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={updateQRCode}
                  >
                    { levels.map(level => <option key={level} value={level}>{level}</option>) }
                </select>
            </div>
            <div className="block w-full py-2 flex justify-between">
              <div className="w-2/5">
                <label htmlFor="fgColor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Font color</label>
                <input
                  id="fgColor"
                  type="color"
                  value={qrCode.fgColor}
                  className="block p-2.5 h-16 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={updateQRCode}
                  />
                  <button onClick={() => updateQRCode({target:{id:'fgColor', value:'#000000'}})}>Reset</button>
              </div>
              <div className="w-2/5">
                <label htmlFor="bgColor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Background color</label>
                <input
                  id="bgColor"
                  type="color"
                  value={qrCode.bgColor}
                  className="block p-2.5 h-16 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={updateQRCode}
                  />
                  <button onClick={() => updateQRCode({target:{id:'bgColor', value:'#FFFFFF'}})}>Reset</button>
              </div>
            </div>
            <div className="block w-full py-2 flex justify-between">
              <div className="w-2/5">
                <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
                <input
                  id="size"
                  type="number"
                  step="1"
                  min="0"
                  max="1024"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={qrCode.size}
                  onChange={updateQRCode}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Generator
