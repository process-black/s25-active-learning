import React from 'react';
import OriginalDocCard from '@theme-original/DocCard';

/**
 * Forward to Docusaurus default DocCard.
 * Previously this file only contained commented code which caused build errors
 * as it exported an empty object.
 */
export default function DocCard(props) {
  return <OriginalDocCard {...props} />;
}
