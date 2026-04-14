export default function Experience() {
  const experiences = [
    {
      title: "Création de Contenu & Technique",
      role: "Freelance",
      description: "Conception de supports visuels, montage vidéo dynamique et optimisation de présence en ligne pour divers clients. Adaptation constante aux nouvelles tendances et outils IA.",
      year: "Présent",
    },
    {
      title: "Vente & Relation Client",
      role: "Conseiller Commercial",
      description: "Développement d'une écoute active et d'une approche orientée solution. Apprentissage essentiel de la persuasion et de l'adaptation face aux besoins précis des clients.",
      year: "Expérience Terrain",
    },
    {
      title: "Travail Manuel & Logistique",
      role: "Opérateur",
      description: "Une expérience formatrice sur le terrain. Acquisition d'une grande rigueur, d'une discipline de fer et d'une résilience qui me servent aujourd'hui dans chaque projet.",
      year: "Fondations",
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">Mon Expérience</h3>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            {"Mon parcours n'est pas linéaire. Il est forgé par la diversité de mes expériences, alliant discipline de fer, sens du contact et maîtrise des outils digitaux."}
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#121212] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:border-white/50 group-hover:bg-white/5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-xl">{exp.title}</h4>
                  <span className="text-xs font-medium tracking-wider text-[#a1a1aa] bg-white/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                    {exp.year}
                  </span>
                </div>
                <div className="text-sm text-white/70 mb-4 font-medium uppercase tracking-wide">{exp.role}</div>
                <p className="text-[#a1a1aa] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
