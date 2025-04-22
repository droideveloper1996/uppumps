// app/accessories/[slug]/page.tsx
import React from "react";
import Footer from "@/Pages/Footer";
import NewToolbar from "@/Pages/NewToolbar";
import MoreAccessoriesDetails from "@/IndianPages/MoreAccessoriesDetails";
import AccessoriesDetails from "@/IndianPages/AccessoriesDetails";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function AccessoriesPage({ params }: PageProps) {
  if (params.slug === "more") {
    return (
      <>
        <MoreAccessoriesDetails />
      </>
    );
  }

  return <AccessoriesDetails slug={params.slug} />;
}
