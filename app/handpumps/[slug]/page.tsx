"use client";

import HandpumpDetails from "@/IndianPages/HandpumpDetails";
import Footer from "@/Pages/Footer";
import NewToolbar from "@/Pages/NewToolbar";

export default function HandpumpPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <NewToolbar />
      <HandpumpDetails slug={params.slug} />
      <Footer />
    </>
  );
}
