"use client";

import { GenreResponse } from "@/app/category/page";
import CategorySection from "./CategorySection";

export default function CategorySectionClient({
  data,
}: {
  data: GenreResponse;
}) {
  return <CategorySection data={data} />;
}
