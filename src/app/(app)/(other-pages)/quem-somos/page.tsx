import { Metadata } from 'next'
import BackgroundSection from '@/components/BackgroundSection'

export const metadata: Metadata = {
  title: 'Quem Somos | Canadá Imóveis',
  description: 'Conheça mais sobre a Canadá Imóveis e nossa trajetória no mercado imobiliário.',
}

export default function Page() {
  return (
    <div className="nc-PageAbout">
      {/* HEADER */}
      <div className="w-full px-4">
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3 overflow-hidden">
          <BackgroundSection className="bg-neutral-100 dark:bg-neutral-800" />
          <div className="container relative h-full">
            <div className="flex h-full items-center py-14 lg:py-20">
              <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-neutral-100">
                Quem Somos
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* CONTEÚDO */}
      <div className="container py-16 lg:py-24 space-y-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Nossa História</h2>
          <div className="mt-4 text-neutral-600 dark:text-neutral-300">
            <p className="text-lg">
              A Canadá Imóveis é uma empresa sólida no mercado imobiliário, comprometida em oferecer os melhores imóveis e serviços para nossos clientes. Nossa trajetória é marcada por profissionalismo, ética e dedicação.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Oferecer soluções imobiliárias personalizadas, superando as expectativas de nossos clientes através de um atendimento diferenciado e de excelência.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Ética e Transparência</li>
              <li>• Comprometimento com os resultados</li>
              <li>• Inovação e Tecnologia</li>
              <li>• Valorização das pessoas</li>
              <li>• Excelência no atendimento</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
