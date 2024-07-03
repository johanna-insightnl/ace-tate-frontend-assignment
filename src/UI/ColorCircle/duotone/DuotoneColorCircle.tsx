interface Props {
  primary: string;
  secondary?: string;
  buttonSizeClass?: string;
}

export default function DuotoneColorCircle({ primary, secondary, buttonSizeClass }: Props){

  const circleStyle = {
    background: `linear-gradient(45deg, ${primary} 0%, ${primary} 50%, ${secondary} 50%, ${secondary} 100%)`,
  };

  return(
    <div className={`circle-color ${buttonSizeClass}`} style={circleStyle}  />
  )
}
