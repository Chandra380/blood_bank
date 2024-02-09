import React, { useEffect, useState } from 'react'
import API from '../../services/API';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Organisation = () => {
    // Find current user
    const {user} = useSelector(state=>state.auth);
    const[data,setData] = useState([]);
    // find donor records
    const getOrg = async()=>{
        try {
            if(user?.role === 'donor'){
                const {data} = await API.get('/inventory/get-organisations');
                console.log(data);
            if(data?.success){
                setData(data?.inventory);
            }
            }
            else if(user?.role === 'hospital'){
                const {data} = await API.get('/inventory/get-organisations-for-hospital');
                console.log(data);
            if(data?.success){
                setData(data?.inventory);
            }
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getOrg();
    },[user])
  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">BloodGroup</th>
            <th scope="col">Amount(ml)</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.organisation?.organisationName}</td>
              <td>{record.organisation?.email}</td>
              <td>{record.bloodGroup}</td>
              <td>{record.quantity}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Organisation
