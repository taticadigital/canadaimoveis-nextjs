import { Metadata } from 'next'
import BackgroundSection from '@/components/BackgroundSection'

export const metadata: Metadata = {
  title: 'Serviços | Canadá Imóveis',
  description: 'Conheça todos os serviços oferecidos pela Canadá Imóveis.',
}

export default function Page() {
  const servicos = [
    {
      titulo: 'Compra e Venda',
      descricao: 'Auxiliamos na compra e venda do seu imóvel com segurança e transparência.',
    },
    {
      titulo: 'Locação',
      descricao: 'Encontre o imóvel ideal para locação ou coloque o seu para alugar.',
    },
    {
      titulo: 'Avaliação de Imóveis',
      descricao: 'Avaliação profissional para garantir o melhor preço para o seu imóvel.',
    },
    {
      titulo: 'Financiamento',
      descricao: 'Auxílio na obtenção de financiamento habitacional com as melhores taxas.',
    },
    {
      titulo: 'Consultoria Imobiliária',
      descricao: 'Assessoria especializada para investidores e clientes em geral.',
    },
  ]

  return (
    <div className="nc-PageServices">
      {/* HEADER */}
      <div className="w-full px-4">
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3 overflow-hidden">
          <BackgroundSection className="bg-neutral-100 dark:bg-neutral-800" />
          <div className="container relative h-full">
            <div className="flex h-full items-center py-14 lg:py-20">
              <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-neutral-100">
                Nossos Serviços
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* SERVIÇOS */}
      <div className="container py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, index) => (
            <div key={index} className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{servico.titulo}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
