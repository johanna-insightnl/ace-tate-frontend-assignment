interface Props {
  primary: string;
}

export default function SingleColorCircle({ primary }: Props){
  return(
    <div className="circle-color" style={{backgroundColor: primary}}/>
  )
}
