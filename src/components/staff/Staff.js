import React from 'react';
// import { STAFFS } from './staffs';
import { Link } from 'react-router-dom';
import SearchStaff from './SearchStaff';
import { useSelector } from 'react-redux/es/exports';
import { showListStaffAll } from '../redux/selector';
import AddStaff from './AddStaff';

const Staff = () => {
    const showListStaff1 = useSelector(showListStaffAll)
    // console.log(showListStaff1);
    const showListStaff = showListStaff1.map(staff => {
        return (
            <div className="col-md-2 col-sm-3 mt-4 mb-4" key={staff.id}>
              <Link to={`/staff/${staff.id}`} >
              <div className="card">
                <img className="card-img-top" src={staff.image} alt="" />
                    <div className="card-body">
                            <h4 className="card-title">{staff.name}</h4>
                            <p className="card-text">Phòng ban</p>
                    </div>
                </div>
              </Link>
            </div>
        )
    })
    return (
        <div className="container-fluid staff">
        <div className="row">
        <SearchStaff/>
        <AddStaff/>
        
        </div>
        <div className="row"> 
              
         {showListStaff}
        </div>
        </div>
    );
};

export default Staff;