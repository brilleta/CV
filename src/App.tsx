import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import CV from "./components/CV";
import Dither from "./components/Dither";
import { Button } from "./components/ui/button";

function App() {
  const cvRef = useRef<HTMLDivElement>(null!);

  const printCV = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "CV",
    pageStyle: `
      @page {
        margin: 0;
        size: A4;
      }
      @media print {
        body {
          margin: 0;
          padding: 0;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        #cv-to-print {
          background-color: #000000 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `,
  });

  return (
    <>
      <div className="w-[210mm] min-h-[297mm] bg-white text-black mx-auto relative">
        <div className="w-full h-full absolute top-0 left-0">
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={false}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
        <CV
          ref={cvRef}
          firstname="Aurélien"
          lastname="Brillet"
          photo={"/photo_cv.png"}
          title="Développeur Python IA et Fullstack Web"
          email="aurelien.brillet04@gmail.com"
          phone="+33 6 95 15 92 52"
          address="16 rue de l'Autour, 59800 Lille, France"
          linkedin="linkedin.com/in/aurélien-brillet-586262171"
          github="github.com/brilleta"
          diplomas={[
            {
              diploma: "Licence professionnelle DA2I",
              school: "IUT A - Lille",
              year: "2020 - 2021",
              description:
                "Développement administratif de l'internet et de l'intranet",
            },
            {
              diploma: "DUT Informatique",
              school: "IUT A - Lille",
              year: "2018 - 2020",
              description:
                "Diplôme Universitaire de Technologie en Informatique",
            },
            {
              diploma: "Licence Sciences de l'Ingénieur",
              school: "Université de Lille 1",
              year: "2016 - 2018",
              description: "Option Mathématiques – Informatique",
            },
            {
              diploma: "Cycle préparatoire généraliste",
              school: "ISEN Lille",
              year: "2013 - 2016",
              description: "Classes préparatoires MPSI et PSI intégrées",
            },
            {
              diploma: "Baccalauréat Scientifique",
              school: "Lycée Charles de Gaulle - Compiègne",
              year: "2013",
              description: "Mention Assez Bien - Option Physique-Chimie",
            },
          ]}
          experiences={[
            {
              job: "Responsable d'Applications",
              company: "Buawei",
              period: "2024 - Présent",
              description:
                "Pilotage du projet Lecteur Universel, application d'inventaire industriel exploitant l'OCR pour la lecture automatisée de pièces usinées. Développement de solutions cloud sur AWS avec interfaces de dashboarding et visualisation de données.",
              technologies: ["AWS", "OCR", "Dashboard", "Cloud"],
            },
            {
              job: "Développeur Full Stack",
              company: "Buawei",
              period: "2022 - 2024",
              description:
                "Développement de POKAIOK, outil d'assistance au contrôle qualité et conformité basé sur Machine Learning. Conception et implémentation d'une architecture full-stack avec backend Spring Boot et frontend React, déployée dans un environnement conteneurisé Docker.",
              technologies: [
                "Spring Boot",
                "React",
                "Docker",
                "Machine Learning",
              ],
            },
            {
              job: "Alternant Développeur IA",
              company: "Buawei",
              period: "2020 - 2022",
              description:
                "Industrialisation de services d'intelligence artificielle en microservices. Migration et refactorisation d'applications Flask vers FastAPI pour optimiser les performances et la scalabilité des solutions IA.",
              technologies: [
                "Python",
                "Flask",
                "FastAPI",
                "Microservices",
                "IA",
              ],
            },
            {
              job: "Fernand de Service",
              company: "Big Fernand - Lille",
              period: "2017 - 2020",
              description:
                "CDI à temps partiel : Présentation de carte à la clientèle, entretien de la salle, préparation de commandes et gestion de la caisse.",
              technologies: [],
            },
          ]}
          skills={{
            languages: [
              "Java",
              "Python",
              "JavaScript",
              "TypeScript",
              "SQL",
              "HTML5/CSS3",
            ],
            frameworks: ["React", "Spring Boot", "FastAPI", "Flask"],
            uiStyling: [
              "TailwindCSS",
              "shadcn/ui",
              "Lucide",
              "Framer Motion",
              "Zustand",
              "Figma",
            ],
            tools: [
              "Git",
              "Docker",
              "Bash",
              "Pack Office",
              "OnShape",
              "VSCode",
            ],
          }}
          hobbies={[
            "Papa",
            "Jeux de société",
            "Jeux vidéos",
            "Cinéma",
            "Lecture",
            "Musculation",
            "Padel",
          ]}
        />
      </div>
      <Button className="fixed bottom-4 right-4" onClick={printCV}>
        Télécharger PDF
      </Button>
    </>
  );
}

export default App;
