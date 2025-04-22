import HandpumpDetails from "@/IndianPages/HandpumpDetails";

export default function HandpumpPage({ params }: { params: { slug: string } }) {
  return <HandpumpDetails slug={params.slug} />;
}
