interface Props {
  primary: string;
  secondary?: string;
}

export default function DuotoneColorCircle({ primary, secondary }: Props){

  const circleStyle = {
    background: `linear-gradient(45deg, ${primary} 0%, ${primary} 50%, ${secondary} 50%, ${secondary} 100%)`,
  };

  return(
    <div className="single-circle-color" style={circleStyle}  />
  )
}
