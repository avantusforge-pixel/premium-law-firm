import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Legal Insights",
  description: "Read our latest articles on legal topics and industry insights.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}