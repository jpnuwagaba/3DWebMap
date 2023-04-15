// import React, { useEffect, useRef, useState } from 'react';
// import mapboxgl from 'mapbox-gl';

// const Map = () => {
//   const mapContainerRef = useRef(null);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoianBudXdhZ2FiYSIsImEiOiJjbGdoejZ1cjUwcWwzM2RteWU5OHRwNWEyIn0.dujN5hJipBhyc1CAl9bHLA';
//     const newMap = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-122.4194, 37.7749],
//       zoom: 13,
//     });
//     setMap(newMap);
//     return () => newMap.remove();
//   }, []);

//   return <div ref={mapContainerRef} className="map-container h-screen w-screen" />;
// };

// export default Map;
