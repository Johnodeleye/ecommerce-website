'use client';
import BreadCrumb from '@/components/Breadcrumb'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import GlobalApi from "@/utils/GlobalApi";
import ProjectBanner from './_components/ProjectBanner';
import ProjectInfo from './_components/ProjectInfo';
import ProductList from '@/components/ProductList';
import Skeleton from '@/components/Skeleton';

const ProjectDetail = () => {
  //use to get url path
  const pathname = usePathname();
  const [productDetail, setProductDetail]=useState()
  const [productList, setProductList] = useState([])
  

  useEffect(() => {
    const projectId = pathname.split('/').pop();
    console.log("Project path",pathname);
    getProductById_(projectId);
  }, [pathname]);

  const getProductById_ = (projectId) => {
    GlobalApi.getProductById(projectId).then(resp => {
      console.log(resp.data.data);
      setProductDetail(resp.data.data);
      getProductListByCategory(resp.data.data);
    });
  };
  
  const getProductListByCategory=(product)=>{
    GlobalApi.getProductByCategory(product?.category).then(resp=>{
      console.log(resp)
      setProductList(resp.data.data)
    })
  }

  return (
    <div className="p-5 px-10 py-12 bg-gray-800/90 md:px-28">
     <BreadCrumb path={pathname}/>
     <div className='grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 sm:gap-5 justify-evenly'>
      <ProjectBanner product={productDetail}/>
      <ProjectInfo product={productDetail}/>
     </div>
     <div>
     {productList ? (
     <div className="mt-20">
     <h2 className="font-medium text-[20px] mb-4 text-green-400">Similar Projects</h2>
     <ProductList productList={productList}/>
     </div>
      ) : (
        <Skeleton/>
      )}
    </div>
    </div>
  );
};

export default ProjectDetail;