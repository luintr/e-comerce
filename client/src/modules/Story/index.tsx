import React from 'react';
import s from './style.module.scss';
import StoryHero from './StoryHero';
import StoryTabs from './StoryTabs';

const StoryModule = () => {
  return (
    <div className={s.storyModule}>
      <StoryHero />
      <StoryTabs />
    </div>
  );
};

export default StoryModule;
