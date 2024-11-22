import Image from "next/image";
import Link from "next/link";

const CoverImage = ({slug , coverImageUrl , title}) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md">
    <Link href={`/blogs/${slug}`}>
      <Image
        src={coverImageUrl}
        alt={title}
        fill
        className="object-cover object-center transition-all duration-200 hover:scale-110"
      />
    </Link>
  </div>

  );
}
 
export default CoverImage;