import * as React from 'react';
import { Helmet } from 'react-helmet';

interface SchemaProps {
  defaultTitle?: string;
  title?: string;
  url?: string;
}

export default React.memo(({ defaultTitle, title, url }: SchemaProps) => {
  const schema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ];

  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
});
