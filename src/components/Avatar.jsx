import Image from "next/image";

const Avatar = ({src , alt, width=28 , height=28}) => {
  return (
    <Image src={src} alt={alt}  width={width} height={height} className="rounded-full"/>
  );
}
 
export default Avatar;