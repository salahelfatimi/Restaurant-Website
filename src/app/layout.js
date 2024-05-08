import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";



export const metadata = {
  title: { default: "Restaurant S-C-H", template: "%s - Restaurant S-C-H" },
  description: "Discover culinary excellence at Restaurant S-C-H. From tantalizing appetizers to divine desserts, every bite is a delight. Experience dining redefined.",
  metadataBase: new URL("https://restaurant-website-pink-mu.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://restaurant-website-pink-mu.vercel.app/",
    siteName: "Restaurant S-C-H",
    images: [
      {
        url: "https://restaurant-website-pink-mu.vercel.app/opengraph-image.png",
        width: 1200 ,
        height: 630 ,
      },
      {
        url: "https://restaurant-website-pink-mu.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630 ,
        alt: "Restaurant S-C-H",
      },
    ],
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <main className=" flex flex-col h-screen justify-between ">
          <Navbar/>
          <saction className=" mb-auto">{children}</saction>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
