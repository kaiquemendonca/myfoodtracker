interface Alimento {
  nome: string;
  calorias: number;
  proteina: number;
  carboidrato: number;
  gordura: number;
}

export function CardAlimento({ alimento }: { alimento: Alimento }) {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="font-bold">{alimento.nome}</h2>
      <p>Calorias: {alimento.calorias} kcal</p>
      <p>Proteínas: {alimento.proteina} g</p>
      <p>Carboidratos: {alimento.carboidrato} g</p>
      <p>Gorduras: {alimento.gordura} g</p>
    </div>
  );
}
