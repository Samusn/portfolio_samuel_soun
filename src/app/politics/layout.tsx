import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Politik", template: "%s · Politik · Samuel Soun" },
  description: "Samuel Soun: Vorstandsmitglied der FDP Suhr, Mitglied der Jungfreisinnigen Schweiz und Stimmenzähler im Wahlbüro Suhr.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
