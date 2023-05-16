import { useState } from "react";

function Caritem(props) {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <div className={'car-item' + (modal ? ' car-item-active' : '')} style={{ cursor: "pointer" }} onClick={() => { setModal(!modal); console.log(modal) }}>
                <div className='car-image'>
                    <img src="./assets/images/car1.png" alt="car1" />
                    <p style={{ background: props.status === 1 ? "green" : props.status === 2 ? "#F89823" : "red" }}>{props.status === 1 ? "Connected" : props.status === 2 ? "Idle" : "Not Connected"}</p>
                </div>
                <img src="./assets/images/divider.png" alt="divider" />
                <div className='car-info'>
                    <p className='car-name'>{props.carname}</p>
                    <p className='car-date'><span><i className="fa-solid fa-calendar-days fa-sm" style={{ color: "black" }}></i></span>&nbsp;&nbsp;{props.date}</p>
                    <div className='car-btns'>
                        <img src="./assets/images/information-button2.png" alt="information" />
                        <img src="./assets/images/map-marker1.png" alt="map" />
                        <img src="./assets/images/placeholder1.png" alt="placeholder1" />
                    </div>
                </div>
            </div>
            {modal ? <div className='car-info-modal'>
                <div className='car-connective-info'>
                    <div className='car-modal-header'>
                        <img src="./assets/images/uber 1.png" alt="" />
                        <h1>UBER</h1>
                    </div>
                    <div className='car-plate-no'>
                        <img src="./assets/images/car1.png" alt="" />
                        <h1>DXB U16779</h1>
                    </div>
                    <div className='car-device-link'>
                        <div>
                            <img src="./assets/images/Vector.png" alt="" />
                            <h1>Not Connected</h1>
                        </div>
                        <p>09/03/2023 08:55 AM</p>
                    </div>
                    <div className='car-device-link'>
                        <div>
                            <img src="./assets/images/mapgps.png" alt="" />
                            <h1>Not Fixed</h1>
                        </div>
                        <p>09/03/2023 08:55 AM</p>
                    </div>
                    <div className='device-image'>
                        <img src="./assets/images/image 3.png" alt="" />
                    </div>
                    <div className='car-device-info-footer'>
                        <p>IMEI: 8345784935893</p>
                    </div>
                </div>
                <div className='car-device-data'>
                    <img className='close-btn' src="./assets/images/Close.png"  onClick={() => { setModal(!modal); console.log(modal) }} alt="" />
                    <div>
                        <div className='info-item'>
                            <img src="./assets/images/Sppedometer.png" alt="" />
                            <p>120 KM/HR</p>
                        </div>
                        <div className='info-item'>
                            <img src="./assets/images/Vector22.png" alt="" />
                            <p>Engin ON</p>
                        </div>
                        <div className='info-item'>
                            <img src="./assets/images/Gas.png" alt="" />
                            <p>20.5L</p>
                        </div>
                        <div className='info-item'>
                            <img src="./assets/images/Vector_2.png" alt="" />
                            <p>12.6V</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='info-item'>
                            <img src="./assets/images/Icon.png" alt="" />
                            <p>45 C</p>
                        </div>
                        <div className='info-item'>
                            <img src="./assets/images/sim 11.png" alt="" />
                            <p style={{ fontSize: "10px" }}>IMSI: 4739573987584849 <br /> ICCID: 89843958359498</p>
                        </div>
                        <div className='info-item'>
                            <img src="./assets/images/Group.png" alt="" />
                            <p>Update In Progres</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='info-item' style={{ cursor: "pointer" }}>
                            <img src="./assets/images/Vector_2.png" alt="" />
                            <img style={{ marginTop: "15px" }} src="./assets/images/switch-on 1.png" alt="" />
                        </div>
                        <div className='info-item' style={{ cursor: "pointer" }}>
                            <img src="./assets/images/Icowwn.png" alt="" />
                            <p>History</p>
                        </div>
                        <div className='info-item' style={{ cursor: "pointer" }}>
                            <img src="./assets/images/microchip 1.png" alt="" />
                            <p>Other Sensors</p>
                        </div>
                        <div className='info-item' style={{ cursor: "pointer" }}>
                            <img src="./assets/images/file 1.png" alt="" />
                            <p>Upload Config</p>
                        </div>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}

export default Caritem;