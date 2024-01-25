import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import HeaderSimple from "../headerSimple";
import RootLayout from "../layout";
import Section from "../Section";

const Travaux = () => {
  


  const pageTitle = "Travaux divers";
  const pageDescription =
    " Peinture boiseries, peinture sur toitures.";


 // Déclarer les photos dans un tableau d'objets
 const photos = [
  { url: "peinture-1.png", alt: "gallery" },
  { url: "peinture-2.png", alt: "gallery" },
  { url: "peinture-3.png", alt: "gallery" },
  { url: "peinture-4.png", alt: "gallery" },
];


const sections = [
  {
    title: "NOS SAVOIR FAIRE :",
    body : <ul className="list-disc pl-4"><li>• Peinture boiseries, peinture sur toitures.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
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

export default Travaux;
