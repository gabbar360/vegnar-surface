"use client";

import { useEffect, useRef, useState } from 'react';

interface PDFThumbnailProps {
  pdfPath: string;
  alt: string;
  className?: string;
}

export default function PDFThumbnail({ pdfPath, alt, className }: PDFThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        // Dynamically import PDF.js
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

        const pdf = await pdfjsLib.getDocument(pdfPath).promise;
        const page = await pdf.getPage(1);
        
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const viewport = page.getViewport({ scale: 0.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport,
          canvas: canvas,
        }).promise;

        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    loadPDF();
  }, [pdfPath]);

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">PDF Preview</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover ${loading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}