import React from 'react';
import { DEPARTMENTS } from '../staff/staffs';

const Department = () => {

    const showListDepartments = DEPARTMENTS.map(dep => {
        return(
            <div className="col-md-4 col-sm-3 mt-4 mb-4">
                <div className="card">       
                <div className="card-body">
                    <h4 className="card-title">Phòng Ban: {dep.name}</h4>
                    <p className="card-text">Số lượng nhân viên</p>
                </div>
            </div>
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