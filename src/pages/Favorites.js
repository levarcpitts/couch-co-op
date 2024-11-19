import React, {useEffect, useRef} from 'react'
import People from '../components/People'
import Games from '../components/Games'
import Events from '../components/Events'


function Favorites() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0; // Reset scroll position to top
    }
  }, []);
  return (
    <>
      <People />
      <Games />
      <Events />
      </>
  )
}

export default Favorites