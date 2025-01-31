import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/services/fireStoreOperations";

export default function BlogCard({
  slug,
  title,
  description,
  image,
}: BlogPost) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <div className="bg-primary2 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-newprimary2 mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
