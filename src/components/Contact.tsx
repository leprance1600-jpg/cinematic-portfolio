import { ArrowRight, Download, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
          Prêt à collaborer ?
        </h3>
        <p className="text-[#a1a1aa] text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          Que ce soit pour du montage vidéo, de la gestion de réseaux sociaux ou la création d'une identité visuelle forte, je suis là pour donner vie à vos idées.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:lepr1@proton.me"
            className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-transform duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Me contacter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
