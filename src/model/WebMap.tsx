import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import * as THREE from 'three';
import "mapbox-gl/dist/mapbox-gl.css";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

mapboxgl.accessToken = 'pk.eyJ1IjoianBudXdhZ2FiYSIsImEiOiJjbGduMmlrbDgwYm9mM21tbWdkZ3hodjc4In0.Q9vUbRDFh0Q7rc8o8Al8pA';

const customLayer = (map: mapboxgl.Map, gl: any) => {
  const camera = new THREE.PerspectiveCamera();
  const scene = new THREE.Scene();

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, -70, 100).normalize();
  scene.add(directionalLight);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(0, 70, 100).normalize();
  scene.add(directionalLight2);

  const loader = new GLTFLoader();
  loader.load('../model/buildings.gltf', (gltf) => {
    scene.add(gltf.scene);
  });

  const renderer = new THREE.WebGLRenderer({
    canvas: map.getCanvas(),
    context: gl,
    antialias: true
  });

  renderer.autoClear = false;

  const modelOrigin: [number, number] = [32.56275, 0.327345];
  const modelAltitude = 0;
  const modelRotate = [Math.PI / 2, 0, 0];

  const modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude);

  // transformation parameters to position, rotate and scale the 3D model onto the map
  const modelTransform = {
    translateX: modelAsMercatorCoordinate.x,
    translateY: modelAsMercatorCoordinate.y,
    translateZ: modelAsMercatorCoordinate.z,
    rotateX: modelRotate[0],
    rotateY: modelRotate[1],
    rotateZ: modelRotate[2],
    scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
  };

  return {
    id: '3d-model',
    type: 'custom',
    renderingMode: '3d',
    onAdd: () => {},
    render: (gl: any, matrix: number[] | ArrayLike<number>) => {
      const rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
      const rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
      const rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);

      const m = new THREE.Matrix4().fromArray(matrix);
      const l = new THREE.Matrix4().makeTranslation(
        modelTransform.translateX ?? 0,
        modelTransform.translateY ?? 0,
        modelTransform.translateZ ?? 0,
      ).scale(new THREE.Vector3(
        modelTransform.scale,
        -modelTransform.scale,
        modelTransform.scale
      )).multiply(rotationX).multiply(rotationY).multiply(rotationZ);

      camera.projectionMatrix = m.multiply(l);
      renderer.resetState();
      renderer.render(scene, camera);
      map.triggerRepaint();
    }
  };
};

const WebMap = () => {

  // const mapContainer = useRef();
  const mapContainer = React.useRef<HTMLDivElement>(null);


  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [32.568146, 0.333975],
      zoom: 16,
      pitch: 60
    });

    const THREE = window.THREE;

    map.on('style-load', () => {
      map.addLayer(customLayer(map, gl), 'waterway-label');
    });

  }, []);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />
  );
};

export default WebMap;


// mapbox://styles/mapbox/streets-v11
// mapbox://styles/mapbox/outdoors-v11
// mapbox://styles/mapbox/light-v10
// mapbox://styles/mapbox/dark-v10
// mapbox://styles/mapbox/satellite-v9
// mapbox://styles/mapbox/satellite-streets-v11
// mapbox://styles/mapbox/navigation-preview-day-v4
// mapbox://styles/mapbox/navigation-preview-night-v4
// mapbox://styles/mapbox/navigation-guidance-day-v4
// mapbox://styles/mapbox/navigation-guidance-night-v4

/*ref={mapContainer}*/