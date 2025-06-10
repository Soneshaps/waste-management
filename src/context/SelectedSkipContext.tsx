import { createContext, useContext, useState, type ReactNode } from 'react';

import type { Skip } from '../services/skipService';

const SelectedSkipContext = createContext<SelectedSkipContextProps | undefined>(undefined);

interface SelectedSkipContextProps {
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip | null) => void;
}

export const SelectedSkipProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <SelectedSkipContext.Provider value={{ selectedSkip, setSelectedSkip }}>
      {children}
    </SelectedSkipContext.Provider>
  );
};

export const useSelectedSkipContext = (): SelectedSkipContextProps => {
  const context = useContext(SelectedSkipContext);
  if (!context) {
    throw new Error('useSelectedSkipContext must be used within a SelectedSkipProvider');
  }
  return context;
};
