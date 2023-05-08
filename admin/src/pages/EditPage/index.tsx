/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
import pluginId from '../../pluginId';
import { Flex, Textarea, Button } from '@strapi/design-system';

const HomePage = () => {
  const [value, onChange] = useState('');

  return (
    <Flex padding={4} spacing={2}>
      <Textarea
        placeholder="Generated text"
        label="Content"
        name="content"
        onChange={(e) => onChange(e.target.value)}
      >
        {value}
      </Textarea>
    </Flex>
  );
};

export default HomePage;
