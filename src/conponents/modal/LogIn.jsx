import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './LogIn.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsError, selectAuthError, selectIsLoggedIn} from '../../redux/auth/selectors';
import { logIn } from '../../redux/auth/operations';
import Icon from '../icon/Icon';
import { selectModalLogIn } from '../../redux/modals/selectors';
import { notiflixError } from '../../services/notiflixError';

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
const initialValues = {
    email: '',
    password: ''
}

export const LogIn = ({ handleModal }) => {
    const [ showPassword, setShowPassword ] = useState('password');
    const dispatch = useDispatch();
    const isAuthError = useSelector(selectAuthIsError);
    const authError = useSelector(selectAuthError);
    const isModalLogIn = useSelector(selectModalLogIn);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const handleSubmit = (values, {resetForm}) => {
        dispatch(logIn(values));
        resetForm();
    }
    
    useEffect(() => {
        if(isAuthError && authError?.status === 400) {
            notiflixError('failure', 'Email or password is wrong.');
        } 
        if(isLoggedIn) {
            handleModal();
        }
    }, [isAuthError, authError, isModalLogIn, isLoggedIn, handleModal]);

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