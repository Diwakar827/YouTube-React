import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
const Head = () => {

  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const dispatch=useDispatch();
    
  const [showsuggestion,setshowsuggestion]=useState(false);


  const searchCache=useSelector((store)=>store.search);
 //console.log(searchQuery);
 useEffect(()=>{
  // easily done usong state creation in global state creation  react-redux
  window.onscroll=()=>{
    const currentScrollPos = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    // console.log(maxScroll)
    if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
    
      setshowsuggestion(false);
    } else {
     setshowsuggestion(true);
     setSuggestions(false);
  }
}
})
 useEffect(()=>{

  // make an api call after every key press
  // debouncing-if diff bw 2 api calls is <200ms then decline Api call

const timer=setTimeout(
 ()=>{
  if(searchCache[searchQuery])
   setSuggestions(searchCache[searchQuery]);
  else
  getSearchSuggestions()
}
 , 200);

return()=>{
  clearTimeout(timer);
}
 },[searchQuery]);

 /*
  *  * key - i
 * - render the component
 * - useEffect();
 * - start timer = make api call after 200 ms
 * 
 * key - ip
 * - re-render the component clear prev timeout if any before 2000ms
 * - useEffect()
 * - start timer = make api call after 200 ms
 *
 
  */
 const getSearchSuggestions=async()=>{
  
   const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json=await data.json();

  setSuggestions(json.items);
  dispatch(cacheResults({[searchQuery]:json.items}
    ));
 console.log(json);
 }


    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }

   

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
        onClick={()=>toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="logo"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" />
        <img
          className="h-8"
          alt="youtube"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        ></img>
      </div>

      <div className="col-span-10 px-10 ">
        <input className="w-300 border border-gray-400 p-2 rounded-l-full" type="text"
          value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setshowsuggestion(true)}
          onBlur={()=>setshowsuggestion(false)}
         
        
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full">Search🔎</button>
       {showsuggestion && (<div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg ">
              {suggestions?suggestions.map((s)=>(

              
              <li className="px-2 " onClick={()=>setSearchQuery(s.snippet.title)}>🔎 {s.snippet.title}</li>
             

             )):null
// 1.35
             }
        </div>
       )}
      
        </div>
     
      <div>
        <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      </div>
    </div>
  );
};

export default Head;
