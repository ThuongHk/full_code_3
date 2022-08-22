import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './staff.css';
import { useDispatch } from 'react-redux';
import staffSlice, { addNewStaff } from './staffSlice';
import { v4 as uuidv4} from 'uuid';

const schema = yup.object().shape({
     fullname: yup
     .string()
     .required('Vui lòng nhập họ tên của bạn'),
    //  .minLength(3, ' Họ tên tối thiểu 3 kí tự')
    //  .maxLength(40, 'Họ tên tối đa 40 ký tự' ),
     birthday: yup
     .string()
     .required('Vui lòng nhập ngày sinh'),
     salaryScale: yup
     .number()
     .required('Vui lòng hệ số lương của bạn'),
     startdate: yup
     .string()
     .required('Vui lòng nhập ngày vào công ty'),
     departmentId: yup
     .string()
     .required('Vui lòng chọn phòng ban'),
     annualLeave: yup
     .number()
     .required(' Vui lòng nhập số ngày nghỉ còn lại'),
     overTime: yup
     .number()
     .required('Vui lòng nhập vào số ngày làm thêm')

})

const AddStaff = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {register, handleSubmit, whach, formState: {errors}} = useForm({ resolver: yupResolver(schema) });
    const dispatch = useDispatch()
    const showModal = () => {
      setIsModalVisible(true);
    };  
    const handleOk = () => {
      setIsModalVisible(false);
    };  
    const handleCancel = () => {
      setIsModalVisible(false);
    };


    const submitForm = (data) => {
      console.log(data);
      // dispatch(staffSlice.actions.addStaff({
      //   id: uuidv4(),
      //   name: data.fullname,
      //   doB: data.birthday,
      //   salaryScale: data.salaryScale,
      //   startDate:data.startDate,
      //   department: data.department,
      //   annualLeave: data.annualLeave,
      //   overTime: data.overTime,
      //   image: '/assets/images/daidien.png'

      // }))
      dispatch(addNewStaff({
        // id: uuidv4(),
        name: data.fullname,
        doB: new Date(data.birthday),
        salaryScale: data.salaryScale,
        startDate: new Date( data.startDate),
        departmentId: data.departmentId,
        annualLeave: data.annualLeave,
        overTime: data.overTime,
        image:"/assets/images/alberto.png"
      }
        
      ))
    }
    return (
        <div>
           <Button type="primary" onClick={showModal}>
       +
      </Button>
      <Modal title="Thông Tin Nhân Viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label>Họ tên:</label>
            <input type="text"  className="form-control" {...register('fullname')} />
            {errors.fullname && <p className="error">{errors.fullname?.message}</p>}             
          </div>
          <div className="form-group">
            <label>Ngày sinh:</label>
            <input type="date"  className="form-control" {...register('birthday')} />   
            {errors.birthday && <p className="error">{errors.birthday?.message}</p>}             

          </div>
          <div className="form-group">
            <label>Hệ số lương:</label>
            <input type="number"  className="form-control" {...register('salaryScale')} />  
            {errors.salaryScale && <p className="error">{errors.salaryScale?.message}</p>}             

          </div>
          <div className="form-group">
            <label>Ngày vào công ty:</label>
            <input type="date"  className="form-control" {...register('startDate')} /> 
            {errors.startDate && <p className="error">{errors.startDate?.message}</p>}             

          </div>
          <div className="form-group">
            <label>Phòng ban: </label>
            <select className="form-control"  id=""  {...register('departmentId')}>
              <option value='Maketing'>Maketing</option>
              <option value='It'>It</option>
              <option value='Sale'>Sale</option>
              <option value='Hr'>Hr</option>
              <option value='Finance'>Finance</option>
            </select>
          </div>
          <div className="form-group">
            <label>Số ngày nghỉ còn lại:</label>
            <input type="number"  className="form-control" {...register('annualLeave')} /> 
            {errors.annualLeave && <p className="error">{errors.annualLeave?.message}</p>}             

          </div>
          <div className="form-group">
            <label>Số ngày làm thêm:</label>
            <input type="number"  className="form-control" {...register('overTime')} /> 
            {errors.overTime && <p className="error">{errors.overTime?.message}</p>}             

          </div>
          
          <button type="submit" className="btn btn-info btn-sm ">Submit</button>
       </form>
      </Modal>
        </div>
    );
};

export default AddStaff;