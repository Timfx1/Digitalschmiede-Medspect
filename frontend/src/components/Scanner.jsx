import React, { useState } from "react";
import Tesseract from "tesseract.js";
// Import specific functions from pdfjs-dist
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';

// Set the worker source for PDF.js
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Scanner = () => {
  const [scannedText, setScannedText] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileType = file.type;

      if (fileType === 'application/pdf') {
        // Handle PDF file
        const reader = new FileReader();
        reader.onload = async () => {
          const pdfData = new Uint8Array(reader.result);
          const pdf = await getDocument(pdfData).promise;

          const textPromises = [];

          for (let i = 1; i <= pdf.numPages; i++) {
            textPromises.push(pdf.getPage(i).then((page) => page.getTextContent()));
          }

          const textContent = await Promise.all(textPromises);
          const fullText = textContent.map((content) => content.items.map((item) => item.str).join(' ')).join('\n');
          setScannedText(fullText);
        };

        reader.readAsArrayBuffer(file);
      } else {
        // Handle image file for OCR
        Tesseract.recognize(
          file,
          'eng', // Specify language
          {
            logger: (info) => console.log(info), // Optional: Log progress
          }
        ).then(({ data: { text } }) => {
          setScannedText(text);
        });
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} accept="application/pdf,image/*" />
      <h3>Scanned Text:</h3>
      <pre>{scannedText}</pre>
    </div>
  );
};

export default Scanner;
