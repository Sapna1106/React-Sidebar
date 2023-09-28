// import  { Component } from 'react';
import React, { useState } from 'react';
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import './Sidebar.css';

function Sidebar(){
  const [activeComponent, setActiveComponent] = useState('Component1');
  const setActiveComponentByName=(componentName)=>{
    setActiveComponent(componentName);
    
  };
  const conditionActiveComponent=()=>{
    switch (activeComponent) {
      case 'Component1':
        return <Component1 />;
      case 'Component2':
        return <Component2 />;
      case 'Component3':
        return <Component3 />;
      case 'Component4':
        return <Component4 />;
      default:
        return null;
    }
  }

  return (
          <>
          <div className="sidebar">
            <ul>
              <li onClick={() => setActiveComponentByName('Component1')}>Component1</li>
              <li onClick={() => setActiveComponentByName('Component2')}>Component2</li>
              <li onClick={() => setActiveComponentByName('Component3')}>Component3</li>
              <li onClick={() => setActiveComponentByName('Component4')}>Component4</li>
            </ul>
          </div>
          <div>{conditionActiveComponent()}</div>
          </>
        );
}

// class Sidebar extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       activeComponent: 'Component1',
//     };
//   }
//   setActiveComponent=(componentName)=>{
//     this.setState({activeComponent:componentName});
    
//   };
//   conditionActiveComponent=()=>{
//     const { activeComponent } = this.state;

//     switch (activeComponent) {
//       case 'Component1':
//         return <Component1 />;
//       case 'Component2':
//         return <Component2 />;
//       case 'Component3':
//         return <Component3 />;
//       case 'Component4':
//         return <Component4 />;
//       default:
//         return null;
//     }
//   }
//   render() {
//     const {activeComponent}=this.state;
//     return (
//       <>
//       <div className="sidebar">
//         <ul>
//           <li onClick={() => this.setActiveComponent('Component1')}>Component1</li>
//           <li onClick={() => this.setActiveComponent('Component2')}>Component2</li>
//           <li onClick={() => this.setActiveComponent('Component3')}>Component3</li>
//           <li onClick={() => this.setActiveComponent('Component4')}>Component4</li>
//         </ul>
//         <div >
//           {/* {activeComponent === 'Component1' && <Component1/>}
//           {activeComponent === 'Component2' && <Component2/>}
//           {activeComponent === 'Component3' && <Component3/>}
//           {activeComponent === 'Component4' && <Component4/>} */}
//         </div>
//       </div>
//       <div>{this.conditionActiveComponent()}</div>
//       </>
//     );
//   }
// }

export default Sidebar;
