import "./EmptyTodos.css";

export const EmptyTodos = () => {
  return (
    <div className="EmptyTodos">
      <h1>No hay elementos aún 😢</h1>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/signing-contract-3678877-3162893.png"
        width={400}
        style={{ textAlign: "center" }}
        alt="error"
      />
      <h4>¡Comencemos agregando algo!</h4>
    </div>
  );
};
