import React, { createContext, useState, useEffect, ReactNode } from 'react';
// import colorsData from '../components/ColorList/colors.json';

export interface IColor {
  id: string;
  name: string;
  pattern: string;
  color: {
    primary: string;
    secondary: string;
    tertiary?: string;
  };
}

interface ColorContextProps {
  colors: IColor[];
  addColor: (color: IColor) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

const ColorProvider = ({ children }: ColorProviderProps) => {
  const [colors, setColors] = useState<IColor[]>([]);

  useEffect(() => {
    const fetchColors = async () => {
      const response = await fetch('https://ecomm.aceandtate.show/api/public/color-swatches');
      const data = await response.json();
      setColors(data);
      console.log(data);
    };

    fetchColors();
  }, []);

  const addColor = (color: IColor) => {
    setColors((prevColors) => [...prevColors, color]);
  };

  return (
    <ColorContext.Provider value={{ colors, addColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
