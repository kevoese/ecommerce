'use client';

import React from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';

const EditerMarkdown = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default.Markdown),
  { ssr: false },
);

interface Props {
  desc: string | undefined;
}

const Desc = ({ desc }: Props) => (
  <div>
    <EditerMarkdown
      source={desc || 'Loading...'}
      style={{
        fontSize: '14px',
        lineHeight: '24px',
        color: '#171725',
      }}
    />
  </div>
);

export default Desc;
