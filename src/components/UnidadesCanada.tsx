'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface UnidadeProps {
  name: string
  imageUrl: string
  description: string
}

const UnidadeCard: FC<UnidadeProps> = ({ name, imageUrl, description }) => {
  return (
    <div className="group flex flex-col">
      <div className="aspect-w-5 relative h-0 w-full shrink-0 overflow-hidden rounded-2xl aspect-h-5">
        <Image
          src={imageUrl}
          className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          alt={name}
          sizes="(max-width: 400px) 100vw, 400px"
        />
        <span className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></span>
      </div>
      <div className="mt-4 px-2 text-center">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{name}</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  )
}

const UnidadesCanada: FC = () => {
  const unidades = [
    {
      id: 1,
      name: 'Matriz Centro',
      imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nossa matriz localizada no coração da cidade',
    },
    {
      id: 2,
      name: 'Unidade Vila São Francisco',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Conforto e qualidade em um dos bairros mais tradicionais',
    },
    {
      id: 3,
      name: 'Unidade Assis – Vila Ayrosa',
      imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Excelente localização com ampla estrutura',
    },
    {
      id: 4,
      name: 'Unidade Caravana',
      imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modernidade e conforto em um ambiente acolhedor',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {unidades.map((unidade) => (
        <UnidadeCard
          key={unidade.id}
          name={unidade.name}
          imageUrl={unidade.imageUrl}
          description={unidade.description}
        />
      ))}
    </div>
  )
}

export default UnidadesCanada
