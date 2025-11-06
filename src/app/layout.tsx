import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  title: "Open-RPC",
  description: "OpenRPC Documentation",
};

const banner = (
  <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
);

const navbar = (
  <Navbar
    logo={<b>Open-RPC</b>}
    // ... Your additional navbar options
  />
);

const footer = <Footer>MIT {new Date().getFullYear()} © Open-RPC.</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        {/* Your additional tags should be passed as children of Head element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/open-rpc/website"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}