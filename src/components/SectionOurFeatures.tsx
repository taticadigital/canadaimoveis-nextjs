import rightImgPng from '@/images/our-features.png'
import { Badge } from '@/shared/Badge'
import { Button } from '@/shared/Button'
import { Heading } from '@/shared/Heading'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface Props {
  className?: string
  rightImg?: StaticImageData
  type?: 'type1' | 'type2'
  subHeading?: string
  heading?: string
  listItems?: {
    badge: string
    badgeColor?: 'red' | 'green' | 'blue'
    title: string
    description: string
  }[]
  buttonText?: string
  buttonHref?: string
}

const SectionOurFeatures: FC<Props> = ({
  className,
  rightImg = rightImgPng,
  type = 'type1',
  subHeading = 'Sobre nós',
  heading = 'Canadá+ Empreendimentos',
  listItems = [
    {
      badge: 'Lançamentos',
      badgeColor: 'blue',
      title: 'Novos empreendimentos',
      description: 'Descubra os mais recentes lançamentos imobiliários com as melhores localizações e condições de pagamento',
    },
    {
      badge: 'Latitude18',
      badgeColor: 'green',
      title: 'Latitude18 - Seu novo lar',
      description: 'Conheça o Latitude18, um empreendimento exclusivo com acabamentos de alto padrão e infraestrutura completa',
    },
    {
      badge: 'Experiência',
      badgeColor: 'red',
      title: '45 anos de tradição',
      description: 'Há 45 anos aproximando você do seu próximo lar com confiança, qualidade e compromisso',
    },
  ],
  buttonText = 'Saiba mais',
  buttonHref = '#',
}) => {
  return (
    <div
      className={clsx(
        'relative flex flex-col items-center',
        className,
        type === 'type1' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      )}
    >
      <div className="grow">
        <Image src={rightImg} alt="Features" sizes="(max-width: 1024px) 100vw, 50vw" priority />
      </div>
      <div className={`mt-10 max-w-2xl shrink-0 lg:mt-0 lg:w-2/5 ${type === 'type1' ? 'lg:ps-16' : 'lg:pe-16'}`}>
        <span className="text-sm tracking-widest text-gray-400 uppercase">{subHeading}</span>
        <Heading className="mt-4">{heading}</Heading>

        <ul className="mt-16 flex flex-col items-start gap-y-10">
          {listItems.map((item, index) => (
            <li className="flex flex-col items-start gap-y-4" key={index}>
              <Badge color={item.badgeColor}>{item.badge}</Badge>
              <span className="block text-xl font-semibold">{item.title}</span>
              <span className="block text-neutral-500 dark:text-neutral-400">{item.description}</span>
            </li>
          ))}
        </ul>

        {buttonText && (
          <div className="mt-10">
            <Button href={buttonHref} color="primary">
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionOurFeatures
