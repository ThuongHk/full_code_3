import React from 'react';
import {useParams} from 'react-router-dom';
// import { STAFFS } from './staffs';
import {useSelector} from 'react-redux';
import { showListStaffSelector } from '../redux/selectors';

const DetailStaff = () => {

    const detailStaff1 = useSelector(showListStaffSelector)
    const params = useParams()
    console.log(params);

const staffDetail = detailStaff1.find(staffdetail => staffdetail.id.toString() === params.id)

        return (
        <div className='container-fluid detailstaff'>           
                <div className="card">
                   <div className="row">
                    <div className="col-md-3 col-sm-2">
                   <img className="card-img-top" src={staffDetail.image} alt={staffDetail.name} />
                   </div>
                   <div className="col-md-4 col-sm-3">
                        <div className="card-body">
                            <h4 className="card-title">{staffDetail.name}</h4>
                            <p className="card-text">Text</p>
                        </div>
                        </div>
                   </div>
                </div>
                      
        </div>
        
    );
};

export default DetailStaff;