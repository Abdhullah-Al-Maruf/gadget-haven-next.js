import AllGadget from "@/components/allgadget/AllGadget";
import Banner from "@/components/banner/Banner";


export const metadata = {
  title: "Homepage",
  description: "This is the homepage of our Next.js application.",
};
export default function Home() {
  return (
 <>

<Banner/>
<AllGadget/>
 </>
  );
}
