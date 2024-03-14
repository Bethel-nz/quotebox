import html2canvas from "html2canvas";

export const downloadImage = (
  ref: { current: HTMLElement | null },
  fileName = "image.png"
) => {
  if (ref.current === null) return;

  html2canvas(ref.current).then((canvas) => {
    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};
