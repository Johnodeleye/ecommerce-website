'use client';
import BreadCrumb from '@/components/Breadcrumb'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import GlobalApi from "@/utils/GlobalApi";
import ProjectBanner from './_components/ProjectBanner';
import ProjectInfo from './_components/ProjectInfo';

const ProjectDetail = () => {
  const pathname = usePathname();

  const [productDetail, setProductDetail]=useState()

  useEffect(() => {
    const projectId = pathname.split('/').pop();
    console.log("Project Id", projectId);
    getProductById_(projectId);
  }, [pathname]);

  const getProductById_ = (projectId) => {
    GlobalApi.getProductById(projectId).then(resp => {
      console.log(resp.data.data);
      setProductDetail(resp.data.data);
    });
  };

  return (
    <div className="p-5 px-5 bg-gray-800/90 md:py-12 md:px-28">
     <BreadCrumb/>
     <div className='flex flex-col justify-around mt-10 sm:flex-row'>
      <ProjectBanner product={productDetail}/>
      <ProjectInfo/>
     </div>
    </div>
  );
};

export default ProjectDetail;