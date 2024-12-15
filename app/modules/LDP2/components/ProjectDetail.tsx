import "../../../tailwind.css?url";

export interface ProjectDetailProps {
  title: string;
  desc: string;
  image: string;
  backgroundColor: string;
}

export default function ProjectDetail({
  title,
  desc,
  image,
  backgroundColor,
}: ProjectDetailProps) {
  return (
    <section className="pj-detail max-w-[1440px] mx-auto py-12 lg:py-24">
      <div className="max-w-screen-xl  px-4 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          <div className="col-span-1 relative pb-10 md:pb-0">
            <img
              src={image}
              className="object-cover aspect-square md:max-w-[530px]  relative z-10 object-center min-h-[240px] w-full rounded-tr-[30%] rounded-bl-[30%]"
            />
            <div
              style={{
                // @ts-ignore
                "--bgColor": backgroundColor,
              }}
              className="bg-box-curve aspect-[375/276] md:aspect-[708/530] min-w-[100vw] md:min-w-[708px] w-full h-auto absolute bottom-0 -left-4 md:-left-24 md:-bottom-24 bg-[--bgColor] rounded-tr-[30%]"
            />
          </div>

          <div className="col-span-1">
            <div className="md:max-w-[530px] justify-self-end flex flex-col gap-y-8">
              <div className="flex flex-col  gap-y-6">
                <h2 className="text-3xl md:text-6xl font-bold">{title}</h2>
                <p>{desc}</p>
              </div>

              <hr className="text-black bg-black h-0.5" />

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
                    Residential Development Comprising 2 Blocks of 11 Storey and
                    1 Block of 7 Storey Tower
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
