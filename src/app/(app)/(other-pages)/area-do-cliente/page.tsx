import { Metadata } from 'next'
import BackgroundSection from '@/components/BackgroundSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Área do Cliente | Canadá Imóveis',
  description: 'Acesse sua conta e gerencie seus imóveis, favoritos e documentos.',
}

export default function Page() {
  const servicos = [
    {
      titulo: 'Meus Imóveis',
      descricao: 'Acompanhe o andamento dos seus negócios imobiliários.',
      icone: (
        <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: '/conta/meus-imoveis',
    },
    {
      titulo: 'Favoritos',
      descricao: 'Acesse seus imóveis favoritos e continue de onde parou.',
      icone: (
        <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: '/conta/favoritos',
    },
    {
      titulo: 'Documentos',
      descricao: 'Acesse e baixe seus documentos e contratos.',
      icone: (
        <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/conta/documentos',
    },
    {
      titulo: '2ª Via de Boleto',
      descricao: 'Emita a segunda via dos seus boletos de forma rápida e segura.',
      icone: (
        <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/segunda-via-boleto',
    },
    {
      titulo: 'Dados Cadastrais',
      descricao: 'Atualize seus dados pessoais e de contato.',
      icone: (
        <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      link: '/conta/dados-cadastrais',
    },
    {
      titulo: 'Alterar Senha',
      descricao: 'Atualize sua senha de acesso ao portal.',
      icone: (
        <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      link: '/conta/alterar-senha',
    },
  ]

  return (
    <div className="nc-PageClientArea">
      {/* HEADER */}
      <div className="w-full px-4">
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3 overflow-hidden">
          <BackgroundSection className="bg-neutral-100 dark:bg-neutral-800" />
          <div className="container relative h-full">
            <div className="flex h-full items-center py-14 lg:py-20">
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-neutral-100">
                  Área do Cliente
                </h1>
                <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
                  Gerencie seus imóveis, documentos e informações pessoais em um só lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CONTEÚDO PRINCIPAL */}
      <div className="container py-16 lg:py-24">
        {/* MENSAGEM DE BOAS-VINDAS */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Bem-vindo(a), Cliente</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mt-1">
                Acesse seus dados e acompanhe seus negócios imobiliários.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/sair"
                className="px-6 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                Sair
              </Link>
            </div>
          </div>
        </div>
        
        {/* SERVIÇOS */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Meus Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, index) => (
              <Link 
                key={index} 
                href={servico.link}
                className="group bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-transparent hover:border-primary-500"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {servico.icone}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {servico.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {servico.descricao}
                    </p>
                    <div className="mt-3 text-sm text-primary-600 dark:text-primary-400 flex items-center">
                      Acessar
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* MENSAGEM DE ATENDIMENTO */}
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 md:p-8 border border-primary-100 dark:border-primary-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="md:max-w-2xl">
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">Precisa de ajuda?</h3>
              <p className="text-primary-700 dark:text-primary-300">
                Nossa equipe está pronta para te auxiliar com qualquer dúvida ou problema que você possa ter.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/central-atendimento"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Falar com atendente
                <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
