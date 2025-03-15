import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.ENVIRONMENT === 'production';
  
  if (isProd) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
    };
  } else {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }
}