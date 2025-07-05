"use client";

import React, { useEffect, useState } from "react";

import CategoryDisplay from "../molecules/CategoryDisplay";
import CategoryScrollMenu from "../molecules/CategoryScrollMenu";
import { GenreResponse } from "@/app/category/page";

const CategorySection = ({ data }: { data: GenreResponse }) => {
  const [selected, setSelected] = useState<number>(28);

  return (
    <section>
      <CategoryDisplay data={data} selected={selected} />
      <CategoryScrollMenu
        data={data}
        selected={selected}
        onClick={(id: number) => setSelected(id)}
      />
    </section>
  );
};

export default CategorySection;
