import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { BASE_URL } from "./utils/contents";
import MoviesCard from "./MoviesCard";
import BannerCard from "./BannerCard";
import PropDrillingContext from './degines/context/PropDrillingContext'
function Movis({path,bannerLink,bannerLinkTitle,getMovies, title}){
    const[moveis,setMovies]=useState([])
    const[banner,setBanner]=useState(null);

  const {watchList,addtoWatchList,removeWatchList}=useContext();

    useEffect(()=>{
        axios.get(`
           https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=f557fc450ebd3cd3020a959b44ff3af9`)
           .then(function(res){
            const linkMovies=res.data.results;
            const selectedMovies=linkMovies[Math.floor(Math.random()*linkMovies.length)]
            setMovies(linkMovies);
            setBanner(selectedMovies);

           })
    },[])

return(
  <div className="p-8 ">
            {
            banner &&(
                  <BannerCard id={banner.id}  bannerLink={BASE_URL+banner.backdrop_path} bannerLinkTitle={ banner.title} />
        )}
        
          <div className="flex flex-wrap gap-[4rem] p-8  ">
           { moveis.map((items,index)=> (
                  <MoviesCard 
                     key={items.id || index}
                    id={items.id} 
                    getMovies={items}
                    fav={watchList.some(m=>m.id===items.id)}
                    addtoWatchList={addtoWatchList}
                    removeWatchList={removeWatchList}
                    path={BASE_URL+items.backdrop_path} 
                    title={ items.title} 
                 
           />
            ))}
        
        </div>

</div>
)
}
export default Movis;