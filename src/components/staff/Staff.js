import React from 'react';
// import { STAFFS } from './staffs';
import { Link } from 'react-router-dom';
import SearchStaff from './SearchStaff';
import { useSelector } from 'react-redux';
import { showListStaffAll, showListStaffSelector} from '../redux/selectors';
import AddStaff from './AddStaff';


const Staff = () => {
  
    const dataScreen = useSelector(showListStaffAll)
    
      console.log(dataScreen);
    const showListStaff = dataScreen.map(staff => {
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
        {/* {status !== 'loading' && showListStaff} */}
         {showListStaff}
        </div>
        </div>
    );
};

export default Staff;



// import React from 'react';
// // import { STAFFS } from './staffs';
// import { Link } from 'react-router-dom';
// import SearchStaff from './SearchStaff';
// import { useSelector } from 'react-redux'; 
// import AddStaff from './AddStaff';
// // import { getStaffs } from './staffSlice';

// const Staff = () => {

 

//     const data = useSelector(state => state.staffStoreReducer) // get intial state from reducer of store 

//     const {staff1, status} = data

//      console.log(staff1) // array staff

//       const showListStaff = staff1?.map(staff => {
//         return (
//             <div className="col-md-2 col-sm-3 mt-4 mb-4" key={staff.id}>
//               <Link to={`/staff/${staff.id}`} >
//               <div className="card">
//                 <img className="card-img-top" src={staff.image} alt="" />
//                     <div className="card-body">
//                             <h4 className="card-title">{staff.name}</h4>
//                             <p className="card-text">Phòng ban</p>
//                     </div>
//                 </div>
//               </Link>
//             </div>
//         )
//     })

//     return (
//         <div className="container-fluid staff">
//         <div className="row">
//         <SearchStaff/>
//         <AddStaff/>
        
//         </div>
//         <div className="row"> 
              
//          {status !== 'loading' && showListStaff}
//         </div>
//         </div>
//     );
// };

// export default Staff;