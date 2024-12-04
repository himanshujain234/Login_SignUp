import { fireEvent, render } from '@testing-library/react';
import SignupForm from '../Components/Pages/SignupForm';

describe('SignUp Component', ()=>{

    test('updates state on input change', () => {
        const {getByPlaceholderText} = render(<SignupForm />)
        const email = getByPlaceholderText('Email');
        const password = getByPlaceholderText('Password');
        const fullname = getByPlaceholderText('Full Name');
        const username = getByPlaceholderText('Username');
    
        fireEvent.change(email, { target: { value: 'test@example.com' } });
        fireEvent.change(password, { target: { value: 'password123' } });
        fireEvent.change(username, { target: { value: 'username' } });
        fireEvent.change(fullname, { target: { value: 'Full Name' } });
    
        expect(email.value).toBe('test@example.com');
        expect(password.value).toBe('password123');
        expect(username.value).toBe('username');
        expect(fullname.value).toBe('Full Name');
      });

      test('shows error if form fields empty', ()=>{
        const {getByText} = render (<SignupForm />);
        const registerButton = getByText('Sign Up');
        fireEvent.click(registerButton);
        expect(getByText("All fields required!")).toBeInTheDocument();
    })
})