import { TokenResponse } from '@react-oauth/google';
import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

// Google
type GoogleAuth = Omit<
  TokenResponse,
  'error' | 'error_description' | 'error_uri'
> | null;

const googleAuthStorage = createJSONStorage<GoogleAuth>(() => sessionStorage);

export const googleAuthAtom = atomWithStorage<GoogleAuth>(
  'googleAuth',
  null,
  googleAuthStorage,
);

// User Profile
type Profile = {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
};

const profileStorage = createJSONStorage<Profile | null>(() => sessionStorage);

export const profileAtom = atomWithStorage<Profile | null>(
  'userProfile',
  null,
  profileStorage,
);

// 是否已登入
export const isAuthAtom = atom((get) => !!get(googleAuthAtom));
