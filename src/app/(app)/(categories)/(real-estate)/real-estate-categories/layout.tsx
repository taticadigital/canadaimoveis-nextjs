import { ApplicationLayout } from '@/app/(app)/application-layout'
import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import { getPropertyTypeCategories } from '@/data/categories'
import Heading from '@/shared/Heading'
import { ReactNode } from 'react'
import { TCategory } from '@/data/categories'

const Layout = async ({ children }: { children: ReactNode }) => {
  const allPropertyTypes = await getPropertyTypeCategories()
  
  // Filter and map featured categories: Apartamento, Casa, Sobrado, and create Imóveis Comerciais
  const featuredCategories: TCategory[] = [
    // Apartamentos em Destaque
    {
      ...allPropertyTypes.find(cat => cat.handle === 'apartamento')!,
      name: 'Apartamentos em Destaque',
    },
    // Casas em Destaque
    {
      ...allPropertyTypes.find(cat => cat.handle === 'casa')!,
      name: 'Casas em Destaque',
    },
    // Sobrados em Destaque
    {
      ...allPropertyTypes.find(cat => cat.handle === 'sobrado')!,
      name: 'Sobrados em Destaque',
    },
    // Imóveis Comerciais em Destaque (using Salão Comercial as base but with better image)
    {
      id: 'property-type://comercial-destaque',
      name: 'Imóveis Comerciais em Destaque',
      handle: 'imoveis-comerciais',
      href: '/real-estate-categories/imoveis-comerciais',
      count: 4500,
      thumbnail: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      coverImage: allPropertyTypes.find(cat => cat.handle === 'salao-comercial')?.coverImage || {
        src: '',
        width: 0,
        height: 0,
      },
      description: 'Imóveis comerciais para seu negócio',
      region: 'Brasil',
    },
  ].filter(Boolean) as TCategory[]

  return (
    <ApplicationLayout>
      <BgGlassmorphism />

      {children}

      <div className="container">
        <div className="relative py-16 lg:py-20">
          <BackgroundSection />
          <Heading subheading="Descubra nossas melhores opções de imóveis">Veja nossos imóveis em Destaque</Heading>
          <SectionSliderNewCategories
            itemClassName="w-[17rem] lg:w-1/3 xl:w-1/4"
            categories={featuredCategories}
            categoryCardType="card5"
          />
        </div>
        <SectionSubscribe2 className="py-24 lg:py-32" />
      </div>
    </ApplicationLayout>
  )
}

export default Layout
