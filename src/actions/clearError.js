export const clearError = (input, errorParagraph) => {
    errorParagraph.classList.remove("show");
    errorParagraph.textContent = "";

    input.removeEventListener("input", () => clearError(input, errorParagraph))
}
