import { journalState } from './../../src/store/journal/journalSlice';
import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { checkingCredentials, login, logout } from '../../src/store/auth';
import { checkingUserAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../src/store/auth/thunks';
import { loginUserWithEmailAndPassword, signInWithGoogle } from '../../src/firebase/providers';
import { testUser, initialState, userLoginWithGoogleError } from '../fixtures';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../src/store/store';

jest.mock('../../src/firebase/providers');

describe('Pruebas en mis Thunks', () => {
    const initialStateJournal: journalState = {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    }
    const dispatch = jest.fn();
    const state: RootState = {
        auth: {
            ...initialState
        },
        journal: {
            ...initialStateJournal
        }
    }
    beforeEach(() => jest.clearAllMocks() as any)
    test('Debe de invocar al checkingUserAuthentication', async () => {

        await checkingUserAuthentication()(dispatch, () => state, undefined);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    })

    test('startGoogleSignIn debe de llamar a checkingCredentials y login - Exito', async () => {
        const loginData = { ok: true, ...testUser }
        await signInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch, () => state, {})


        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    })

    test('startGoogleSignIn debe de llamar a checkingCredentials y login - Error', async () => {
        const loginData = { ok: false, ...userLoginWithGoogleError }

        await signInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch, () => state, {})


        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData))
    })

    /*  test('startLoginWithEmailAndPassword debe de llamar al checkingCredentials - Exito', async () => {
         const loginData: any = { ok: true, ...testUser }
         const formData = { email: "demo@gmail.com", password: '123456' }
 
         const dispatch = jest.fn();
         await loginUserWithEmailAndPassword.mockResolvedValue(loginData)
         await startLoginWithEmailAndPassword(formData)(dispatch, () => state, {})
 
         expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
         expect(dispatch).toHaveBeenCalledWith(login(loginData))
     }) */
})
