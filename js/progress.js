export function updateProgress(total, progressBar){
  const done = document.querySelectorAll(".answered").length;
  progressBar.style.width = (done/total*100)+"%";
}