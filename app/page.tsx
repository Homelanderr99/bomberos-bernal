'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Instagram, Phone, Facebook, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Placeholder content for Firefighter Recruitment
    // Using a placeholder YouTube video about firefighters (Official video or stock)
    const VIDEO_SRC = "https://www.youtube.com/watch?v=5UpLfUY5lRY"; 
    // Or a Google Drive link example: "https://drive.google.com/file/d/VIDEO_ID/preview"

    // Firefighter themed background (Fire Station / Cuartel)
    const BG_IMAGE = "https://images.unsplash.com/photo-1513159446162-54eb8bdaf265"; 
    // Firefighter themed poster (if video doesn't autoplay/load)
    const POSTER_IMAGE = "https://images.unsplash.com/photo-1555617778-02518510b9fa";

    // Logo of Bomberos Voluntarios de Bernal
    const LOGO_SRC = "https://drive.google.com/uc?export=view&id=1fJllf7knSUwpEoLRnUjbMTAJrKVi7TTs";

    const testimonials = [
        {
            quote: "Ser bombero voluntario me enseñó el verdadero significado de la comunidad. Cada salida es una oportunidad para ayudar a quien más lo necesita.",
            name: "Juan Pérez",
            designation: "Bombero Voluntario - 5 años de servicio",
            src: "https://drive.google.com/uc?export=view&id=14oSe2Lweatdyp4eFJpo4DeExol20jj2M"
        },
        {
            quote: "La capacitación constante y el trabajo en equipo son fundamentales. Aquí encontré una segunda familia dispuesta a darlo todo.",
            name: "María González",
            designation: "Suboficial - 10 años de servicio",
            src: "https://drive.google.com/uc?export=view&id=1gBcZwuH6jspb3pBCnhKXcu_0D_qsEL1t"
        },
        {
            quote: "No hay mayor satisfacción que saber que tu esfuerzo salvó una vida o protegió el hogar de alguien. Es un orgullo vestir este uniforme.",
            name: "Carlos Rodríguez",
            designation: "Oficial Principal - 15 años de servicio",
            src: "https://drive.google.com/uc?export=view&id=1ywHKQLf071E_f_wqHOF6STFkGYRAOh7F"
        },
    ];

    return (
        <main className="min-h-screen bg-neutral-900 text-white font-sans">
            <ScrollExpandMedia
                mediaType="video"
                mediaSrc={VIDEO_SRC}
                posterSrc={POSTER_IMAGE}
                bgImageSrc={BG_IMAGE}
                title="BOMBEROS VOLUNTARIOS DE BERNAL"
                date="CAMPAÑA 2026"
                scrollToExpand="Desliza para unirte"
                textBlend={false} // Better visibility on fire images without blend
            >
                <div className="flex flex-col items-center justify-center max-w-5xl mx-auto space-y-16">

                    <div className="space-y-8 text-center max-w-3xl flex flex-col items-center">
                        <div className="relative w-40 h-40 md:w-56 md:h-56 mb-4 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                            <Image
                                src={LOGO_SRC}
                                alt="Escudo Bomberos Voluntarios de Bernal"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-red-500 tracking-tight uppercase">
                            Únete a la Fuerza
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                            Ser bombero voluntario es más que un servicio, es una vocación. 
                            Únete a nuestro equipo y sé parte de la diferencia. 
                            <br />
                            <span className="font-semibold text-white">Valor, Sacrificio y Abnegación.</span>
                        </p>
                    </div>

                    <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />

                    {/* Contact Section */}
                    <div className="w-full flex flex-col items-center space-y-10">
                        <div className="text-center space-y-2">
                            <h3 className="text-3xl font-bold text-white">Contáctanos</h3>
                            <p className="text-gray-400">Estamos disponibles para responder tus dudas.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                            {/* WhatsApp */}
                            <a
                                href="https://www.whatsapp.com/channel/0029VacfSr3GZNCkO3lilr0N?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnuJwz1dzubQOnST9JA9A2Pkg0ZE6F2xIAd-VRHCKknUZWtiUXN14hYqng6Uo_aem_YtTN7Z4UyfCddK8VF9Zp1Q"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center space-y-4 p-8 rounded-xl bg-white/5 hover:bg-green-600/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-green-500/50 w-40 md:w-48"
                            >
                                <div className="p-4 rounded-full bg-green-600 group-hover:bg-green-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all">
                                    <Phone className="w-8 h-8 text-white fill-current" />
                                </div>
                                <span className="text-gray-200 group-hover:text-white font-bold tracking-wide">WhatsApp</span>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/bomberosdebernal/?hl=es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center space-y-4 p-8 rounded-xl bg-white/5 hover:bg-pink-600/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-pink-500/50 w-40 md:w-48"
                            >
                                <div className="p-4 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all">
                                    <Instagram className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-gray-200 group-hover:text-white font-bold tracking-wide">Instagram</span>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/CuerpoDeBomberosBernal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center space-y-4 p-8 rounded-xl bg-white/5 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-blue-500/50 w-40 md:w-48"
                            >
                                <div className="p-4 rounded-full bg-blue-600 group-hover:bg-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                                    <Facebook className="w-8 h-8 text-white fill-current" />
                                </div>
                                <span className="text-gray-200 group-hover:text-white font-bold tracking-wide">Facebook</span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:Incorporacionesbomberosbernal@gmail.com"
                                className="group flex flex-col items-center space-y-4 p-8 rounded-xl bg-white/5 hover:bg-red-600/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-red-500/50 w-40 md:w-48"
                            >
                                <div className="p-4 rounded-full bg-red-600 group-hover:bg-red-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-gray-200 group-hover:text-white font-bold tracking-wide">Correo</span>
                            </a>

                            {/* Google Maps */}
                            <a
                                href="https://maps.app.goo.gl/qGs4CfpFvNfApZ7w9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center space-y-4 p-8 rounded-xl bg-white/5 hover:bg-orange-600/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-orange-500/50 w-40 md:w-48"
                            >
                                <div className="p-4 rounded-full bg-orange-600 group-hover:bg-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-gray-200 group-hover:text-white font-bold tracking-wide">Ubicación</span>
                            </a>
                        </div>

                        <div className="max-w-2xl text-center bg-red-900/20 p-6 rounded-lg border border-red-500/20 mt-8 backdrop-blur-sm">
                            <h4 className="text-xl font-semibold text-red-400 mb-2">Requisitos Básicos</h4>
                            <ul className="text-left text-gray-300 space-y-2 list-disc list-inside">
                                <li>Ser mayor de 18 años.</li>
                                <li>Residir en la zona de cobertura.</li>
                                <li>No poseer antecedentes penales.</li>
                                <li>Aprobar el examen de aptitud física y psicológica.</li>
                            </ul>
                        </div>

                        <p className="text-gray-500 text-sm mt-12">
                            © 2026 Cuerpo de Bomberos Voluntarios. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </ScrollExpandMedia>
        </main>
    );
}
