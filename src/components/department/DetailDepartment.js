import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { showListDepartmentSelector,  showListStaffSelector} from "../redux/selectors";

const DetailDepartment = () => {
  const detailDepartments = useSelector(showListDepartmentSelector);
  const listStaffDepartments = useSelector(showListStaffSelector)
  console.log("useSelector", detailDepartments);
  const { departmentId } = useParams();
  console.log(departmentId);

  const ShowDetailDepartments = detailDepartments.filter(depa => depa.id === (departmentId));
  const showListStaffSelectorScreen = listStaffDepartments.filter(depar =>depar.departmentId === (departmentId))
  console.log(ShowDetailDepartments);
  console.log(showListStaffSelectorScreen);
  const showDataDepartment = ShowDetailDepartments.map((depar) => {
    return (
      <div>
      <h5>Nhân Viên Phòng: {depar.name}</h5>
      
        </div>
    );
  });
  return (
    <div className='container-fluid'>
     
      <div className="row mb-2">
       {showDataDepartment}
       </div>
       <div className="row">
       {showListStaffSelectorScreen.map(staff => {
        return(
          <div className="col-md-2 col-sm-3 col-xs-12 mt-4 mb-4" key={staff.id}>
          <Link to={`/staff/${staff.id}`} >
          <div className="card">
            <img className="card-img-top" src={staff.image} alt="" />
                <div className="card-body">
                        <h5 className="card-title">{staff.name}</h5>                        
                        {/* <p className="card-text">Phòng ban</p> */}
                        
                </div>
            </div>
          </Link>
        </div>
        )
       })}
       </div>
      
      </div>
   
  );
};

export default DetailDepartment;
