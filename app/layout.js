import {DM_Sans} from "next/font/google";
import "./globals.css"; 
import Footer from "@/Components/Footer";
import TopHeader from "@/Components/TopHeader";
import HeaderLogo from "@/Components/HeaderLogo";

 

const dmsansregular = DM_Sans({
  weight:["400","500","700"],
  subsets:["latin"]
})

export const metadata = {
  title: "Divyagyanam",
  description: "Divyagyanam",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmsansregular.className} h-full antialiased`}
    >
     
      <body className="min-h-full flex flex-col">
        <TopHeader/>
      <HeaderLogo/>
       <main className="flex-1">
         {children}
       </main>
         <Footer/>
        </body>
     
    </html>
  );
}
