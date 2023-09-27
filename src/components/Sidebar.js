import  { Component } from 'react';
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import './Sidebar.css';
// import Display from "../../../countapp/src/component/Display";


class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state={
      activeComponent: 'Component1',
    };
  }
  setActiveComponent=(componentName)=>{
    this.setState({activeComponent:componentName});
    
  };
  conditionActiveComponent=()=>{
    const { activeComponent } = this.state;

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
  render() {
    const {activeComponent}=this.state;
    return (
      <>
      <div className="sidebar">
        <ul>
          <li onClick={() => this.setActiveComponent('Component1')}>Component1</li>
          <li onClick={() => this.setActiveComponent('Component2')}>Component2</li>
          <li onClick={() => this.setActiveComponent('Component3')}>Component3</li>
          <li onClick={() => this.setActiveComponent('Component4')}>Component4</li>
        </ul>
        <div >
          {/* <Display activeComponent={this.state.activeComponent}/> */}
       {/* {this.conditionActiveComponent()} */}
          {/* {activeComponent === 'Component1' && <Component1/>}
          {activeComponent === 'Component2' && <Component2/>}
          {activeComponent === 'Component3' && <Component3/>}
          {activeComponent === 'Component4' && <Component4/>} */}
        </div>
      </div>
      <div>{this.conditionActiveComponent()}</div>
      </>
    );
  }
}

export default Sidebar;
