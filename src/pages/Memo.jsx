import { Box, Button, Input } from "@chakra-ui/react";
import { memo, useState } from "react";

// Componente Contador
// Solo se vuelve a renderizar si cambia la prop "value" gracias a React.memo
const Contador = memo(({ value }) => {
  console.log("Contador se renderiza...");
  return <h1>{value}</h1>;
});

// Componente principal que muestra el uso de React.memo
const Memo = () => {
  // Estado para el contador
  const [count, setCount] = useState(0);
  // Estado para el texto del input
  const [text, setText] = useState("");

  // Este log muestra cuándo se renderiza el componente Memo
  console.log("Memo se renderiza...");

  // Maneja el cambio en el input de texto
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Renderiza un botón para sumar, un input controlado y el contador memoizado
  return (
    <Box>
      {/* Botón para incrementar el contador */}
      <Button onClick={() => setCount(count + 1)}> +1</Button>
      {/* Input controlado para texto */}
      <Input
        value={text}
        onChange={handleChange}
        placeholder="Ingrese lo que sea..."
        type="text"
      />
      {/* El componente Contador solo se renderiza si cambia "count" */}
      <Contador value={count} />
    </Box>
  );
};

export default Memo;