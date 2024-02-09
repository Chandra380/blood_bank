import React,{useState,useEffect} from 'react'
import Header from '../../components/shared/Layout/Header';
import API from './../../services/API';

const Analytics = () => {
    const [data,setData] = useState([]);
    const colors = ['#2a9d8f','#e76f51','#e63946','#00b4d8','#ffb4a2','#0096c7','#f07167','#ff006e'];
    // Get Blood Group data
    const getBloodGroupData = async() => {
        try {
            const {data} = await API.get('/analytics/bloodGroup-details');
            if(data?.success){
                setData(data?.bloodGroupData)
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getBloodGroupData()
    },[]);
   
  return (
    <>
      <Header/>
        <div className="d-flex flex-row flex-wrap">
            {data?.map((record,i)=>(
                <div className="card m-2 p-1" style={{width: "18rem",backgroundColor:`${colors[i]}`}}>
                <div className="card-body">
                  <h1 className="card-title bg-light text-dark text-center">{record.bloodGroup}</h1>
                  <p className="card-text">Total In : {record.totalIn}</p>
                  <p className="card-text">Total Out : {record.totalOut}</p>
                </div>
                <div className="card-footer text-light bg-dark text-center">Total available : {record.availableBlood}</div>
              </div>
            ))}
        </div>
    </>
  )
}

export default Analytics
