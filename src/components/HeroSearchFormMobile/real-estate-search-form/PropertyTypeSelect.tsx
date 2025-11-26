'use client'

import { Checkbox, CheckboxField, CheckboxGroup } from '@/shared/Checkbox'
import { Description, Label } from '@/shared/fieldset'
import { PropertyType } from '@/type'
import { FC, useState } from 'react'

const defaultPropertyTypes: PropertyType[] = [
  {
    name: 'Casa',
    value: 'casa',
    description: 'Casa residencial',
  },
  {
    name: 'Apartamento',
    value: 'apartamento',
    description: 'Apartamento em edifício',
  },
  {
    name: 'Casa de Condomínio',
    value: 'casa_condominio',
    description: 'Casa em condomínio fechado',
  },
  {
    name: 'Sobrado',
    value: 'sobrado',
    description: 'Casa de dois ou mais pavimentos',
  },
  {
    name: 'Kitnet',
    value: 'kitnet',
    description: 'Apartamento compacto',
  },
  {
    name: 'Cobertura',
    value: 'cobertura',
    description: 'Apartamento no último andar',
  },
  {
    name: 'Terreno',
    value: 'terreno',
    description: 'Terreno para construção',
  },
  {
    name: 'Studio',
    value: 'studio',
    description: 'Apartamento tipo studio',
  },
]

interface Props {
  onChange?: (data: string[]) => void
  propertyTypes?: PropertyType[]
}

const PropertyTypeSelect: FC<Props> = ({ onChange, propertyTypes = defaultPropertyTypes }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([propertyTypes[0].name])

  return (
    <>
      <h3 className="block text-xl font-semibold sm:text-2xl">Property types</h3>
      <CheckboxGroup className="mt-7">
        {propertyTypes.map((item) => (
          <CheckboxField key={item.value}>
            <Checkbox
              name="property_type"
              value={item.value}
              checked={selectedTypes.includes(item.name)}
              onChange={(e) => {
                const newState = e ? [...selectedTypes, item.name] : selectedTypes.filter((type) => type !== item.name)
                setSelectedTypes(newState)
                if (onChange) {
                  onChange(newState)
                }
              }}
            />
            <Label>{item.name}</Label>
            <Description>{item.description}</Description>
          </CheckboxField>
        ))}
      </CheckboxGroup>
    </>
  )
}

export default PropertyTypeSelect
