import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: "one", description: "lorem ipsum", id: 1 }].map(
          (item, i) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
