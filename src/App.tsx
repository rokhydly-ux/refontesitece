import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';





import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


import {
  Briefcase,
  GitMerge,
  Gauge,
  Layout,
  MousePointerClick,
  GalleryHorizontal,
  LayoutGrid,
  Grid3x3,
  Orbit,
  Home,
  Type,
  Filter,
  Columns,
  MessageCircle,
  FileText,
  Video,
  Code,
  Minimize2,
  Heading1,
  Clock,
  Workflow,
  FlipHorizontal,
  HelpCircle,
  type LucideProps,
} from 'lucide-react';
import type { FC } from 'react';

const kpis = [
  {
    label: 'Structure Accueil',
    value: 4,
    icon: Layout,
    href: '#structure-accueil',
    color: 'text-red-500',
  },
  {
    label: 'Navigation & Parcours',
    value: 3,
    icon: GitMerge,
    href: '#architecture',
    color: 'text-red-500',
  },
  {
    label: 'Moteur de Conversion',
    value: 4,
    icon: MousePointerClick,
    href: '#ui-cro',
    color: 'text-orange-500',
  },
  {
    label: 'SEO & Performances',
    value: 3,
    icon: Gauge,
    href: '#seo-perf',
    color: 'text-blue-500',
  },
  {
    label: 'Pages Corporate & FAQ',
    value: 4,
    icon: Briefcase,
    href: '#corporate',
    color: 'text-green-500',
  },
];

