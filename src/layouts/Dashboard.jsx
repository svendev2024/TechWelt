import CountUp from 'react-countup';

function Dashboard(){
    return (
        <div className='dashboard'>
          <div className='count-number' style={{color: "#2A398D"}}>
            <p className='count-label'>All Vehicles</p>
            <p className='count-digit'><CountUp end={35}/></p>
          </div>
          <div className='count-number' style={{color: "#28A745"}}>
            <p className='count-label'>ONLINE</p>
            <p className='count-digit'><CountUp end={19}/></p>
          </div>
          <div className='count-number' style={{color: "#FF0000"}}>
            <p className='count-label'>OFFLINE</p>
            <p className='count-digit'><CountUp end={4}/></p>
          </div>
          <div className='count-number' style={{color: "#F89823"}}>
            <p className='count-label'>IDLE</p>
            <p className='count-digit'><CountUp end={12}/></p>
          </div>
        </div>
    );
}

export default Dashboard;