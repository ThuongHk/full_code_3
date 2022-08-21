import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { DEPARTMENTS } from '../staff/staffs';
import { getDepartments } from './departmentSlice';
import {showListDepartmentSelector} from '../redux/selectors';
import { getStaffs } from '../staff/staffSlice';

const Department = () => {
     const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getDepartments())
       dispatch(getStaffs())
    }, [dispatch])
     const dataScreenDep = useSelector(showListDepartmentSelector)
     console.log(dataScreenDep);
    const showListDepartments = dataScreenDep.map(dep => {
        return(
            <div className="col-md-4 col-sm-3 mt-4 mb-4">
                <Link to={`/department/${dep.id}`}>
                <div className="card">       
                <div className="card-body">
                    <h4 className="card-title">Phòng Ban: {dep.name}</h4>
                    <p className="card-text">Số lượng nhân viên</p>
                </div>               
               </div>
            </Link>
           
            </div>
        )
    })
    return (
        <div className='container-fluid'>
           <div className='row'>
            {showListDepartments}
           </div>
        </div>
    );
};

export default Department;