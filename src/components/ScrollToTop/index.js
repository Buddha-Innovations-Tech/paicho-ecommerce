import React,{useRef,useEffect} from "react";

const ScrollToTop = () => {
    const scrollRef = useRef(null);
    useEffect(()=>{
      scrollRef.current.scrollIntoView({behaviour:"smooth"});
    },[])
  return (
    <>
 <div ref={scrollRef}></div>

    </>
  )
}

export default ScrollToTop