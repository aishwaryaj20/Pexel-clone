import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Navbar = ({setSearch}) => {
const navigate = useNavigate();
const location = useLocation();

  return (
    <div>
      <div className="nav">
        <div className="button btn btn-outline-warning mx-3" 
        
        onClick={()=>{setSearch('nature')
      navigate('/')}}
        >Nature</div>

        <div className="button btn btn-outline-primary mx-3" 
        
        onClick={()=>{setSearch('travel')  
         navigate('/')}}
        >Travel</div>

        <div className="button btn btn-outline-secondary mx-3" 
        
        onClick={()=>{setSearch('city')   
        navigate('/')}}
        >City</div>

        <div className="button btn btn-outline-primary mx-3" 
        
        onClick={()=>{setSearch('car')   
        navigate('/')}}
        >Car</div>

        <div className="button btn btn-outline-warning mx-3" 
        
        onClick={()=>{setSearch('nature')  
         navigate('/')}}
        >Fashion</div>
        <div className="button btn btn-outline-info mx-3" 
        
        onClick={()=>{setSearch('animal')  
         navigate('/')}}
        >Animal</div>

        <div className="button btn btn-outline-dark text-light mx-3" 
        
        onClick={()=>{setSearch('Technology')   
        navigate('/')}}
        >
          Technology
        </div>
        <div className="button btn btn-outline-secondary mx-3" 
        
        onClick={()=>{setSearch('Business')   
        navigate('/')}}
        >Business</div>

        <div className="button btn btn-outline-info mx-3" 
        
        onClick={()=>{setSearch('Dubai')  
         navigate('/')}}
        >Dubai</div>
        <div className="button btn btn-outline-primary mx-3" 
        
        onClick={()=>{setSearch('Tokyo')  
         navigate('/')}}
        >Tokyo</div>
        

        {
          location.pathname == '/saved' ?(

            <div className="button btn btn-warning" 
        
            onClick={()=>navigate('/')}
             >Home</div>
          ) :
          (
            <div className="button btn btn-warning" 
        
            onClick={()=>navigate('/saved')}
             >Saved</div>
          )
        }
       

        
      </div>

      <div className="container my-4" style={{width:'780px'}}>
       
          {location.pathname === '/' && (
            <div className="mb-4">

            <input
            type="text"
            className="form-control bg-dark text-light"
           
            aria-describedby="emailHelp" onChange={(e) =>setSearch(e.target.value)}
          />
       
        </div>
          )}
       
      </div>
    </div>
  );
};

export default Navbar;
