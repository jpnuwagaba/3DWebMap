import { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import Head from 'next/head'

mapboxgl.accessToken = 'pk.eyJ1IjoianBudXdhZ2FiYSIsImEiOiJjbGduMmlrbDgwYm9mM21tbWdkZ3hodjc4In0.Q9vUbRDFh0Q7rc8o8Al8pA'

const WebMap = () => {
  const mapContainer = useRef(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [32.568740, 0.333674], // Makerere University coordinates
      zoom: 10,
      pitch: 45, // 3D view
      bearing: -17.6, // 3D view
    });

    // add navigation control
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    // fly to makerere university on load
    map.flyTo({
      center: [32.568740, 0.333674], // Makerere University coordinates
      zoom: 17,
      pitch: 45,
      bearing: -17.6,
      speed: 0.7,
      curve: 1,
    })

    function rotateCamera(timestamp) {
      map.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    }

    map.on('load', () => {
      rotateCamera(0);
    })

    // Clean up on unmount
    return () => map.remove()
  }, [])

  return (
    <>
      <div className="w-screen h-screen" ref={mapContainer} />
    </>
  );
}

export default WebMap;
