import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import Display from './Display';
import classes from './form.module.css';
const Form = () => {
    const [list, setlist] = useState([]);
    const schema = yup.object().shape({
        fullname: yup.string().required('please Enter Valid Fullname').min(4).max(50),
        age: yup.number().positive("Please Enter Valid Age").integer("please Enter valid Age").required('Please Enter Age'),
        email: yup.string().email().required('please Enter valid Email'),
        password: yup.string().min(6).max(20).required('Enter password between 6 to 20 Characters'),
        confirm_password: yup.string().oneOf([yup.ref("password"), null], "Password must be same ").required(),
    });
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const submitcallback = (data) => {
        console.log(data);
        reset();
        setlist((prevlist) => {
            return [...prevlist, { data, id: Math.random().toString() }]
        })
    };
    return (
        <div>
            <h1>Login Page</h1>
            <div className={classes["form-Container"]} >
                <form onSubmit={handleSubmit(submitcallback)} >
                    <label htmlFor='fullnamelabel'>Enter Fullname </label><br />
                    <input type="text" placeholder="Fullname....." id='fullnamelabel' {...register("fullname")} /><br />
                    {errors.fullname && <p>{errors.fullname.message}</p>}

                    <label htmlFor='agelabel'>Enter Age </label><br />
                    <input type="number" placeholder="Age....." id='agelabel' {...register("age")} /><br />
                    {errors.age && <p>{errors.age.message}</p>}

                    <label htmlFor='emaillabel'>Enter Email Address</label><br />
                    <input type="email" placeholder="Enter Email " id='emaillabel' {...register("email")} /><br />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label htmlFor='passwordlabel'>Password </label><br />
                    <input type="password" placeholder="Enter Strong Password" id='passwordlabel' {...register("password")} /><br />
                    {errors.password && <p>{errors.password.message}</p>}

                    <label htmlFor='confirmlabel'>Confim Password</label><br />
                    <input type="password" placeholder="Confirm Password" id="confirmlabel" {...register("confirm_password")} /><br /><br />
                    {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Display list={list} />
        </div>
    );
};
export default Form;