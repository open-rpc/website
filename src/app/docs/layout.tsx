import { Footer, Layout } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import { SiteNavbar } from '../components/chrome/SiteNavbar';

const footer = (
  <Footer>Apache License 2.0 {new Date().getFullYear()} © OpenRPC.</Footer>
);

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout
      navbar={<SiteNavbar />}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/open-rpc/website"
      footer={footer}
    >
      {children}
    </Layout>
  );
}
