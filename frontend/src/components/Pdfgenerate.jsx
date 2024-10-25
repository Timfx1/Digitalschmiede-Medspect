import React, { useRef, forwardRef } from 'react';
import { useReactToPrint } from 'react-to-print';


// Using forwardRef to pass the ref to the component
const PDFPage = forwardRef(({ formData }, ref) => (
    <div ref={ref} style={{ padding: '20px', width: '210mm', height: '297mm', border: '1px solid black' }}>
        <h2 style={{ textAlign: 'center' }}>Regierung von Oberbayern</h2>
        <br />
        <h3 style={{ textAlign: 'center' }}>Maximillianstraße 39, 80538 München</h3>
        <h3 style={{ textAlign: 'center' }}>Tel: 01543729 Fax: 67828  E post: tsjkaf@gmail.com</h3>
        <br />
        <p><strong>Legende:</strong></p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem autem nostrum quam vero error eligendi aspernatur, nulla nemo praesentium possimus, architecto dicta aliquid libero iure illo, unde.</p>
        <br />
        <h2 style={{ textAlign: 'center' }}>GMP-Inspektionsbericht</h2>
        <br />
        <p><strong>AZ:</strong><br />{formData.companyAZ}</p>
        <p><strong>FIRMENNAME DES INSPIZIERTEN BETRIEBES:</strong><br />{formData.companyName}</p>
        <p><strong>ADRESSE DES ERLAUBNISINHABERS:</strong><br />{formData.address}</p>
        <p><strong>IDENTIFIKATIONSNUMMER (DUNS Nr./GPS-Koordinaten):</strong><br />{formData.Identificationnumber}</p>
        <p><strong>EUDRAGMDP SITE REFERENCE NUMBER:</strong><br />{formData.SiteReferencenumber}</p>
        <p><strong>MORE INFORMATION:</strong><br />{formData.additionalInfo}</p>
    </div>
));

const Pdfgenerate = ({ formData }) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'GMP-Inspektionsbericht'

    });

    return (
        <div>
            <PDFPage ref={componentRef} formData={formData} />
            <button className='button' onClick={handlePrint} style={{ marginBottom: '10px' }}>Export</button>
        </div>
    );
};

export default Pdfgenerate;
