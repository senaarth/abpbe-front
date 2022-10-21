export function scrollIntoView(elIdentifier: string) {
  const element = document?.querySelector(elIdentifier);

  if (!element) return;

  const y = element?.getBoundingClientRect()?.top + window?.scrollY - 102;

  window.scroll({
    top: y,
    behavior: "smooth",
  });
}