const sections = [
  {
    id: 'structure-accueil',
    title: 'Refonte Structurelle de l\'Accueil',
    tasks: [
      {
        title: 'Hero Slider & Trust Badges',
        status: 'Bloquant',
        defect: 'Accueil statique, barre de réassurance basique et mal placée.',
        action: 'Intégrer un "Hero Slider" animé avec CTA. Juste en dessous, intégrer une section "Trust Badges" (4 icônes modernes : Devis 24h, SAV Local, Livraison Sénégal, Installation Experte) pour remplacer l\'ancienne version statique.',
        icon: GalleryHorizontal,
      },
      {
        title: 'Section Catégories Visuelles',
        status: 'Bloquant',
        defect: 'Manque d\'entonnoir de navigation visuel.',
        action: 'Sous les Trust Badges, insérer une section "Nos Catégories" avec des tuiles visuelles (Image + Titre au survol) redirigeant vers les sous-univers (Jus, Boucherie, Boulangerie).',
        icon: LayoutGrid,
      },
      {
        title: 'Grille "Nos Produits" (3x4)',
        status: 'Majeur',
        defect: 'La section actuelle "Nos secteurs" est confuse.',
        action: 'Remplacer par un titre "Nos Produits", affichant une Grille CSS stricte (3 lignes, 4 colonnes = 12 produits). Imposer des animations au survol (effet de zoom sur l\'image, apparition d\'une ombre portée et du bouton d\'action).',
        icon: Grid3x3,
      },
      {
        title: 'Slider des Marques',
        status: 'Majeur',
        defect: 'Relégué dans la page \'À propos\', statique et non cliquable.',
        action: 'Déplacer sur la page d\'accueil sous la grille produits. Transformer en "Infinite Carousel" (Slider automatique lent). Chaque logo de marque doit être cliquable et filtrer les produits associés (Taxonomie marque).',
        icon: Orbit,
      },
    ],
  },
  {
    id: 'architecture-design-system',
    title: 'Architecture Front-End & Design System',
    tasks: [
      {
        title: "Absence du Bouton 'Accueil' dans le Header",
        status: 'Majeur',
        defect: "Le header principal du site n'a pas de lien 'Accueil' clairement identifié, forçant les utilisateurs à cliquer sur le logo pour revenir à la page principale. C'est une mauvaise pratique UX.",
        action: "Ajouter un lien texte 'Accueil' comme premier élément du menu de navigation principal pour un fil d'ariane cohérent et une navigation intuitive.",
        icon: Home,
      },
      {
        title: 'Typographie & Icônes SVG (Standard WordPress)',
        status: 'Majeur',
        defect: 'Police datée et utilisation probable d\'icônes lourdes (PNG ou FontAwesome complet) qui ralentissent le site.',
        action: 'Déploiement d\'une police Google asynchrone (Inter/Poppins). Pour l\'iconographie, bannir les images raster. Implémenter des icônes au format SVG inline (type Lucide, Heroicons ou SVG personnalisés) permettant des changements de couleurs (fill/stroke) au survol CSS.',
        icon: Type,
      },
      {
        title: 'Navigation à Facettes (AJAX)',
        status: 'Bloquant',
        defect: 'Le filtrage recharge la page entière.',
        action: 'Filtrage asynchrone sans rechargement de page pour la puissance, capacité, stock.',
        icon: Filter,
      },
      {
        title: 'Pages Intermédiaires (Silos)',
        status: 'Bloquant',
        defect: 'Cliquer sur une catégorie mère affiche un mur de produits en vrac.',
        action: 'Les catégories mères doivent lister des tuiles de sous-catégories avant d\'afficher les produits.',
        icon: Columns,
      },
    ],
  },
  {
    id: 'ui-conversion-engine',
    title: 'UI & Moteur de Conversion',
    tasks: [
      {
        title: 'Bouton Flottant WhatsApp (Persistant & Dynamique)',
        status: 'Bloquant',
        defect: 'Absence de CTA direct et rapide pour joindre les commerciaux. L\'utilisation du vert WhatsApp classique casse la charte graphique.',
        action: 'Créer un bouton flottant (FAB) persistant en bas de l\'écran avec le logo WhatsApp + le texte "Demander un devis". Règles UI : La couleur de fond du bouton doit être le Bleu Corporate de Central Équipements, pas le vert WhatsApp. Logique Conditionnelle (PHP/JS) : Le clic pointe vers wa.me/221762237440?text=. SI l\'utilisateur est sur une page produit (is_product()), le message pré-rempli doit être : "Bonjour, je souhaite un devis pour : [Nom du Produit] - [URL]". SINON (Accueil, À propos, Catégories), le message doit être : "Bonjour Central Équipements, j\'aimerais échanger avec un conseiller concernant un projet d\'équipement."',
        icon: MessageCircle,
      },
      {
        title: 'Bouton "Demander un Devis" dans la Buy-Box',
        status: 'Bloquant',
        defect: 'Le bouton "Acheter" inadapté aux projets lourds.',
        action: 'Dans la fiche produit (à côté de la quantité), remplacer/compléter l\'ajout au panier par un bouton ouvrant un formulaire lié à la référence du produit.',
        icon: FileText,
      },
      {
        title: 'Vidéos Embarquées',
        status: 'Majeur',
        defect: 'Impossible de montrer les machines en action.',
        action: 'Galerie produit acceptant les Iframes YouTube/Vimeo avec chargement différé.',
        icon: Video,
      },
    ],
  },
  {
    id: 'seo-perf',
    title: 'SEO Technique & Web Perf',
    tasks: [
      {
        title: 'Schema.org (JSON-LD)',
        status: 'Bloquant',
        defect: 'Google n\'indexe pas les prix et stocks.',
        action: 'Injection du Schema Product sur le catalogue et LocalBusiness pour les showrooms.',
        icon: Code,
      },
      {
        title: 'Compression WebP & Lazy Loading',
        status: 'Majeur',
        defect: 'Images trop lourdes.',
        action: 'Conversion automatique des médias en `.WebP` et `loading="lazy"` sous la flottaison.',
        icon: Minimize2,
      },
      {
        title: 'Balisage Titres H1/H2',
        status: 'Majeur',
        defect: 'Titres non optimisés SEO.',
        action: 'H1 Accueil = "Équipement Professionnel CHR & Transformation Agricole au Sénégal". Les noms de produits en grille doivent être des H2 ou H3.',
        icon: Heading1,
      },
    ],
  },
  {
    id: 'corporate',
    title: 'Contenu Corporate : Page À Propos',
    tasks: [
      {
        title: 'Historique Animé',
        status: 'Majeur',
        defect: 'L\'histoire de l\'entreprise est un texte basique.',
        action: 'Transformer en une Timeline (frise chronologique) verticale ou horizontale animée au scroll. Les points s\'illuminent au passage de l\'utilisateur.',
        icon: Clock,
      },
      {
        title: 'Méthodologie Visuelle',
        status: 'Majeur',
        defect: 'Étapes de travail trop textuelles.',
        action: 'Remplacer par des blocs numérotés (1. Audit, 2. Installation, 3. Formation, 4. SAV) avec un texte percutant et des micro-animations SVG au survol.',
        icon: Workflow,
      },
      {
        title: 'Services Interactifs',
        status: 'Majeur',
        defect: 'Section services statique.',
        action: 'Présenter les services sous forme de "Cartes interactives". Au survol, la carte se retourne (Flip) ou le texte glisse vers le haut pour révéler les détails.',
        icon: FlipHorizontal,
      },
      {
        title: 'Refonte de la FAQ B2B',
        status: 'Bloquant',
        defect: 'Textes actuels trop génériques.',
        action: 'Remplacer par un accordéon dynamique intégrant les 6 textes enrichis suivants (copie exacte requise) :',
        icon: HelpCircle,
        faq: [
          { question: 'Types d\'équipements', answer: 'Nous équipons le secteur HORECA et l\'industrie agroalimentaire. Notre catalogue est segmenté entre la Cuisine Pro et la Transformation pour répondre aux normes industrielles de chaque métier.' },
          { question: 'Projets clés en main', answer: 'Absolument. De l\'audit de vos besoins à l\'installation sur site, nous livrons des projets complets. Notre équipe gère le raccordement, la mise en service et forme votre personnel.' },
          { question: 'Devis personnalisés', answer: 'Oui, la réactivité est notre force. Cliquez sur \'Demander un devis\' sur nos produits pour recevoir une facture proforma officielle sous 24 à 48 heures ouvrées.' },
          { question: 'SAV & Pannes', answer: 'C\'est notre atout majeur. Nous garantissons pièces et main-d\'œuvre avec un stock local à Dakar (Pikine/Keur Massar). Nos techniciens interviennent sur site pour sécuriser votre production.' },
          { question: 'Livraison nationale', answer: 'Oui, nous couvrons le Sénégal via notre réseau logistique sécurisé. Nous gérons également l\'expédition de lignes complexes pour nos clients en Afrique de l\'Ouest.' },
          { question: 'Visites Showroom', answer: 'Oui. Nous vous accueillons sur rendez-vous dans nos showrooms pour des démonstrations techniques en conditions réelles avant tout investissement.' },
        ],
      },
    ],
  },
];

