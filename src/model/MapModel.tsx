import { useRef } from 'react';
import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import Model from './Scene'

const MapModel = () => {

  return (
    <div className='h-screen w-screen'>
      <Canvas camera={{fov: 14}}>
        <ambientLight />
        <Stars />
        <Environment preset='night'/>
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default MapModel