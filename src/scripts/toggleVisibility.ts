export const toggleVisibility = (
  clickedElementId: string,
  toggledElementId: string,
): void => {
  document.querySelector(clickedElementId)?.addEventListener("click", () => {
    document.querySelector(toggledElementId)?.classList.toggle("is-hidden");
  });
};
