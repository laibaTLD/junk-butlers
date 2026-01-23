"use client";

import { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

const defaultTheme = {
  primaryColor: '#3b82f6', // blue-500
  secondaryColor: '#1e40af', // blue-700
  accentColor: '#60a5fa', // blue-400
};

export const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export function ThemeProvider({ 
  children, 
  theme 
}: { 
  children: ReactNode; 
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
  } 
}) {
  const value = {
    primaryColor: theme?.primaryColor || defaultTheme.primaryColor,
    secondaryColor: theme?.secondaryColor || defaultTheme.secondaryColor,
    accentColor: theme?.accentColor || defaultTheme.accentColor,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
