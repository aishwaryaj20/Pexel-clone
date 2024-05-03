import React from "react";
import Loader from "./Loader";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = ({ img, loader, saved, setSaved }) => {

  const savedImg = (im) =>{
    let flag = true;

    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === im.id) {
          flag = false;
          //react-toastify
           console.log("Image is alredy exist");

          toast.info("Image alredy saved", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          
          });
          //alert('duplicate')
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, im]);
      // console.log("Image Saved");
      toast.success("Image Saved", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,

      });
    }
  };

  return (
    <>
    <ToastContainer/>
      <div className="container-fluid text-center" id="top">
        {loader  ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {img.map((i) => (
                <div key={i.id} className="items" onClick={()=>savedImg(i)}>
                  <img src={i.src.medium} alt={i.photographer} />
                </div>
              ))}
            </div>
          </>
        )}
        {img.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
