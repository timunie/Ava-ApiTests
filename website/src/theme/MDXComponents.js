import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the Tabs etc
  Tabs,
  TabItem,
  Tag,
};