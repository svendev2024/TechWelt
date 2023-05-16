import { useState } from "react";

function Livechat() {
    const [modal, setModal] = useState(false);
    return (
        <div className='livechat'>
            <div className='chat-modal' style={{height:modal ? "544px" : "0px"}}>
                <div className='chat-header' style={{visibility:modal ? "visible" : "hidden"}}>
                    <div className='chat-title'>
                        <img src="./assets/images/chat 1.png" alt="chat 1" />
                        <p className='ptitle'>Chat with Support</p>
                        <i className="fa-solid fa-minus" onClick={() => setModal(!modal)} ></i>
                    </div>
                    <hr style={{ margin: "0 5px 0 5px" }} />
                    <div className='chat-admin'>
                        <img src="./assets/images/Ellipse 1.png" style={{ margin: "5px" }} alt="Ellipse" />
                        <span className='chat-status' style={{ background: "green" }}></span>
                        <div className='admin-info'>
                            <p className='admin-name'>Admin</p>
                            <p className='admin-role'>Support Agent</p>
                        </div>
                    </div>
                </div>
                <div className='chat'>
                    <div className='chat-indicator-admin'>
                        <img src="./assets/images/Ellipse 1.png" width={20} style={{ margin: "5px" }} alt="Ellipse" />
                        <p className='chat-logtime'>Admin 03:36PM</p>
                    </div>
                    <p className='chat-message-left'>Hello, We are here to help, ask us anything</p>
                </div>
                <button className='chat-start-btn' style={{visibility:modal ? "visible" : "hidden"}}>Chat Now</button>
                <div className='chat-footer' style={{visibility:modal ? "visible" : "hidden"}}>
                    <h1>Powered by</h1>
                    <img src="./assets/images/chat 2.png" alt="chat 2" />&nbsp;&nbsp;
                    <h2>LiveChat</h2>
                </div>
            </div>
            <img src="./assets/images/live-chat 1.png" alt="live-chat" onClick={() => setModal(!modal)} />
        </div>
    );
}

export default Livechat;