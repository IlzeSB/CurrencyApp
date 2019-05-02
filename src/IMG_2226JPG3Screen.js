import React, { Component } from 'react';
import './App.css';


export default class IMG_2226JPG3Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#fdfffe',
     };
    
    return (
      <div className="AppScreen IMG_2226JPG3Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elFooter'>
              {/* WARNING: element 'footer' in 'IMG_2226.JPG3' has no component set */}
            </div>
            <div className='hasNestedComps elRectbtn'>
              {/* WARNING: element 'rect-btn' in 'IMG_2226.JPG3' has no component set */}
            </div>
            <div className='hasNestedComps elRectimg'>
              {/* WARNING: element 'rect-img' in 'IMG_2226.JPG3' has no component set */}
            </div>
            <div className='hasNestedComps elHeader'>
              {/* WARNING: element 'header' in 'IMG_2226.JPG3' has no component set */}
            </div>
            <div className='hasNestedComps elIconhamburger'>
              {/* WARNING: element 'icon-hamburger' in 'IMG_2226.JPG3' has no component set */}
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
