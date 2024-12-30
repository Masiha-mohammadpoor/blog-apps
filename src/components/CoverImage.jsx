import Image from "next/image";
import Link from "next/link";

const CoverImage = ({ slug, coverImageUrl, title }) => {
  return (
    <Link className="relative" href={`/blogs/${slug}`}>
      <div className="relative aspect-w-16 aspect-h-9 aspect-video overflow-hidden rounded-md">
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center transition-all duration-200 hover:scale-110"
        />
      </div>
    </Link>
  );
};

export default CoverImage;
