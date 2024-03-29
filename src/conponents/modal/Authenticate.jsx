import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Authenticate.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import Notiflix from 'notiflix';
import Icon from '../icon/Icon';

const schema = Yup.object().shape({
    email: Yup
        .string()
        .min(3, 'Email must be at least 3 characters')
        .max(64, 'Email must be less than or equal to 64 characters')
        .required('Email is a required field'),
    password: Yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password must be less than or equal to 64 characters')
        .required('Password is a required field')
});

export const Authenticate = ({ isModalOpen }) => {
    const [ showPassword, setShowPassword ] = useState('password');
    const dispatch = useDispatch();
    const initialValues = {
        email: '',
        password: ''
    }

    const handleSubmit = (values, {resetForm}) => {
        dispatch(logIn(values)).then((res)=>{
            if(res.payload.status && res.payload.status === 401){
                Notiflix.Notify.failure(
                    res.payload.message,
                    {
                        position: 'center-top',
                        fontSize: '18px',
                        clickToClose: true,
                        timeout: 5000,
                    }
                );
            } else {
                isModalOpen(false);
            }
        });
        resetForm();
    }
    
    return (
        <div className={css.container}>
            <h2 className={css.header}>Log In</h2>
            <p className={css.text}>Welcome back! Please enter your credentials to access your account and continue your search for a teacher.</p>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <label htmlFor="emailField" className={css.emailLabel}>
                        <Field
                            id="emailField"
                            name="email"
                            placeholder="Name"
                            type="email"
                            className={css.emailField}
                        />

                        <ErrorMessage name="email" component="span" className={css.errorEmail}/>
                    </label>
                    <label htmlFor="passField" className={css.passLabel}>
                        {showPassword === 'password' ? (
                            <div onClick={() => setShowPassword('text')}>
                                <Icon name={'#icon-eye-closed'} className={css.svgIconEye}/>
                            </div>
                        ) : (
                            <div onClick={()=> setShowPassword('password')}>
                                <Icon name={'#icon-eye-closed'} className={css.svgIconEye} secondaryClassName={css.svgIconEyeOpened}/>
                            </div>
                        )}
                        <Field
                            id="passField"
                            name="password"
                            placeholder="Password"
                            type={showPassword}
                            className={css.emailField}
                        />

                        <ErrorMessage name="password" component="span" className={css.errorPass}/>
                    </label>
                    <button type="submit"> Log In </button>
                </Form>
            </Formik>
        </div>
    )
}