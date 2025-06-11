// Importa el hook useEffect de React
import { useEffect } from "react";

// Exporta el hook personalizado useTitle
export const useTitle = (title) => {
  // Ejecuta el efecto cada vez que cambia el valor de title
  useEffect(() => {
    // Cambia el título de la pestaña del navegador al valor recibido
    document.title = title;
  }, [title]); // El efecto depende de title
};