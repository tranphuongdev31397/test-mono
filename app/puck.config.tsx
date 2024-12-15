import type { Config } from "@measured/puck";
import ProjectDetail, {
  ProjectDetailProps,
} from "./modules/LDP2/components/ProjectDetail";
import { useState } from "react";

type Props = {
  HeadingBlock: { title: string; arrayFields?: string[] };

  ProjectDetail: ProjectDetailProps;
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "custom",
          render: ({ onChange, value }) => {
            return (
              <input
                type="color"
                value={value}
                onChange={(e: any) => {
                  onChange(e.target.value);
                }}
              />
            );
          },
        },
        // arrayFields: {type: "array"}
      },

      // defaultProps: {
      //   title: "Heading",
      // },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    ProjectDetail: {
      fields: {
        backgroundColor: {
          label: "Curved background color",
          type: "custom",
          render: ({ onChange, value, field }) => {
            return (
              <input
                type="color"
                value={value}
                onChange={(e: any) => {
                  onChange(e.target.value);
                }}
              />
            );
          },
        },
        desc: {
          type: "textarea",
          label: "Description",
        },
        image: {
          type: "text",
          label: "Highlight project image",
        },
        title: {
          type: "text",
          label: "Title",
        },
      },
      defaultProps: {
        backgroundColor: "#D2DFD5",
        desc: "Orchard Sophia is a proposed residential development comprising 2 blocks of 5-storey buildings (total 78 units) with basement carparks, a swimming pool, and communal facilities.",
        image:
          "https://s3-alpha-sig.figma.com/img/1f36/5e07/076be54fda8ccbd73a2cf688e1fb78f8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzeaw6gRG0f4tIVqD2xCyCzmMkHutV24gZM8dFOmMMrzPuWISdPogT0wzoGzxSVQM94t27s~6atC4iZwXUgfRrpZclqH4VMZ1qr9yGPCobZUQTYyDdRK-azMRfhxhf1izqw0LSI5mQOXkfJyFf1cF96bO8Ltfuj7dNbodjZhuSrIqtZFHNC8if-4iJNUHGTiQZ-EiAp91HctL3vWkfttOW~JGBAvXmZ~JaB9KMOi7eNZpc~n8YCF1rnv15BpB-9RvDhpREaxITJa5E3mYzaQfrWoE0AkouFq1jpiRJbwykerC~9VMwqOtMNCXR5VUh4DS7hMxHLwl2bkIEmgwmcFRQ__",
        title: "Project Detail",
      },
      render: (props) => <ProjectDetail {...props} />,
    },
  },
};

export default config;
