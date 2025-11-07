import { Metadata } from 'next'
import BackgroundSection from '@/components/BackgroundSection'

export const metadata: Metadata = {
  title: 'Central de Atendimento | Canadá Imóveis',
  description: 'Entre em contato com nossa equipe de atendimento para tirar suas dúvidas.',
}

export default function Page() {
  const contatos = [
    {
      tipo: 'Telefone',
      valor: '(11) 1234-5678',
      icone: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      horario: 'Segunda a Sexta, das 9h às 18h',
    },
    {
      tipo: 'WhatsApp',
      valor: '(11) 98765-4321',
      icone: (
        <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.498 14.382v-.002c-.301-.514-1.688-1.766-1.846-1.884-.145-.112-.253-.126-.362-.012-.11.115-.425.417-.52.502-.095.085-.188.096-.35.032-.16-.064-.68-.25-1.295-.798-1.2-1.056-1.97-2.42-2.2-2.826-.056-.1-.006-.156.042-.202.11-.11.29-.288.39-.383.1-.096.13-.16.195-.266.065-.106.032-.2-.016-.288-.048-.085-1.02-2.46-1.2-2.82-.16-.32-.4-.4-.6-.41-.15-.01-.33-.01-.51-.01-.18 0-.5.06-.76.3-.26.24-1 1-1 2.4s1 2.8 1.14 3c.14.2 2 3.2 4.84 4.5.68.3 1.22.5 1.64.64.6.2 1.14.17 1.56.1.48-.08 1.5-.6 1.7-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.46-.28z" />
          <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.8L0 24l6.3-1.6c1.7 1 3.7 1.6 5.7 1.6 6.6 0 12-5.4 12-12S18.6 0 12 0zm6.9 17.3c-.2.5-.9.9-1.5 1.1-.4.1-.9.2-2.7-.5-1.5-.6-3.2-1.1-5.3-3.5-2-2.3-2.4-4.2-2.5-4.6-.1-.4 0-.8.2-1 .2-.2.5-.3.8-.3h.5c.2 0 .5.1.7.3.2.2.5.6.6.7.1.1.2.3.1.5-.1.2-.2.4-.4.5-.2.1-.4.3-.6.3-.2.1-.3.2-.2.4.2.5.7 1.1 1.3 1.7.9.9 1.7 1.2 2.1 1.3.1 0 .2.1.3.1.1 0 .2 0 .3-.1.1-.1.3-.3.3-.5s0-.4-.1-.5c-.1-.1-.5-.5-.6-.7-.2-.2-.2-.3-.1-.5.1-.1.2-.2.3-.3.1-.1.2-.1.3-.1.1 0 .2 0 .3.1l1.1.5c.1 0 .2.1.3.1.1 0 .2 0 .3-.1.1-.1.2-.1.3-.2.6-.6.8-1.3.6-1.9-.1-.3-.3-.5-.5-.7-.2-.2-.4-.3-.6-.4h-.5c-.1 0-.3 0-.4.1-.2.1-.4.2-.5.4-.2.2-.5.6-.6.7-.1.1-.2.1-.3.1-.1 0-.2 0-.3-.1l-.1-.1c-.1-.1-.3-.3-.5-.4-.2-.1-.4-.2-.6-.2-.2 0-.4 0-.6.1-.2.1-.5.2-.7.4-.2.2-.5.5-.7.7-.4.4-.8 1-.8 1.6 0 .6.2 1.1.4 1.5l.1.1c.6 1.1 1.3 1.9 2.3 2.5.4.2.8.4 1.2.6.2.1.4.1.6.1.4 0 .8-.1 1.1-.3.4-.2.7-.5 1-.8.1-.1.2-.3.3-.4.1-.2.1-.5 0-.7z" />
        </svg>
      ),
      horario: 'Atendimento 24h por dia',
    },
    {
      tipo: 'E-mail',
      valor: 'atendimento@canadaimoveis.com.br',
      icone: (
        <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      horario: 'Resposta em até 24h úteis',
    },
  ]

  const perguntasFrequentes = [
    {
      pergunta: 'Como faço para agendar uma visita a um imóvel?',
      resposta: 'Você pode agendar uma visita diretamente pelo site, clicando no botão "Agendar Visita" na página do imóvel desejado, ou entrando em contato com nossa central de atendimento.'
    },
    {
      pergunta: 'Quais documentos são necessários para alugar um imóvel?',
      resposta: 'Geralmente são solicitados documentos como RG, CPF, comprovante de renda, comprovante de residência e fiador ou seguro fiança. A documentação pode variar de acordo com o imóvel e a forma de pagamento.'
    },
    {
      pergunta: 'Como faço para anunciar meu imóvel?',
      resposta: 'Você pode anunciar seu imóvel preenchendo o formulário em nossa seção "Anunciar Imóvel" ou entrando em contato diretamente com um de nossos corretores.'
    },
    {
      pergunta: 'Como funciona o processo de financiamento?',
      resposta: 'Nossa equipe especializada pode te auxiliar em todo o processo de financiamento, desde a simulação até a aprovação do crédito junto aos bancos parceiros. Entre em contato para mais informações.'
    },
  ]

  return (
    <div className="nc-PageSupport">
      {/* HEADER */}
      <div className="w-full px-4">
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3 overflow-hidden">
          <BackgroundSection className="bg-neutral-100 dark:bg-neutral-800" />
          <div className="container relative h-full">
            <div className="flex h-full items-center py-14 lg:py-20">
              <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-neutral-100">
                Central de Atendimento
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* CANAIS DE ATENDIMENTO */}
      <div className="container py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Fale Conosco</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Estamos à disposição para tirar suas dúvidas e ajudar no que for preciso. 
            Escolha a melhor forma de entrar em contato conosco.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contatos.map((contato, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {contato.icone}
              </div>
              <h3 className="text-xl font-semibold mb-2">{contato.tipo}</h3>
              <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                {contato.valor}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{contato.horario}</p>
            </div>
          ))}
        </div>
        
        {/* FORMULÁRIO DE CONTATO */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Envie sua mensagem</h2>
          
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
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                Assunto
              </label>
              <select className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white">
                <option>Selecione um assunto</option>
                <option>Dúvidas sobre imóveis</option>
                <option>Agendamento de visita</option>
                <option>Anúncio de imóvel</option>
                <option>Financiamento</option>
                <option>Outros assuntos</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                Mensagem *
              </label>
              <textarea 
                rows={4}
                required
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
        
        {/* PERGUNTAS FREQUENTES */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Perguntas Frequentes</h2>
          
          <div className="space-y-4">
            {perguntasFrequentes.map((item, index) => (
              <div key={index} className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left font-medium text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex justify-between items-center"
                  aria-expanded="false"
                >
                  <span>{item.pergunta}</span>
                  <svg className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 py-4 bg-white dark:bg-neutral-800 hidden">
                  <p className="text-neutral-600 dark:text-neutral-300">{item.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
