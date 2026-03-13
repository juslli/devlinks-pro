const card = document.getElementById("card");
const light = document.querySelector(".light");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  light.style.left = `${x}px`;
  light.style.top = `${y}px`;
});

card.addEventListener("mouseleave", () => {
  light.style.left = `0px`;
  light.style.top = `0px`;
});