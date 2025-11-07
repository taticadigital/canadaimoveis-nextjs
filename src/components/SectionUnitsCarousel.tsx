import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const units = [
  {
    id: 1,
    name: 'Unidade Matriz',
    address: 'Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP',
    phone: '(11) 1234-5678',
    image: '/images/units/matriz.jpg',
  },
  {
    id: 2,
    name: 'Unidade Vila São Francisco',
    address: 'R. da Paz, 123 - Vila São Francisco, Osasco - SP',
    phone: '(11) 2345-6789',
    image: '/images/units/vila-sao-francisco.jpg',
  },
  {
    id: 3,
    name: 'Unidade Assis',
    address: 'Av. Rui Barbosa, 456 - Centro, Assis - SP',
    phone: '(18) 3456-7890',
    image: '/images/units/assis.jpg',
  },
  {
    id: 4,
    name: 'Unidade Campesina',
    address: 'R. Campesina, 789 - Vila Campesina, Osasco - SP',
    phone: '(11) 4567-8901',
    image: '/images/units/campesina.jpg',
  },
  {
    id: 5,
    name: 'Unidade Caravana',
    address: 'R. Caravana, 101 - Jardim das Flores, Osasco - SP',
    phone: '(11) 5678-9012',
    image: '/images/units/caravana.jpg',
  },
];

const SectionUnitsCarousel = () => {
  return (
    <section className="py-16 bg-white dark:bg-neutral-900">
      <div className="container">
        <h2 className="text-3xl font-semibold text-center mb-12">Nossas Unidades</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {units.map((unit) => (
              <SwiperSlide key={unit.id} className="h-auto">
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={unit.image}
                      alt={unit.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{unit.name}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1">{unit.address}</p>
                    <a 
                      href={`tel:${unit.phone.replace(/\D/g, '')}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      {unit.phone}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionUnitsCarousel;
