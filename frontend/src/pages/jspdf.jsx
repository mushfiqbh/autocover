import { jsPDF } from "jspdf";

const Jspdf = () => {
  const doc = new jsPDF();

  const gen = () => {
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  };

  return (
    <div>
      <button onClick={gen}>Generate PDF</button>
    </div>
  );
};

export default Jspdf;
