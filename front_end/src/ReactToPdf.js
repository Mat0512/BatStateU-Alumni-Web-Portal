import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const PdfComponent = () => {
    return (
        <div className="aspect-portrait">
            <div className="w-full h-full p-5 bg-grey-300 flex justify-center items-center text-white text-2xl">
                just some text
            </div>
        </div>
    );
};

const ReactToPdf = () => {
    const exportPdf = () => {
        const input = document.getElementById("pdf");
        html2canvas(input).then((canvas) => {
            //pdf logic here after canvas was made
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "landscape",
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("download.pdf");
        });
    };
    return (
        <>
            <button onClick={exportPdf}>Print</button>

            <div
                id="pdf"
                className="flex justify-center items-center invisible"
            >
                <PdfComponent />
            </div>
        </>
    );
};

export { ReactToPdf };
