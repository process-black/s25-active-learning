// // src/theme/DocCard/index.js
// import React from 'react';
// import OriginalDocCard from '@theme-original/DocCard';
// import {useDocById} from '@docusaurus/theme-common';
// import Link from '@docusaurus/Link';
// import clsx from 'clsx';

// // A custom card component that includes an image
// function CustomCard({href, title, description, image}) {
//   return (
//     <Link
//       href={href}
//       className={clsx('card', 'padding--lg', 'card-link-style')}
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%',
//         textDecoration: 'none',
//       }}>
//       <img
//         src={image}
//         alt={title}
//         style={{
//           width: '100%',
//           height: '150px',
//           objectFit: 'cover',
//           marginBottom: '1rem',
//           borderRadius: 'var(--ifm-card-border-radius)',
//         }}
//       />
//       <div
//         style={{
//           flex: '1 1 auto',
//         }}>
//         <h3
//           className="text--truncate"
//           title={title}
//           style={{marginBottom: '0.5rem'}}>
//           {title}
//         </h3>
//         <p
//           className="text--truncate"
//           style={{
//             fontSize: '0.9rem',
//             color: 'var(--ifm-color-content-secondary)',
//             display: '-webkit-box',
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: 'vertical',
//             overflow: 'hidden',
//           }}>
//           {description}
//         </p>
//       </div>
//     </Link>
//   );
// }

// export default function DocCard(props) {
//   const {item} = props;

//   // Check if it's a link to a doc page
//   if (item.type === 'link') {
//     // Get the full doc metadata using its ID
//     const doc = useDocById(item.docId ?? undefined);

//     // Use the thumbnail from front matter, or a default image if not provided.
//     const image = doc?.frontMatter?.thumbnail || '/img/thumbnails/default.png';
//     const description = doc?.description;

//     // Always render the custom card for doc links
//     return (
//       <CustomCard
//         href={item.href}
//         title={item.label}
//         description={description}
//         image={image}
//       />
//     );
//   }

//   // For category cards, render the original component.
//   return <OriginalDocCard {...props} />;
// }
