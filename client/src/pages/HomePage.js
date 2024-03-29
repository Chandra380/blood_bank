import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';
import Modal from '../components/shared/Modal/Modal';
import API from '../services/API';
import moment from 'moment';
import Organisation from './Dashboard/Organisation';

const HomePage = () => {
  const {loading,error,user} = useSelector((state) => state.auth);
  const [data,setData] = useState([]);
  const getBloodRecords = async() => {
    try {
      const {data} = await API.get('/inventory/get-inventory');
      if(data?.success){
        setData(data?.inventory);
        console.log(data);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getBloodRecords();
  }
  ,[])
  return (
    
    <Layout>
    {error && <span>{alert(error)}</span>}
    {loading?(<Spinner/>):(
      <>
        <div className="container">
        {user?.role==="organisation" && <h4 className='ms-4' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer"}}>
          <i className='fa-solid fa-plus text-success py-4'>
            Add Inventory

          </i>
        </h4>}
        {user?.role!="organisation" && <Organisation/>}
        
        {user?.role==="organisation" && <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Email</th>
                  <th scope="col">Time & Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity} (ML)</td>
                    <td>{record.email}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
        <Modal/>
        </div>
      </>
    )}

    </Layout>
    
    
  )
}

export default HomePage
