import "../global.css";

export const metadata = {
  title: "NextGram",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://nextgram.vercel.app"),
};

export async function generateStaticParams() {
  return ["de", "it", "en"].map((lng) => ({ lng }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={props.params.lng}>
      <body>
        {props.children}
        {props.modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
