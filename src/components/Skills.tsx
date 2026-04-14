import { Film, PenTool, Share2, ShoppingBag, Sparkles, UserCheck } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Montage Vidéo", icon: <Film className="w-6 h-6 mb-4 text-white/80" /> },
    { name: "Design Graphique", icon: <PenTool className="w-6 h-6 mb-4 text-white/80" /> },
    { name: "Réseaux Sociaux", icon: <Share2 className="w-6 h-6 mb-4 text-white/80" /> },
    { name: "E-Commerce", icon: <ShoppingBag className="w-6 h-6 mb-4 text-white/80" /> },
    { name: "Outils IA", icon: <Sparkles className="w-6 h-6 mb-4 text-white/80" /> },
    { name: "Soft Skills", icon: <UserCheck className="w-6 h-6 mb-4 text-white/80" /> },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">
          Mes Compétences
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center p-6 rounded-3xl 
                         bg-white/5 backdrop-blur-md border border-white/10 
                         hover:border-white/20 transition-all duration-300
                         hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-medium tracking-wide text-[#a1a1aa] group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
