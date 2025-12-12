# My CV

Une application web moderne pour générer et exporter un CV au format PDF.

## 📝 Description

Ce projet est une application React/TypeScript permettant de créer un CV interactif et élégant avec un design moderne utilisant des effets visuels (Silk shader). Le CV est entièrement personnalisable via des props React et peut être exporté en PDF.

## ✨ Fonctionnalités

- **Design moderne** avec effets visuels (Silk shader avec Three.js)
- **Interface glassmorphism** pour un rendu élégant
- **Export PDF** avec mise en page A4 optimisée
- **Responsive** et adapté à l'impression
- **Composants réutilisables** pour faciliter la personnalisation
- **Sections complètes** : expériences, formations, compétences, hobbies
- **Icônes dynamiques** pour les technologies et centres d'intérêt

## 🛠️ Technologies utilisées

- **React 19** - Framework JavaScript
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **TailwindCSS 4** - Framework CSS
- **shadcn/ui** - Composants UI
- **Lucide React** - Icônes
- **Three.js** - Effets 3D (Silk shader)
- **react-to-print** - Export PDF
- **Framer Motion** - Animations (optionnel)

## 🚀 Installation

\`\`\`bash
# Cloner le repository
git clone <url-du-repo>

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
\`\`\`

## 📦 Scripts disponibles

\`\`\`bash
pnpm dev       # Lance le serveur de développement
pnpm build     # Compile le projet pour la production
pnpm preview   # Prévisualise la version de production
pnpm lint      # Vérifie le code avec ESLint
\`\`\`

## 📄 Structure du projet

\`\`\`
src/
├── components/
│   ├── CV.tsx                  # Composant principal du CV
│   ├── CVHeader.tsx            # En-tête avec photo et infos de contact
│   ├── ExperienceCard.tsx      # Carte d'expérience professionnelle
│   ├── FormationCard.tsx       # Carte de formation
│   ├── CompetenceSection.tsx   # Section de compétences
│   ├── GlassCard.tsx           # Composant glassmorphism
│   ├── Silk.tsx                # Effet visuel de fond
│   └── ui/                     # Composants shadcn/ui
├── utils/
│   └── iconMapping.tsx         # Mapping des icônes
└── App.tsx                     # Point d'entrée de l'application
\`\`\`

## 🎨 Personnalisation

Pour personnaliser le CV, modifiez les props passées au composant `<CV />` dans `App.tsx` :

\`\`\`tsx
<CV
  firstname="Votre prénom"
  lastname="Votre nom"
  title="Votre titre"
  email="votre@email.com"
  phone="+33 6 00 00 00 00"
  address="Votre adresse"
  diplomas={[...]}
  experiences={[...]}
  skills={{
    languages: [...],
    frameworks: [...],
    uiStyling: [...],
    tools: [...]
  }}
  hobbies={[...]}
/>
\`\`\`

## 📸 Export PDF

Cliquez sur le bouton "Télécharger PDF" en bas à droite de la page pour générer et télécharger votre CV au format PDF.

## 📝 Licence

Ce projet est un projet personnel.
