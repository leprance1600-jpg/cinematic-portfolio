export default function Projects() {
  const projects = [
    {
      title: "Campagne TikTok Réussie",
      category: "Réseaux Sociaux",
      description: "Création et gestion d'une série de vidéos courtes ayant généré 500k+ vues organiques en un mois.",
      image: "/images/tiktok_campaign_1776169541471.png",
    },
    {
      title: "Montage Documentaire",
      category: "Montage Vidéo",
      description: "Édition complète d'un mini-documentaire pour une marque locale avec étalonnage dynamique.",
      image: "/images/documentary_edit_1776169877982.png",
    },
    {
      title: "Lancement de Marque",
      category: "E-Commerce & Design",
      description: "Conception de visuels impactants et gestion de la boutique Shopify pour un créateur émergent.",
      image: "/images/brand_launch_1776170036685.png",
    },
    {
      title: "Rebranding Visuel",
      category: "Design Graphique",
      description: "Refonte de l'identité visuelle incluant chartes graphiques et templates réseaux sociaux avec outils IA.",
      image: "/images/visual_rebranding_1776170151832.png",
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center drop-shadow-lg">
          Selected Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-end p-6 md:p-8 h-80 md:h-96 rounded-3xl overflow-hidden
                         bg-white/5 border border-white/10 cursor-pointer
                         hover:border-white/20 transition-all duration-500
                         active:scale-[0.98] sm:active:scale-100
                         hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              {/* Cinematic gradient overlay & glassmorphism blur */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent backdrop-blur-[2px] md:backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">
                <span className="text-xs md:text-sm font-medium tracking-widest text-[#a1a1aa] uppercase mb-2 block drop-shadow-md">
                  {project.category}
                </span>
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3 drop-shadow-lg leading-snug">
                  {project.title}
                </h4>
                <p className="text-[#d4d4d8] text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
