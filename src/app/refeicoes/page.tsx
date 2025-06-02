"use client";

import { useEffect, useState } from "react";

type Food = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type Meal = {
  id: string;
  name: string;
  date: string;
  foods: Food[];
};

export default function Refeicoes() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const fetchMeals = async () => {
    const res = await fetch("/api/meal");
    const data = await res.json();
    setMeals(data);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const createMeal = async () => {
    await fetch("/api/meal", {
      method: "POST",
      body: JSON.stringify({ name, date }),
    });
    setName("");
    setDate("");
    fetchMeals();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Refeições</h1>
      <div className="space-y-4">
        <div>
          <input
            className="border px-2 py-1 mr-2"
            placeholder="Nome (Café, Almoço...)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border px-2 py-1 mr-2"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            onClick={createMeal}
          >
            Criar
          </button>
        </div>

        <div>
          <h2 className="font-bold text-lg mt-4 mb-2">Suas Refeições</h2>
          {meals.map((meal) => (
            <div key={meal.id} className="border p-4 rounded mb-2">
              <strong>{meal.name}</strong> - {new Date(meal.date).toLocaleDateString()}
              <ul className="mt-2">
                {meal.foods.map((food: Food) => (
                  <li key={food.id}>
                    🍽️ {food.name} - {food.calories} kcal | P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
