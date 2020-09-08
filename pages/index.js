import Fetch from 'isomorphic-unfetch'
import Layouts from '../Components/Layouts';
import Prices from '../Components/Prices'

const Index =(props)=>(
    <Layouts>
    <div>
        <h1>Welcome!!! Lets learning something new</h1>
        {/* <p>{props.bpi.time.updated}</p> */}
        <p>Check Current Bitcoins rate</p>
        <Prices bpi={props.bpi}/>
    </div>
    </Layouts>
);

Index.getInitialProps= async function() {
    const res =await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data =await res.json();

    return{
        bpi:data.bpi
    }
}

export default Index;