import Image from "next/image";

const ProjectBanner = ({ product }) => {
  const imageUrl = product?.banner?.url // Add default image

  return (
    <div className="w-full">
      {product ? (
        <Image
          src={imageUrl}
          alt="product"
          width={250}
          height={300}
          className="object-cover text-center rounded-lg sm:float-right md:w-80 md:h-80"
        />
      ) : (
        <div className="w-48 h-48 md:h-80 md:w-80 bg-slate-600 animate-pulse"></div>
      )}
    </div>
  );
};

export default ProjectBanner;