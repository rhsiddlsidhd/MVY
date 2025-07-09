"use client";

import React, { useState } from "react";

import CategoryDisplay from "../molecules/CategoryDisplay";
import CategoryScrollMenu from "../molecules/CategoryScrollMenu";
import { useGenre } from "../../_contexts/GenreContext";

const CategorySection = () => {
  const [selected, setSelected] = useState<number>(28);
  const data = useGenre();
  return (
    <section>
      {data && (
        <>
          <CategoryDisplay data={data} selected={selected} />
          <CategoryScrollMenu
            data={data}
            selected={selected}
            onClick={(id: number) => setSelected(id)}
          />
        </>
      )}
    </section>
  );
};

export default CategorySection;
