export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Resumo Diário</h1>
      <div className="grid gap-4">
        <div className="p-4 border rounded bg-white shadow">
          <h2 className="font-semibold">Calorias Consumidas</h2>
          <p>000 kcal</p>
        </div>
        <div className="p-4 border rounded bg-white shadow">
          <h2 className="font-semibold">Gasto Calórico</h2>
          <p>000 kcal</p>
        </div>
        <div className="p-4 border rounded bg-white shadow">
          <h2 className="font-semibold">Déficit / Superávit</h2>
          <p>000 kcal</p>
        </div>
      </div>
    </div>
  );
}
