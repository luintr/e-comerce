import React from 'react';
import s from './style.module.scss';
import Container from '@/components/Container';
import { ROUTE_PATH } from '@/constants/route';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import Image from 'next/image';
import image1 from '@Images/season1.jpeg';
import image2 from '@Images/season2.jpeg';
import image3 from '@Images/season3.jpeg';
import { cinzelFont } from '@/utils/fonts';
import ButtonNavigate from '@/components/Button';

const SeasonSection = () => {
  return (
    <section className={s.seasonSection}>
      <Container className={`${s.container} grid grid-cols-12`}>
        <div className={`${s.seasonDesc} col-span-5 col-start-2 `}>
          <div className={`${s.box} col-span-5 grid grid-cols-5`}>
            <h2
              className={`${s.seasonDesc_title} col-span-5`}
            >{`// TIS THE SEASON`}</h2>
            <p className={`${s.seasonDesc_content} col-span-5`}>
              Customization Beyond Boundaries: Design is personal, and so is our
              approach. We don&apos;t just design dresses; we craft experiences.
              From fabric selection to silhouette, we tailor every detail to
              match the individuality of our clients, ensuring a truly bespoke
              creation.
            </p>
            <div
              className={`${s.seasonDesc_navigateBox} col-span-2 col-start-1`}
            >
              <p>
                <span className={cinzelFont.className}>DER MOND</span> SERVICES
              </p>
              
              <ButtonNavigate href={ROUTE_PATH.STORY} text='DISCOVER'/>
            </div>
            <p className={`${s.seasonDesc_subContent} col-span-2 col-start-4`}>
              Customization Beyond Boundaries: Design is personal, and so is our
              approach. We don&apos;t just design dresses; we craft experiences.
              From fabric selection to silhouette, we tailor every detail to
              match the individuality of our clients, ensuring a truly bespoke
              creation.
            </p>
          </div>

          <Image
            src={image3.src}
            width={image3.width}
            height={image3.height}
            alt="image"
            className={s.image}
          />
        </div>

        <div className={`${s.seasonImage} col-span-5 col-start-8`}>
          <Link href={ROUTE_PATH.SHOP}>
            Our Shop
            <span>
              <ArrowIcon />
            </span>
          </Link>

          <div className={s.seasonImage_img}>
            <Image
              src={image1.src}
              width={image1.width}
              height={image1.height}
              alt="image"
            />
          </div>

          <div className={s.seasonImage_subImg}>
            <Image
              src={image2.src}
              width={image2.width}
              height={image2.height}
              alt="image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SeasonSection;