interface Task {
  title: string;
  status: string;
  defect: string;
  action: string;
  icon: FC<LucideProps>;
  faq?: {
    question: string;
    answer: string;
  }[];
}

const TaskCard: FC<{ task: Task }> = ({ task }) => {
  const statusColor = task.status === 'Bloquant' ? 'bg-red-500' : task.status === 'Majeur' ? 'bg-orange-500' : 'bg-blue-500';
  return (
    <AccordionItem value={task.title}>
      <Card className="overflow-hidden transition-all hover:shadow-lg border border-slate-200 shadow-sm">
        <AccordionTrigger className="cursor-pointer p-6 text-left">
          <div className="flex w-full items-start justify-between gap-4">
            <span className="text-lg font-semibold">{task.title}</span>
            <div
              className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium text-white ${statusColor}`}>
              {task.status}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div>
              <h4 className="font-semibold text-slate-600">Défaut constaté :</h4>
              <p className="mt-1 text-slate-500">{task.defect}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-600">Optimisation fonctionnelle requise :</h4>
              <p className="mt-1 text-slate-500">{task.action}</p>
            </div>
                                                <div className="mt-4">
              <img
                src={`https://picsum.photos/seed/${encodeURIComponent(task.title)}/600/400`}
                alt={`Illustration for ${task.title}`}
                className="rounded-lg border border-slate-200"
              />
            </div>
            {task.faq && (
              <div className="mt-4 space-y-4">
                <h5 className="font-semibold text-slate-600">FAQ B2B :</h5>
                <Accordion type="multiple" className="space-y-2">
                  {task.faq.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left text-sm font-semibold text-slate-600 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 text-slate-500">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
};





const handleExportXLS = () => {
  const header = ['Section', 'Titre', 'Statut', 'Défaut', 'Action Requise'];
  const rows = sections.flatMap(section => 
    section.tasks.map(task => [
      section.title,
      task.title,
      task.status,
      task.defect,
      task.action
    ])
  );

  const worksheet = XLSX.utils.aoa_to_sheet([header, ...rows]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Audit Technique');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

  saveAs(blob, 'audit-technique-centralequipements.xlsx');
};

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl">
            Cahier des Charges V2 - centralequipements.com
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600 md:text-lg">
            Audit unifié : UX, Conversion, SEO et Structure de Page. Cliquez sur les cartes pour voir le détail technique.
          </p>
        </header>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {kpis.map((kpi) => (
            <a href={kpi.href} key={kpi.label}>
              <Card className="p-6 transition-all hover:scale-[1.02] hover:shadow-xl border border-slate-200 shadow-sm">
                <CardContent className="flex items-center gap-4 p-0">
                  <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
                  <div>
                    <div className={`text-3xl font-bold ${kpi.color}`}>{kpi.value}</div>
                    <p className="text-sm font-medium text-slate-600">{kpi.label}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {sections.map((section) => (
          <section id={section.id} key={section.id} className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">{section.title}</h2>
            <Accordion type="multiple" className="space-y-4">
              {section.tasks.map((task) => (
                <TaskCard key={task.title} task={task} />
              ))}
            </Accordion>
          </section>
        ))}
      </div>

      <footer className="sticky bottom-0 mt-12 border-t border-slate-200 bg-white/80 py-4 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-sm font-semibold text-slate-700">
            Déploiement en production conditionné à la validation de ces critères UX/UI et fonctionnels.
          </p>
          <div className="flex items-center gap-4">
            <Button onClick={handleExportXLS} variant="outline">Export to XLS</Button>
            <Button>Accuser réception de la feuille de route</Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
