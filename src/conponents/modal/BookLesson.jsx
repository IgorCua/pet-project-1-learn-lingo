import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookLesson.module.scss';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
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
        .matches(phoneRegExp, "Please check your phone")
        .min(10, "Pleace enter the US number")
        .max(11, "Pleace enter the US number")
        .required('Phone number is a required field')
});

export const BookLesson = ({isModalOpen, name, surname, img}) => {

    const initialValues = {
        email: '',
        password: ''
    }

    const handleSubmit = (values, {resetForm}) => {
        console.log("Form submit values: ", values);
        
        resetForm();  
        isModalOpen(false)
    }
    
    return (
        <div className={css.container}>
            <h2 className={css.header}>Book trial lesson</h2>
            <p className={css.text}>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
            <div className={css.teacherContainer}>
                <div className={css.imgContainer}>
                    <img src={img} alt="Teacher" />
                </div>
                <div>
                    <p className={css.teacherText}>Your teacher</p>
                    <p className={css.teacherName}>{`${name} ${surname}`}</p>
                </div>
                
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <div className={css.radioContainer}>
                        <label for="radio1">
                            <Field 
                                type="radio" 
                                id="radio1" 
                                name="learning_reason"
                                value="Career and business"
                                className={css.radio}
                            />
                            Career and business
                        </label>
                        <label for="radio2">
                            <Field 
                                type="radio" 
                                id="radio2" 
                                name="learning_reason"
                                value="Lesson for kids"
                                className={css.radio}
                            />
                            Lesson for kids
                        </label>
                        <label for="radio3">
                            <Field 
                                type="radio" 
                                id="radio3" 
                                name="learning_reason"
                                value="Living abroad"
                                className={css.radio}
                            />
                            Living abroad
                        </label>
                        <label for="radio4">
                            <Field 
                                type="radio" 
                                id="radio4" 
                                name="learning_reason"
                                value="Exams and coursework"
                                className={css.radio}
                            />
                            Exams and coursework
                        </label>
                        <label for="radio5">
                            <Field 
                                type="radio" 
                                id="radio5" 
                                name="learning_reason"
                                value="Culture, travel or hobby"
                                className={css.radio}
                            />
                            Culture, travel or hobby
                        </label>
                    </div>
                    <label htmlFor="nameField" className={css.nameLabel}>
                        <Field
                            id="nameField"
                            name="name"
                            placeholder="Full Name"
                            type="text"
                            className={css.inputField}
                            required
                        />

                        <ErrorMessage name="name" component="span" className={css.errorName}/>
                    </label>
                    <label htmlFor="emailField" className={css.emailLabel}>
                        <Field
                            id="emailField"
                            name="email"
                            placeholder="Email"
                            type="email"
                            className={css.inputField}
                            required
                        />

                        <ErrorMessage name="email" component="span" className={css.errorEmail}/>
                    </label>
                    <label htmlFor="passField" className={css.passLabel}>
                        <Field
                            id="passField"
                            name="password"
                            type="tel"
                            placeholder="Phone number"
                            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            className={css.inputField}
                            required
                        />

                        <ErrorMessage name="password" component="span" className={css.errorPass}/>
                    </label>
                    <button type="submit"> Log In </button>
                </Form>
            </Formik>
        </div>
    )
}