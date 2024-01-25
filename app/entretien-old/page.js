import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import HeaderSimple from "../headerSimple";
import Section from "../Section";


const Entretien = () => {
  const pageTitle = "Entretien";
  const pageDescription =
    "Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises";


  // Déclarer les photos dans un tableau d'objets
  const photos = [
    { url: "entretien-1.png", alt: "gallery" },
    { url: "entretien-2.png", alt: "gallery" },
    { url: "entretien-3.png", alt: "gallery" },
    { url: "entretien-4.png", alt: "gallery" },
  ];

  const sections = [
    {
      title: "NOS SAVOIR FAIRE :",
      body : <ul className="list-disc pl-4"><li>• Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
    },
  ]


  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      <HeaderSimple photos={photos} />

      <Section section={sections[0]} />

      <Footer />
    </RootLayout>
  );
};

export default Entretien;
