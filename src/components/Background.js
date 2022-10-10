import { StrictMode, useEffect } from 'react';
import * as THREE from 'three';


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
const scene = new THREE.Scene();
scene.background = new THREE.Color('#ffe46e');
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
const helper = new THREE.CameraHelper( camera );
scene.add( helper );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const edgesGeometry = new THREE.EdgesGeometry( geometry );
var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );
var wireframe = new THREE.LineSegments( edgesGeometry, mat );

// let circleLine = new THREE.MeshLine();
// circleLine.setGeometry(geometry);


const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.add(wireframe);
scene.add( cube );


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // camera.rotateX(-0.0);
}



















function Background () {  
  // document.body.appendChild( renderer.domElement );
  useEffect(()=>{
    document.getElementById("background").appendChild(renderer.domElement);
    animate();
    console.log("rendered");
  },[]);
  
  

  return (<>
    <div className='background' id="background">

    </div>
  </>);
}
export default Background;


// import { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// function Bird(props){
//   const ref = useRef()
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
//   return (
//     <>
//     <mesh ref={ref}
//       {...[props]}
//       scale = {0.5}
//     >
//       <coneGeometry args={[5,5,3]} />
//       <meshStandardMaterial color={'blue'}/>

//     </mesh>
//     {/* <lineSegments>
//       <lineBasicMaterial color={'white'}/>
//       <edgesGeometry args={ref.current.coneGeometry}/>
//     </lineSegments> */}
//     </>
//   )
// }


// export default function Background() {
//   return (
//     <div className='background'>
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />
//       <Bird position={[-1.2, 0, 0]} />
//       {/* <Box position={[1.2, 0, 0]} /> */}
//     </Canvas>
//     </div>
//   )
// }
