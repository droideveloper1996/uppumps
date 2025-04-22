"use client";
import HandpumpDetails from "@/IndianPages/HandpumpDetails";

export default function HandpumpPage({ params }: { params: { slug: any } }) {
  return <HandpumpDetails slug={params.slug} />;
}
