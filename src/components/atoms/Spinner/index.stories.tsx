// Spinner.stories.ts|tsx
import  Spinner  from './index';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Spinner',
    component: Spinner,
} as ComponentMeta<typeof Spinner>;


  const SampleSpinner: ComponentStory<typeof Spinner> = () => {
      return <Spinner
            spinText='I am a spinner used for loading state...'
      />;
  }

export const Sample = SampleSpinner.bind({});
