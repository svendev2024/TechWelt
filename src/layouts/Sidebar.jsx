import { useState } from 'react';
import Caritem from '../components/Caritem';

function Sidebar() {
    const [user, setUser] = useState(0);
    const handleChangeUser = (event) => {

    }
    return (
        <div className='sidebar'>
            <img className='logo' src="./assets/images/Logo.png" alt="log" />
            <div className='car-list'>
                <form onSubmit={handleChangeUser}>
                    <select className='input-customize' placeholder='Example placeholder' name="user" id="user" value={user} onChange={setUser}>
                        <option value="0">Owner Name</option>
                        <option value="user2">user2</option>
                    </select>
                    <input className='input-customize' style={{ marginTop: "28px" }} type="submit" value="Search" />
                </form>
                <div className='cars'>
                    <Caritem status={1} carname={"DXB U16779"} date={"09/03/2023 08:55 AM"} carid={123}/>
                    <Caritem status={2} carname={"DXB U16779"} date={"09/03/2023 08:55 AM"} carid={123}/>
                    <Caritem status={3} carname={"DXB U16779"} date={"09/03/2023 08:55 AM"} carid={123}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
