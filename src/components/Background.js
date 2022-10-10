import { StrictMode, useEffect } from 'react';
import * as THREE from 'three';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000');
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 50;
// camera.rotation.set(90  ,0,0);
// const helper = new THREE.CameraHelper( camera );
// scene.add( helper );



const geometry = new THREE.ConeGeometry( 3, 5, 3 );
geometry.scale(0.5,1,0.5);



const edgesGeometry = new THREE.EdgesGeometry( geometry );
var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 5 } );
var wireframe = new THREE.LineSegments( edgesGeometry, mat );

// let circleLine = new THREE.MeshLine();
// circleLine.setGeometry(geometry);


const material = new THREE.MeshBasicMaterial( { color: "#ff00ff", wireframe :  false } );
const cube = new THREE.Mesh( geometry, material );
cube.rotation.set(Math.PI/2,0,0);
const coneAxesHelper = new THREE.AxesHelper(1);
cube.add(coneAxesHelper);
// coneAxesHelper.setColors(n)
cube.position.set(78.5,0,0);
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);
// cube.add(axesHelper);
// scene.add( axesHelper );
// const box = new THREE.BoxHelper( cube, 0xffff00 );
// scene.add(box);



cube.add(wireframe);
scene.add( cube );

// cube.rotation.x = Math.PI / 2;
// cube.position.setFromEuler(new THREE.Vector3(1,0,0));
// cube.position.x = 1;
// cube.position.y =1;

let mouseX = null, mouseY = null;
let mouseUpdated = false;
document.addEventListener('mousemove', onMouseUpdate);
function onMouseUpdate(e){
  mouseX = e.pageX;
  mouseY = e.pageY;
  mouseUpdated = true;
}

function mouse2Worldcoor(x,y){
  return{
    x:x-canvasWidth/2,
    y:-y+canvasHeight/2
  }
}

function pointWorldcoor(coor,depth=1){
  return{
    x:Math.atan(coor.y/depth),
    y:Math.atan(coor.x/depth)
  }
}

function radian2deg(r){
  return r/Math.PI*180;
}

console.log(cube.position);
console.log(camera.rotation);


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  if(mouseUpdated){
    
    let rotation2D = pointWorldcoor(mouse2Worldcoor(mouseX,mouseY),camera.position.z-geometry.parameters.height/2);

    cube.rotation.x = Math.PI/2 -rotation2D.x;
    cube.rotation.z = -rotation2D.y;
    // box.update();
    // cube.position.x = 1 - cube.position.x; 
    console.log(mouse2Worldcoor(mouseX,mouseY));
    console.log(radian2deg(cube.rotation.x),radian2deg(cube.rotation.y),radian2deg(cube.rotation.z));
    mouseUpdated = false;
  }
  // window
  // cube.rotation
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
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
