import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";



export const metadata = {
  title: "Restaurant S-C-H",
  description: "Discover culinary excellence at Restaurant S-C-H. From tantalizing appetizers to divine desserts, every bite is a delight. Experience dining redefined.",
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
