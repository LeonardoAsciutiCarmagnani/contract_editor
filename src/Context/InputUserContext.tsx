/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useState } from "react";

interface IUserContext {
  userInfo: string;
  cnpjUser: string;
  isEditing: boolean;
  city: string;
  estado: string;
  date: number | undefined;
  setUserInfo: (e: any) => void;
  setIsEditing: (e: any) => void;
  setCnpjUser: (e: any) => void;
  setCity: (e: any) => void;
  setEstado: (e: any) => void;
  setDate: (e: any) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const InputUser = (): IUserContext => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Provider missing!");
  }
  return context;
};

export function InputUserProvider({ children }: { children: ReactNode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [cnpjUser, setCnpjUser] = useState("");
  const [city, setCity] = useState("");
  const [estado, setEstado] = useState("");
  const [date, setDate] = useState();
  return (
    <UserContext.Provider
      value={{
        userInfo,
        isEditing,
        cnpjUser,
        city,
        estado,
        date,
        setIsEditing,
        setUserInfo,
        setCnpjUser,
        setCity,
        setEstado,
        setDate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
