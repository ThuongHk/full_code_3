import React from 'react';
// import { STAFFS } from '../staff/staffs';
import { useSelector } from 'react-redux/es/exports';
import { showListStaffSelector } from '../redux/selectors';

const Salary = () => {

    function sumSalary(a, b){
        const salarySum = a*3000000 + b*200000
        return salarySum
    }

    const salaryShowScreen = useSelector(showListStaffSelector)

    const showListSalary = salaryShowScreen.map(sal => {       
          return (
            <div className="col-md-3 col-sm-2 mt-2 mb-2" key={sal.id}>
                <div className="card">               
                    <div className="card-body">
                        <h4 className="card-title">{sal.name}</h4>
                        <p className="card-text">Số Lương: {sumSalary(parseFloat(sal.salaryScale), parseFloat(sal.overTime))} VND</p>
                    </div>
                </div>
            </div>
          )
    })

    return (
        <div className='container-fluid salary'>
           <div className='row'>
              {showListSalary}
           </div>
        </div>
    );
};

export default Salary;