import { ReactNode } from "react";

export async function generateStaticParams() {
  return ["1", "2"].map((id) => ({ id }));
}

export default function LayoutPhotoPage({
  params: { id },
  children,
}: {
  params: { id: string };
  children: ReactNode;
}) {
  return <div className="card-layout">{children}</div>;
}
