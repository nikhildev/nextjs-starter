import { createContext, useState } from "react";

export type AuthorisedUser = {
  firstName: string;
  lastName: string;
  email: string;
  photoUrl: string;
};

export type AuthState = {
  user: AuthorisedUser | null;
  loading: boolean;
};

const defaultAuthState: AuthState = {
  loading: false,
  user: null,
};

export const AuthContext = createContext<AuthState>(defaultAuthState);

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<AuthState>(defaultAuthState);

  const setUser = (user: AuthorisedUser | null) =>
    setAuth((auth) => ({ ...auth, user: user }));

  return (
    <AuthContext.Provider
      value={{
        ...defaultAuthState,
        user: auth.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
