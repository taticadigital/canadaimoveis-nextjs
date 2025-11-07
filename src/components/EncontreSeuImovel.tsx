import React from 'react';
import { HomeIcon, BuildingOffice2Icon, HomeModernIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const EncontreSeuImovel = () => {
  const categories = [
    {
      name: 'Comprar',
      href: '/imoveis/venda',
      icon: HomeIcon,
      description: 'Encontre o imóvel dos seus sonhos para compra',
      count: '1,234 imóveis',
    },
    {
      name: 'Alugar',
      href: '/imoveis/aluguel',
      icon: HomeModernIcon,
      description: 'Descrava os melhores imóveis para aluguel',
      count: '876 imóveis',
    },
    {
      name: 'Lançamentos',
      href: '/lancamentos',
      icon: BuildingOffice2Icon,
      description: 'Conheça nossos lançamentos imobiliários',
      count: '45 empreendimentos',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Encontre seu imóvel</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Descubra os melhores imóveis em Osasco e região para compra, venda e locação.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative flex flex-col bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="ml-4 text-lg font-medium text-neutral-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 flex-1">
                {category.description}
              </p>
              <div className="mt-4 text-sm text-primary-600 dark:text-primary-400 font-medium">
                {category.count} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EncontreSeuImovel;
