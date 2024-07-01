interface Props {
  primary: string;
}

export default function SingleColorCircle({ primary }: Props){
  return(
    <div className="single-circle-color" style={{backgroundColor: primary}}/>
  )
}
