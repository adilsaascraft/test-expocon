'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';

import alpcord from '/public/svg/skills/alpcord.png';
import canixa from '/public/svg/skills/canixa.png';
import chime from '/public/svg/skills/chime.png';
import concept from '/public/svg/skills/concept.png';
import ics from '/public/svg/skills/ics.png';
import intas from '/public/svg/skills/intas.png';
import lupin from '/public/svg/skills/lupin.png';
import marudeshwara from '/public/svg/skills/marudeshwara.png';
import mci from '/public/svg/skills/mci.png';
import meeting from '/public/svg/skills/meeting.jpg';
import meety from '/public/svg/skills/meety.png';
import rx from '/public/svg/skills/rx.png'; 
import sun from '/public/svg/skills/sun.png';
import thomas from '/public/svg/skills/thomas.jpg';
import torrent from '/public/svg/skills/torrent.png';


const skillImages: StaticImageData[] = [
  alpcord,
  canixa,
  chime,
  concept,
  ics,
  intas,
  lupin,
  marudeshwara,
  mci,
  meeting,
  meety,
  rx,
  sun,
  thomas, 
  torrent, 


];

const Logos: React.FC = () => {
  return (
    <>
    <p className="text-3xl font-medium text-center mt-12">Trusted by <span className="text-secondary">200+</span> event managers worldwide</p>
    <div className="my-12 px-4">

      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover
        direction="left"
        className="gap-6"
      >
        {skillImages.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center mx-6 min-w-[80px]"
          >
            <Image
              src={image}
              alt={`Skill ${index}`}
              width={500}
              height={200}
              className="w-auto h-16 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
    </>
  );
};

export default Logos;
