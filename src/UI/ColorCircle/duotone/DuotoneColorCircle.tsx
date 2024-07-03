interface Props {
  primary: string;
  secondary?: string;
  buttonSizeClass?: string;
}

export default function DuotoneColorCircle({ primary, secondary, buttonSizeClass }: Props){
  const primaryColor = primary || "#F2F0F1";
  const secondaryColor = secondary || "#262626";

  const circleStyle = {
    background: `linear-gradient(45deg, ${primaryColor} 0%, ${primaryColor} 50%, ${secondaryColor} 50%, ${secondaryColor} 100%)`,
  };

  return(
    <div className={`circle-color ${buttonSizeClass}`} style={circleStyle}  />
  )
}
