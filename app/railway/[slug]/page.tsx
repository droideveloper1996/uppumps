"use client";

import RailwayDetails from "@/IndianPages/RailwayDeatils";
import Footer from "@/Pages/Footer";
import NewToolbar from "@/Pages/NewToolbar";

export default function RailwayPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <NewToolbar />
      <RailwayDetails slug={params.slug} />
      <Footer />
    </>
  );
}
