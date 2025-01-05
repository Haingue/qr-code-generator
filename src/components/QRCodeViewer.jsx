import React, { useState } from "react"
import QRCode from "react-qr-code"
import { supportsSVG } from "../helpers/browserApi"

const QRCodeViewer = ({
    title,
    value,
    size = 256,
    bgColor = 'white',
    fgColor = 'black',
    level = 'L',
}) => {
  const [copyState, setCopyState] = useState(0)
  const [exportPngState, setExportPngState] = useState(0)
  const [exportSvgState, setExportSvgState] = useState(0)
  const svgRef = React.createRef()

  const generateImage = (fileType = 'image/png') => {
    const svg = svgRef.current.outerHTML
    const image = new Image()
    image.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d');
      context?.drawImage(image, 0, 0);

      canvas.toBlob((blob) => {
          if (blob) {
              resolve(blob);
          }
          canvas.remove();
      }, fileType);
    })
  }

  const copyQRCodeSvg = async () => {
    console.debug('Copy svg into clipboard', svgRef)
    if (!supportsSVG()) {
      alert('Feature not compatible with your browser :(')
      return
    }
    setCopyState(1)
    try {
      await navigator.clipboard.write([
        new window.ClipboardItem({
          'image/png': generateImage()
        })
      ]);
    } catch (err) {
      console.error(err.name, err.message);
      alert(err.message);
    } finally {
      setCopyState(2)
      setTimeout(() => setCopyState(0), 1_000)
    }
  }

  const downloadPng = async () => {
    console.debug('Download png into clipboard', svgRef)
    setExportPngState(1)
    try {
      const blob = await generateImage()

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qr-code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err.name, err.message);
      alert(err.message);
    } finally {
      setExportPngState(2)
      setTimeout(() => setExportPngState(0), 1_000)
    }
  }

  const downloadSvg = async () => {
    console.debug('Download svg into clipboard', svgRef)
    setExportSvgState(1)
    try {
      const svg = svgRef.current.outerHTML
      const image = new Image()
      image.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
      const blob = new Blob([svg], {type : 'image/svg+xml'})

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qr-code.svg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err.name, err.message);
      alert(err.message);
    } finally {
      setExportSvgState(2)
      setTimeout(() => setExportSvgState(0), 1_000)
    }
  }

  const displayProgress = (progress) => {
    switch (progress) {
      case 1:
        return "In progress"
      case 2:
        return "Done"
      default:
        return ""
    }
  }

  return (
    <>
        <div style={{ background: bgColor || 'white', padding: '16px' }}>
            <QRCode
                ref={svgRef}
                title={title}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                level={level}
                value={value}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 ${size} ${size}`}/>
        </div>
        <div className="mt-2">
          <button 
            className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={copyQRCodeSvg}>
              Copy to clipboard { displayProgress(copyState) }
            </button>
        </div>
        <div className="mt-2">
          <button
          onClick={downloadPng}
            className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Export PNG { displayProgress(exportPngState) }
          </button>
        </div>
        <div className="mt-2">
          <button
            onClick={downloadSvg}
            className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Export SVG { displayProgress(exportSvgState) }
          </button>
        </div>
    </>
  )
}

export default QRCodeViewer