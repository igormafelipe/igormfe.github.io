import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { show } from './FavoriteDisplaySlicer';
import GitHub from '../../images/favorite_page/github.png';

function FavoriteImg(props) { 
  const outerDivStyle = {
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'cover',
  };

  const dispatch = useDispatch();
  const [isHover, setHover] = useState(false);

  return (
    <div  className="w-[30rem] h-5/6 mb-5 aspect-square"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
      {/* Image DIV */}
      {
        !isHover &&
        <div className="w-full h-full opacity-70 hover:opacity-100 hover:cursor-pointer transition-all"
            style={outerDivStyle}>
            <div className="w-full h-1/6 bg-black relative top-1/2 flex items-center justify-center bg-opacity-70">
              <h1 className="text-2xl text-white">{props.title}</h1>
            </div>
        </div>
      }

      {/* Information DIV */}
      {
        isHover &&
        <div className="w-full h-full"
            style={outerDivStyle}>
            <div className="w-full h-full hover:h-full bg-black bg-opacity-70 transition-all">
              <h1 className="text-2xl text-white text-center relative top-5">{props.title}</h1>
              {/*Overview of project*/}
              <h1 className="text-2xl text-white text-center relative top-20">{props.body}</h1>
              {/*Skills used*/}
              <h1 className="text-2xl text-white text-center relative top-40">Skills: Python, React, CSS</h1>
              {/*Todo: send link as props!*/}
              <div className="w-full relative top-60 flex justify-center space-x-10">
                <a href="https://google.com" target="_blank">
                  <img src={GitHub} 
                        className="rounded-full w-12 h-12 hover:cursor-pointer animate-pulse hover:animate-none"/>
                </a>

                <button class="bg-black text-white border border-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black px-4 py-2 rounded animate-pulse hover:animate-none"
                        onClick={() => dispatch(show(props))}>
                  See More
                </button>
              </div>
            </div>
        </div>
      }

    </div>
  );
}

export default FavoriteImg;