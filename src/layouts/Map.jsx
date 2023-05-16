function Map(){
    return (
        <div className='map'>
          <div className='indicator-car' style={{top: "120px", left: "550px"}}>
            <p className='banner' style={{background: "#F89823"}}>DXB U16779</p>
            <img src="./assets/images/PngItem_4193000 1.png" alt="car"/>
          </div>
          <div className='indicator-car' style={{top: "350px", left: "720px"}}>
            <p className='banner' style={{background: "#F89823"}}>DXB U16779</p>
            <img src="./assets/images/PngItem_4193000 1.png" style={{transform: "rotate(90deg)"}} alt="car"/>
          </div>
          <div className='indicator-car' style={{top: "233px", left: "1058px"}}>
            <p className='banner' style={{background: "red"}}>DXB U16779</p>
            <img src="./assets/images/PngItem_4193000 1.png" style={{transform: "rotate(148deg)"}} alt="car"/>
          </div>
        </div>
    );
}

export default Map;