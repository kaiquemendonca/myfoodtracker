"use client";

import { useEffect, useState } from "react";

export default function Atividades() {
  const [activities, setActivities] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const fetchActivities = async () => {
    const res = await fetch("/api/activity");
    const data = await res.json();
    setActivities(data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const createActivity = async () => {
    await fetch("/api/activity", {
      method: "POST",
      body: JSON.stringify({ name, calories: parseFloat(calories), date }),
    });
    setName("");
    setCalories("");
    setDate("");
    fetchActivities();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Atividades</h1>

      <div>
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Nome (Ex: Corrida)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Calorias"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <input
          className="border px-2 py-1 mr-2"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={createActivity}
          className="bg-green-600 text-white px-4 py-1 rounded"
        >
          Adicionar
        </button>
      </div>

      <div className="mt-4">
        <h2 className="font-bold text-lg mb-2">Suas Atividades</h2>
        {activities.map((act) => (
          <div key={act.id} className="border p-4 rounded mb-2">
            <strong>{act.name}</strong> - {act.calories} kcal - {new Date(act.date).toLocaleDateString()}
          </div>
        ))}
      </div>
    </div>
  );
}
