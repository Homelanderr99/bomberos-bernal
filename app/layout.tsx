import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Bomberos Voluntarios - Campaña de Reclutamiento 2026',
    description: 'Únete al cuerpo de bomberos voluntarios. Campaña de reclutamiento 2026. Valor, sacrificio y abnegación.',
    openGraph: {
        title: 'Bomberos Voluntarios - Reclutamiento 2026',
        description: 'Únete a nuestra fuerza. Sé parte de la diferencia.',
        type: 'website',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
