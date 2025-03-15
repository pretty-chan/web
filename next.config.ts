import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'https://zo8c8sg8g8c00cg0ccsgok0w.apne2a.algorix.cloud',
  }
};

export default withVanillaExtract(nextConfig);
