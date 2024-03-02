import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Register.module.scss';
import clsx from 'clsx';
import sprite from '../../assets/icons/icons.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    registerUser
} from '../../redux/auth/operations';
import Notiflix from 'notiflix';

const schema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(64, 'Name must be less than or equal to 64 characters')
        .required('Name is a required field'),
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

export const Register = ({ isModalOpen }) => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState('password');
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const handleSubmit = (values, {resetForm}) => {
        // console.log("Form submit values: ", values);
        dispatch(registerUser(values)).then((res)=>{
            if(res.payload.message && res.payload.message === "Email is already in use")
            {
                Notiflix.Notify.failure(
                    "Email is already in use",
                    {
                        position: 'center-top',
                        fontSize: '18px',
                        clickToClose: true,
                        timeout: 5000,
                    }
                );
            } else {
                isModalOpen(false);
                resetForm();
            }
        });
        // resetForm();
    }
    
    return (
        <div className={css.container}>
            <h2 className={css.header}>Register</h2>
            <p className={css.text}>
                Thank you for your interest in our platform! In order to register, 
                we need some information. 
                Please provide us with the following information
            </p>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <label htmlFor='nameField' className={css.nameLabel}>
                        <Field
                            id="nameField"
                            name="name"
                            placeholder="Name"
                            type="text"
                            className={css.nameField}
                        />
                        
                        <ErrorMessage name="name" component="span" className={css.errorName}/>
                    </label>
                    <label htmlFor="emailField" className={css.emailLabel}>
                        <Field
                            id="emailField"
                            name="email"
                            placeholder="Email"
                            type="email"
                            className={css.emailField}
                        />

                        <ErrorMessage name="email" component="span" className={css.errorEmail}/>
                    </label>
                    <label htmlFor="passField" className={css.passLabel}>
                        {showPassword === 'password' ? (
                            <svg className={css.svgIconEye} onClick={() => setShowPassword('text')}>
                                <use href={sprite + '#icon-eye-closed'}/>
                            </svg>
                        ) : (
                            <svg 
                                className={clsx(
                                    css.svgIconEye,
                                    css.svgIconEyeOpened
                                )} 
                                onClick={()=> setShowPassword('password')}
                            >
                                <use href={sprite + '#icon-eye-closed'}/>
                            </svg>
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
                    <button type="submit"> Register </button>
                </Form>
            </Formik>
        </div>
    )
}