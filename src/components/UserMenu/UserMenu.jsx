import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router";


const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (

    <div className="text-xl   text-center ">
      <button className='cursor-pointer px-2 py-2 text-black-600 text-bold font-bold hover:text-blue-500 
       rounded-md' onClick={() => dispatch(logoutThunk()).unwrap().then(() => navigate('/'))}>Logout</button>

    </div>)

};

export default UserMenu;
