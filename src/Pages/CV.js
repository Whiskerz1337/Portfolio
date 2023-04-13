import React from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import NavBar from '../components/NavBar'

const cvPath = `${process.env.PUBLIC_URL}/LukeBaileyCV.pdf`
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const CVPage = () => {
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-center bg-gray-100'>
        <h1 className='mb-4 font-sans text-3xl'>My CV</h1>
        <a href={cvPath} download>
          <button className='mb-2 inline-flex items-center rounded bg-gray-300 p-6 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400'>
            <svg
              className='mr-2 h-4 w-4 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
            </svg>
            <span>Download</span>
          </button>
        </a>
        <div className='max-w-full rounded-lg bg-white p-4 shadow-xl'>
          <Document file={cvPath} className='w-full'>
            <Page
              pageNumber={1}
              className='w-full'
              renderAnnotationLayer={false}
              renderTextLayer={false}
              scale={1}
            />
          </Document>
        </div>
      </div>
    </>
  )
}

export default CVPage
