import React from 'react'
import imgsrc from '../img/react.jpg'
class App extends React.Component{
    render(){
        return(
        	<div className="content">
        	    <div className="img-box"><img src={imgsrc} alt="" /></div>
                <div className="box">欢迎来到react的世界！</div>
            </div>
        )
    }
}
export default App