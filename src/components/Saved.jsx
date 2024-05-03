import React from 'react'
import Loader from './Loader';
import { useLocation } from 'react-router-dom';


const Saved = ({saved,loader}) => {
  const location = useLocation();
  
  return (
    <div>
    <div className="container-fluid text-center" id="top">
    {loader | saved.length === 0 ? (
      <Loader />
    ) : (
      <>
        <div className="flex">
          {saved.map((i) => (
            <div key={i.id} className="items" >
              <img src={i.src.medium} alt={i.photographer} />
            </div>
          ))}
        </div>
      </>
    )}
    {saved.length !== 0 && (
      <a href="#top" className="btn btn-warning my-5">
        Back To Top
      </a>
    )}
  </div>
    </div>
  )
}

export default Saved
