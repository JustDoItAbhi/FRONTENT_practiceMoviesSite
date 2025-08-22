import { useEffect, useState } from "react";
import { BASE_URL,GENRE_ID ,ALL_GENRE} from "./utils/contents";

function WatchList({addtoWatchList,removeWatchList,watchList,setWatchList}) {
    const[geners,setGenres]=useState([ALL_GENRE])
    const[selectGenre,SetSelectGener]=useState(ALL_GENRE);
    const[search,setSearch]=useState("");

    useEffect(()=>{
        const genreList=watchList.map((movieObj)=>{
            return GENRE_ID[movieObj.genre_ids[0]];
        })
        const uniqeGenre=new Set(genreList);

        setGenres([ALL_GENRE,...uniqeGenre ]);
    },[watchList]);

    const accendingOrder=(key)=>{
       const sortedWatchList= [...watchList].sort((movieA,movieB)=>{
            return movieA[key] - movieB[key];
        })
        setWatchList(sortedWatchList);
    }

    const deccendingOrder=(key)=>{
           const sortedWatchList= [...watchList].sort((movieA,movieB)=>{
            return  movieB[key]-movieA[key];
        })
        setWatchList(sortedWatchList);
    }
    return (
        <div className="flex flex-col items-center gap-6 p-6 ">
                  
            <div className="grid grid-cols-4 gap-4 w-full ">
                      {
                        geners.map((item,index)=>{
                            return  (
                            <div 
                                key={index} 
                                onClick={()=>SetSelectGener(item)}
                                className={` cursor-pointer text-xl m-2 rounded-md text-white text-center py-2 
                                ${item === selectGenre ? 'bg-blue-400' : 'bg-slate-600'}`}>
                                    {item}
                                    </div>)
                        })
                    }
                 
            </div>
             
  <input
  value={search}
   className="bg-slate-300 border-2 h-[4rem] p-4 w-[24rem] rounded-md" type="text" placeholder="Searching..." 
   onChange={(e)=>setSearch(e.target.value)}/>


            <table className="rounded-md  border-4  w-full m-[4rem] ">
                <thead className="bg-slate-300 h-12 rounded-xl border-2">
                    <tr>
                        <th>Name</th>
                        <th  >
                            <i onClick={()=>accendingOrder("vote_average")} className="cursor-pointer mx-1"> ⬆️</i>
                            Rating
                            <i onClick={()=>deccendingOrder("vote_average")}  className="cursor-pointer mx-1">⬇️</i>
                        </th>
                          <th >
                            <i onClick={()=>accendingOrder("popularity")}  className="cursor-pointer mx-1">⬆️</i>
                            Popularity
                            <i onClick={()=>deccendingOrder("popularity")}  className="cursor-pointer mx-1">⬇️</i>
                        </th >
                        <th className="cursor-pointer ml-2 ">Genre</th>
                        <th className="cursor-pointer snap-start scroll-ml-6">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        watchList.filter((movieobj)=>{
                            if(selectGenre==="All Genre"){
                                return true;
                            }
                            return selectGenre==GENRE_ID[movieobj.genre_ids[0]]
                        })
                        .filter((movieobj)=>{
                            return movieobj.title.toLowerCase().includes(search.toLowerCase())
                        })
                        .map((movie, index) => {
                            return <tr key={movie.id || index} className="hover:bg-slate-100  ">
                                <td className="flex gap-4 items-center ">
                                    <img className="size-35" src={BASE_URL + movie.backdrop_path} alt="poster" />
                                    {movie.title}
                                </td>
                                <td className="text-rose-600 cursor-pointer hover:bg-black/10">
                                    <h3>{movie.vote_average}</h3>
                                </td>
                                <td className="text-rose-600 cursor-pointer hover:bg-black/10">

                                    <h3>{movie.popularity}</h3>

                                </td>
                                <td className="text-rose-600 cursor-pointer hover:bg-black/10" >
                                    <h3>{GENRE_ID[movie.genre_ids[0]]}</h3>
                                </td>
                               {
                                movie ? (
                                        <td onClick={()=>removeWatchList(movie)} className="text-rose-600 cursor-pointer hover:bg-black size-10" >🗑️</td>
                                ):(
                                   <td onClick={addtoWatchList} className="text-rose-600 cursor-pointer hover:bg-black size-10" >🗑️</td>)
                               }
                            
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
export default WatchList;