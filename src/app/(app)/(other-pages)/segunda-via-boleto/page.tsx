import { Metadata } from 'next'
import BackgroundSection from '@/components/BackgroundSection'

export const metadata: Metadata = {
  title: '2ª Via de Boleto | Canadá Imóveis',
  description: 'Emita a segunda via do seu boleto de forma rápida e segura.',
}

export default function Page() {
  return (
    <div className="nc-PageSecondTicket">
      {/* HEADER */}
      <div className="w-full px-4">
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3 overflow-hidden">
          <BackgroundSection className="bg-neutral-100 dark:bg-neutral-800" />
          <div className="container relative h-full">
            <div className="flex h-full items-center py-14 lg:py-20">
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-neutral-100">
                  2ª Via de Boleto
                </h1>
                <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
                  Emita a segunda via do seu boleto de forma rápida e segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CONTEÚDO PRINCIPAL */}
      <div className="container py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Emitir 2ª Via do Boleto</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                    CPF/CNPJ do Titular *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Digite apenas números"
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                    Número do Contrato *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Número do contrato ou código do cliente"
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                    E-mail para envio *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="Seu e-mail para receber o boleto"
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Emitir 2ª Via do Boleto
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Dúvidas Frequentes</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">Em quanto tempo recebo o boleto por e-mail?</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      O boleto é enviado instantaneamente para o e-mail informado. Caso não encontre, verifique sua caixa de spam.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">Posso pagar o boleto em qualquer banco?</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      Sim, você pode pagar em qualquer banco, casa lotérica ou internet banking até a data de vencimento.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">O que fazer se o boleto estiver vencido?</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      Emita uma nova via com os juros e multa atualizados através deste mesmo sistema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800/50 px-6 py-4 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
                <p>Precisa de ajuda? Entre em contato com nossa central de atendimento</p>
                <a 
                  href="/central-atendimento" 
                  className="mt-2 sm:mt-0 text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Central de Atendimento
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
