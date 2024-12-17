import * as React from "react";

export interface LocationProps {}

export default function Location(props: LocationProps) {
  return (
    <div className="grid grid-cols-2 last:col-span-full grid-flow-row gap-y-4 md:gap-y-6 gap-x-6 md:gap-x-12">
      <div className="flex flex-col last:col-span-full">
        <h5>Location</h5>
        <p>D05 - Buona Vista / West Coast</p>
      </div>
      <div className="flex flex-col last:col-span-full">
        <h5>Location</h5>
        <p>D05 - Buona Vista / West Coast</p>
      </div>
      <div className="flex flex-col last:col-span-full">
        <h5>Location</h5>
        <p>D05 - Buona Vista / West Coast</p>
      </div>

      <div className="flex flex-col odd:last:col-span-full">
        <h5>Project Category</h5>
        <p>
          Residential Development Comprising 2 Blocks of 11 Storey and 1 Block
          of 7 Storey Tower
        </p>
      </div>
    </div>
  );
}
