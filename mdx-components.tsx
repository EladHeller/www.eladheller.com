'use client';

import type { MDXComponents } from 'mdx/types';
import { Pre, Code, Heading2 } from '@/components/mdx';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    code: Code,
    h2: Heading2,
    ...components,
  };
} 