"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

export const labelMap: Record<string, string> = {
  "": "Home",
  dataset: "Dataset",
  exploration: "Exploration",
  preprocessing: "Preprocessing",
  model: "Model",
  results: "Results",
};

export const Navigation = () => {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[0] || "";
  if (segment === "") return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{labelMap[segment]}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
