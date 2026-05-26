import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Premier Legal Firm",
  description: "Explore our comprehensive practice areas and legal expertise.",
};

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}