import { useRef } from 'react';
import React from 'react'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import BuildingsModel from './Buildings'

const BuildingsLayer = () => {
  return (
    <div className='h-screen w-full'>
      <Canvas camera={{fov: 14}}>
        <ambientLight />
        <OrbitControls />
        <BuildingsModel />
      </Canvas>
    </div>
  )
}

export default BuildingsLayer