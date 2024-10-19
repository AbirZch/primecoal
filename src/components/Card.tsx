
const Card = (props:{paragraphs: string[]}) => {
  return (
    <div className=" bg-lightgray rounded-lg  h-full basis-full  ">
    <div className=" text-white space-y-5 p-7 font-light text-sm leading-loose">
 {props.paragraphs.map((paragraph)=><p>{paragraph}</p>)}
    </div>
  </div>
  )
}

export default Card
