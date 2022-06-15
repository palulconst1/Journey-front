import { server } from '../config';
import UserProfile from '../components/UserProfile';
import ResetPassword from '../components/ResetPassword';
import SendResetPassword from '../components/SendResetPassword';
import VerifyUser from '../components/VerifyUser';
import { useHookstate } from "@hookstate/core";
import { userState } from "./_app";
import { useEffect } from 'react';

export default function ForgotPassword() {
  return (
    <div className='d-flex justify-content-center mt-4'>
        <SendResetPassword />
    </div>
  )
}

