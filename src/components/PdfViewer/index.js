import { useState } from 'react';
import Link from 'next/link';

const PDFViewer = ({ pdfUrl }) => {


  return (
    <div>
      <Link href={pdfUrl}>
        <h4>Open PDF in new tab</h4>
      </Link>
    </div>
  );
};

export default PDFViewer;