'use client';
import React, { useRef, useState } from 'react';
import s from './style.module.scss';
import Container from '@/components/Container';
import { cinzelFont } from '@/utils/fonts';
import RoundedText from '@/components/RoundedText';
import { storyTabData } from '@/constants/story/storyTabs';
import gsap from 'gsap';

const StoryTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const tabRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = (id: number) => {
    setActiveTab(id);
  };

  return (
    <section className={s.storyTabs}>
      <Container className={s.container}>
        <div className={s.tabList}>
          {storyTabData.map(item => (
            <div
              key={item.id}
              className={`${s.tabItem} ${
                activeTab === item.id ? s.active : null
              }`}
              onClick={() => clickHandler(item.id)}
              ref={tabRef}
            >
              <div className={s.tabItem_initial}>
                <p
                  className={`${s.number} ${cinzelFont.className}`}
                >{`/0${item.id}`}</p>
                <h3 className={`${s.title} ${cinzelFont.className}`}>
                  {item.title}
                </h3>
              </div>

              <p className={s.tabItem_service}>OUR SERVICE</p>

              <div className={s.tabItem_enhance}>
                <p
                  className={`${s.number} ${cinzelFont.className}`}
                >{`/0${item.id}`}</p>
                <h3 className={`${s.title} ${cinzelFont.className}`}>
                  {item.title}
                </h3>
                <p className={s.content}>{item.content}</p>
              </div>

              <RoundedText className={s.roundedText} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StoryTabs;
