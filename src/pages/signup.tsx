import React, { useReducer} from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import { ToastContainer } from 'react-toastify';
type FormState = {
    username: { value: string; error: string, touched:boolean };
    email: { value: string; error: string, touched:boolean };
    password: { value: string; error: string, touched:boolean };
    [key: string]: { value: string; error: string, touched:boolean }; // Index signature
  };

type FormAction = {
    type: string
    field: string 
    payload?: string
}

const initialState = {
    username: { value: '', error: '', touched:false },
    email: { value: '', error: '', touched: false},
    password: { value: '', error: '', touched: false },
};
  
const formStateReducer = (state: FormState, action:FormAction) => {
    switch (action.type) {
            case 'SET_VALUE':
            return {
                ...state,
                [action.field]: { ...state[action.field], value: action.payload }, //form[username]: {...form[username], value: 'newvalue'
            }
        case 'SET_ERROR':
            return {
                ...state,
                [action.field]: { ...state[action.field], error: action.payload },
            };
        case 'SET_TOUCHED':
            return {
                ...state,
                [action.field]: { ...state[action.field], touched: true },
            };
        case 'CLEAR_ERRORS':
            return initialState;
        default:
            return state;
    }
}

export default function Signup () {
    const [formState, dispatch] = useReducer(formStateReducer, initialState);
    // const [hasErrors, setHasErrors] = useState(false)
    
    const {loading, signup} = useSignup()

 
    
    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target
        dispatch({type: 'SET_VALUE', field: name, payload: value})
        validateField(name, value);
    }

    const validateField = (field: string, value: string) => {
        
        let error = '';
        if (field === 'username' && value.length < 3) {
          error = 'Username must be at least 3 characters';
        } else if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
          error = 'Invalid email format';
        } else if (field === 'password' && value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
      
        dispatch({ type: 'SET_ERROR', field, payload: error });

        // hasErrors = Object.values(formState).some((field) => field.error) //checks for each obj in the array if obj.error is truthy
        // console.log('hasErrors', hasErrors)
    }

    // useEffect(()=> {
    //     setHasErrors(Object.values(formState).some((field) => field.error))
    // }, [validateField])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signup(formState.username.value, formState.email.value, formState.password.value )
    }
  return (
    <div className='flex flex-row justify-center'>
         <ToastContainer 
                    position='top-left'
                    closeOnClick
                    />
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-1/2'>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            name="username"
            className='input input-bordered w-full max-w-xs bg-white'
            value={formState.username.value}
            onChange={handleChange}
            onBlur={() => dispatch({ type: 'SET_TOUCHED', field: 'username' })} // Set touched on blur
        />
        {formState.username.touched && formState.username.error && ( // Show error only if touched and has error
            <div role="alert" className="alert text-white bg-brightOrange mt-3 border-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>{formState.username.error}</span>
          </div>
        )}

        <label htmlFor="email">Email:</label>
        <input
            type="text"
            id="email"
            name="email"
            className='input input-bordered w-full max-w-xs bg-white'
            value={formState.email.value}
            onChange={handleChange}
            onBlur={() => dispatch({ type: 'SET_TOUCHED', field: 'email' })} // Set touched on blur
        />
        {formState.email.touched && formState.email.error && ( // Show error only if touched and has error
           <div role="alert" className="alert text-white bg-brightOrange mt-3 border-none">
           <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
           <span>{formState.email.error}</span>
         </div>
        )}      

        <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                className='input input-bordered w-full max-w-xs bg-white'
                value={formState.password.value}
                onChange={handleChange}
                onBlur={() => dispatch({ type: 'SET_TOUCHED', field: 'password' })} // Set touched on blur
            />
        {formState.password.touched && formState.password.error && ( // Show error only if touched and has error
           <div role="alert" className="alert text-white bg-brightOrange mt-3 border-none">
           <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
           <span>{formState.password.error}</span>
         </div>
        )}      

            <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </Link>

            <div>
                <button className='btn bg-darkPurple text-white border-none hover:bg-lightYellow' disabled={loading }>
                    {loading ? <span className='loading loading-spinner'>Signing up..</span>:"Sign Up"}
                </button>
            </div>
        </form>
    </div>
  );
}
