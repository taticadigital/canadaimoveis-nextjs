import { Metadata } from 'next'
import BackgroundSection from '@/components/BackgroundSection'

export const metadata: Metadata = {
  title: 'Trabalhe Conosco | Canadá Imóveis',
  description: 'Faça parte do nosso time de colaboradores e construa uma carreira de sucesso na Canadá Imóveis.',
}

export default function Page() {
  const beneficios = [
    'Salário compatível com o mercado',
    'Comissões atrativas',
    'Plano de carreira estruturado',
    'Treinamentos e capacitações',
    'Ambiente de trabalho descontraído',
    'Oportunidade de crescimento',
    'Benefícios flexíveis',
    'Participação nos lucros',
  ]

  const vagas = [
    {
      cargo: 'Corretor de Imóveis',
      tipo: 'Tempo integral',
      localizacao: 'São Paulo, SP',
      descricao: 'Atuar com vendas e locação de imóveis, prospectando clientes e fechando negócios.',
    },
    {
      cargo: 'Analista de Crédito Imobiliário',
      tipo: 'Tempo integral',
      localizacao: 'São Paulo, SP',
      descricao: 'Analisar propostas de financiamento imobiliário e documentação dos clientes.',
    },
    {
      cargo: 'Estagiário de Negócios Imobiliários',
      tipo: 'Estágio',
      localizacao: 'São Paulo, SP',
      descricao: 'Auxiliar o time de vendas e atendimento ao cliente em todas as etapas do processo.',
    },
  ]

  return (
    <div className="nc-PageCareers">
      {/* HEADER */}
      <div className="w-full px-4">
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3 overflow-hidden">
          <BackgroundSection className="bg-neutral-100 dark:bg-neutral-800" />
          <div className="container relative h-full">
            <div className="flex h-full items-center py-14 lg:py-20">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-neutral-100 mb-4">
                  Trabalhe Conosco
                </h1>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                  Faça parte de uma das maiores e mais respeitadas imobiliárias do país. 
                  Construa uma carreira de sucesso com a gente!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* BENEFÍCIOS */}
      <div className="bg-neutral-50 dark:bg-neutral-900 py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Por que fazer parte do nosso time?</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Oferecemos um ambiente de trabalho desafiador, com oportunidades reais de crescimento e desenvolvimento profissional.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-800 dark:text-neutral-200">{beneficio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* VAGAS DISPONÍVEIS */}
      <div className="container py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Vagas Abertas</h2>
          
          <div className="space-y-6">
            {vagas.map((vaga, index) => (
              <div key={index} className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{vaga.cargo}</h3>
                      <div className="flex items-center mt-2 space-x-4">
                        <span className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {vaga.tipo}
                        </span>
                        <span className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {vaga.localizacao}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      Candidatar-se
                    </button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                    <p className="text-neutral-600 dark:text-neutral-300">{vaga.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Não encontrou uma vaga que combine com você?
            </p>
            <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-500 rounded-lg hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors">
              Cadastre seu currículo
            </button>
          </div>
        </div>
      </div>
      
      {/* FORMULÁRIO DE CANDIDATURA */}
      <div className="bg-neutral-50 dark:bg-neutral-900 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Envie seu currículo</h2>
            <p className="text-center text-neutral-600 dark:text-neutral-300 mb-8">
              Preencha o formulário abaixo para se candidatar a uma de nossas vagas.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                    Nome Completo *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                    E-mail *
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                    Telefone *
                  </label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                    Vaga de interesse *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                  >
                    <option value="">Selecione uma vaga</option>
                    {vagas.map((vaga, index) => (
                      <option key={index} value={vaga.cargo}>{vaga.cargo}</option>
                    ))}
                    <option value="outra">Outra (especifique no campo mensagem)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                  Mensagem (opcional)
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                  placeholder="Conte um pouco sobre você e suas experiências..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                  Anexar Currículo (PDF, DOC, DOCX) *
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-600 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-neutral-600 dark:text-neutral-300">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white dark:bg-neutral-800 rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none"
                      >
                        <span>Enviar arquivo</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" required />
                      </label>
                      <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      PDF, DOC, DOCX (até 5MB)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Enviar Candidatura
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
