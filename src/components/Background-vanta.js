import React from 'react'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

class Background extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xaf9d4f,
      shininess: 0.00
      

    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
  render() {
    return <div className="background" ref={this.vantaRef}/>
  }
}

export default Background;