import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authStore';

type Props = {}
export const LoginPage = (props: Props) => {
  const { authState, login } = useContext(AuthContext)

  
  const navigate =  useNavigate();

  const onLogin = () =>{
    login({
      id: '1',
      name: 'Facundo',
      lastname: 'Colavini'

    })
    navigate('/',{
      replace:true
    });
  }
  
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  )
}