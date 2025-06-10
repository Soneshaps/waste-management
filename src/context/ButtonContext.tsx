import { createContext, useContext, useState, type ReactNode } from 'react';

interface ButtonContextProps {
  disabled: boolean;
  setDisabled: (value: boolean) => void;
}

const ButtonContext = createContext<ButtonContextProps | undefined>(undefined);

export const useButtonContext = (): ButtonContextProps => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
};

export const ButtonProvider = ({ children }: { children: ReactNode }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <ButtonContext.Provider value={{ disabled, setDisabled }}>{children}</ButtonContext.Provider>
  );
};
