import Image from "next/image"

const ProjectBanner = ({product}) => {
    console.log(product?.banner?.url);
    
    return (
        <div> 
            <Image src={product?.banner?.url} alt="product" width={400} height={400}/>
        </div>
    )
}

export default ProjectBanner
