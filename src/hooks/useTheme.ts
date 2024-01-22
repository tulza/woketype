const useTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
};

export default useTheme;
