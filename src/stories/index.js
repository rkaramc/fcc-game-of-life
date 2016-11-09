import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import GameOfLife from '../game-of-life';

storiesOf('Game of Life', module)
  .add('basic', () => {
    return <GameOfLife />
  });
