import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { loginThunk } from "../../redux/auth/authOperations";
const Login = () => {
    const initialValues = {
        password: '',
        email: ''
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const temp = useSelector(selectUser);
    // console.log(temp);
    const handleSubmit = (values, options) => {
        console.log(values);
        dispatch(loginThunk(values)).unwrap().then(() => navigate('/'))
        options.resetForm();
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center ">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="bg-wite rounded-2xl shadow-xl p-4 flex flex-col gap-4 w-1/6 md:w-1/3 xl:w-1/4 ">
                    <h3 className="text-center flex flex-col justify-center items-center">Login </h3>
                    <label className="flex flex-col gap-2">
                        <span>Email:</span>
                        <Field className='p-2 border-1 border-black shadow-md rounded-md' name='email' />
                    </label>
                    <label className="flex flex-col gap-2" >
                        <span>Password:</span>
                        <Field className='p-2 border-1 border-black shadow-md rounded-md' name='password' type='password' />
                    </label>
                    <button className='px-4 py-2 shadow-2xl rounded-md bg-teal-600 text-white cursor-pointer hover:bg-teal-700' type="submit">Login</button>
                    <p className="text-center text-gray-700 font-bold">You don't have an account? <Link to='/register' ><br /><span className=" br text-red-950 hover:text-teal-600 font-normal">Click for create!</span> </Link></p>

                </Form>
            </Formik>
        </div>
    );
};

export default Login;