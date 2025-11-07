import { Metadata } from 'next'
import BackgroundSection from '@/components/BackgroundSection'

export const metadata: Metadata = {
  title: 'Financiamento | Canadá Imóveis',
  description: 'Financie seu imóvel com as melhores taxas e condições do mercado.',
}

export default function Page() {
  return (
    <div className="nc-PageFinancing">
      {/* HEADER */}
      <div className="w-full px-4">
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3 overflow-hidden">
          <BackgroundSection className="bg-neutral-100 dark:bg-neutral-800" />
          <div className="container relative h-full">
            <div className="flex h-full items-center py-14 lg:py-20">
              <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-neutral-100">
                Financiamento Imobiliário
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* CONTEÚDO */}
      <div className="container py-16 lg:py-24 space-y-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Financie seu imóvel com a gente</h2>
          <div className="mt-4 text-neutral-600 dark:text-neutral-300">
            <p className="text-lg">
              Oferecemos as melhores condições de financiamento para você realizar o sonho da casa própria.
              Trabalhamos com os principais bancos e instituições financeiras do mercado.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Vantagens</h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Taxas especiais</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Atendimento personalizado</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Análise de crédito rápida</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Parcelas que cabem no seu bolso</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Documentação necessária</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Documento de identidade (RG e CPF)</li>
              <li>• Comprovante de residência</li>
              <li>• Comprovante de renda</li>
              <li>• Documentação do imóvel</li>
            </ul>
            <div className="mt-6">
              <button className="bg-primary-6000 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Simular Financiamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
