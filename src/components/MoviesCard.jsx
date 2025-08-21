import { useState } from "react";
import Movis from "./Movis";

function MoviesCard({path,fav, title,getMovies,id, addtoWatchList,removeWatchList,watchList}) {
  
  return (
       <div className="relative w-[12rem] h-[20rem] rounded-xl overflow-hidden shadow-lg  " key={id}>
        <img className="w-full h-full object-cover " src={path} alt={title} />

         <div className="absolute   bottom-0 inset-x-0  bg-black/50 text-white text-base p-4 text-center" >
          <p >{title} </p>
         </div>
       <div className="absolute top-2 right-2 h-10 w-10 decoration-red-50 bg-black flex items-center  justify-center rounded-md">
                {fav?
                (<div onClick={() => removeWatchList(getMovies)}>😍</div>)
                  :(<div onClick={() => addtoWatchList(getMovies)}>😒 </div>)
                }
       </div>
               </div> 

  )
}
export default MoviesCard;