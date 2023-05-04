import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const DownloadPage = ({ rootElementId, downloadFileName }) => {
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "pt", "a2")
            pdf.addImage(imgData, "JPEG", 80, 80)
            pdf.save(`${downloadFileName}`)
        })
    }

    return (
        <div>
            <button onClick={downloadFileDocument}>Dodnload PDF</button>
        </div>
    );
};

export default DownloadPage;