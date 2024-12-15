import { Puck, type Data, type Config } from "@measured/puck";
// @ts-ignore
import styles from "@measured/puck/puck.css?url";
import type {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import invariant from "tiny-invariant";

import puckConfig from "~/puck.config";
import { getPage, setPage } from "~/models/page.server";
import ColorPicker from "~/modules/plugins/ColorPicker";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const puckPath = params.puckPath || "/";
  const formData = await request.formData();
  const puckData = formData.get("puckData");

  invariant(puckData, "Missing data");
  invariant(typeof puckData === "string", "Invalid data");

  setPage(puckPath, JSON.parse(puckData));

  return json({ ok: true });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, id: "puck-css" },
];

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const puckPath = params.puckPath || "/";
  const initialData = getPage(puckPath) || {
    content: [],
    root: {},
  };
  return json({ puckPath, initialData });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = data?.initialData?.root?.props?.title || "Untitled page";

  return [{ title: `Editing: ${title}` }];
};

const MyPlugin = {
  overrides: {
    componentItem: ({ name }: any) => (
      <div style={{ backgroundColor: "hotpink" }}>{name}</div>
    ),
  },
};
export default function Edit() {
  const { initialData } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  return (
    <Puck
      plugins={[MyPlugin]}
      config={puckConfig as Config}
      data={initialData}
      onPublish={async (data: Data) => {
        // Use form data here because it's the usual remix way.
        let formData = new FormData();
        formData.append("puckData", JSON.stringify(data));
        submit(formData, { method: "post" });
      }}
      viewports={[
        {
          width: 360,
          height: "auto",
          icon: "Smartphone",
          label: "Small",
        },
        {
          width: 768,
          height: "auto",
          icon: "Tablet",
          label: "Medium",
        },
        {
          width: 1920,
          height: "auto",
          icon: "Monitor",
          label: "Large",
        },
      ]}
    />
  );
}
