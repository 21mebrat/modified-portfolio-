import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export const metadata = {
  title: {
    default: "Mebrat Matebie | Portfolio",
    template: "%s | Mebrat Matebie"
  },
  description: "Full-stack web developer with 10+ years of experience building modern web applications.",
  keywords: [
    "react", "next.js", "modern web development", "web applications",
    "portfolio", "framer motion", "3D web", "user experience"
  ],
  authors: [{ name: "Mebrat Matebie", url: "https://yourportfolio.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Mebrat Matebie Portfolio",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  themeColor: "#f13024",
  width: "device-width",
  initialScale: 1,
};
const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        {/* Dynamic Title (template handled by Next.js) */}
        <title>{metadata.title.default}</title>

        {/* Primary Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        {metadata.authors.map((author, index) => (
          <meta key={index} name="author" content={`${author.name} - ${author.url}`} />
        ))}
        <meta name="theme-color" content="#f13024" />

        {/* OpenGraph/Facebook */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.title.default} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title.default} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:site" content="@yourhandle" />

        {/* Favicon Links */}
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
