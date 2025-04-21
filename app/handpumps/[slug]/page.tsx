// app/handpumps/[slug]/page.tsx

import HandpumpDetails from "@/IndianPages/HandpumpDetails";
import Footer from "@/Pages/Footer";
import NewToolbar from "@/Pages/NewToolbar";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <>
      <NewToolbar />
      <HandpumpDetails slug={params.slug} />
      <Footer />
    </>
  );
}
