// components/AddFood.tsx
"use client";
import { useState } from "react";
import BarCodeScanner from "./BarCodeScanner";

export default function AddFood({ mealId, onClose }: { mealId: string; onClose: () => void }) {
  const [barcode, setBarcode] = useState("");
  const [manualMode, setManualMode] = useState(false);

  const addFood = async (code: string) => {
    const res = await fetch("/api/food", {
      method: "POST",
      body: JSON.stringify({ barcode: code, mealId }),
    });
    if (res.ok) {
      alert("Alimento adicionado!");
      onClose();
    } else {
      alert("Produto não encontrado.");
    }
  };

  return (
    <div className="border p-4 mt-4 rounded bg-gray-50">
      <h3 className="text-lg font-bold mb-2">Adicionar Alimento</h3>

      <div className="mb-2">
        <button
          className="px-3 py-1 rounded bg-blue-600 text-white mr-2"
          onClick={() => setManualMode(false)}
        >
          QR Code
        </button>
        <button
          className="px-3 py-1 rounded bg-gray-600 text-white"
          onClick={() => setManualMode(true)}
        >
          Digitar código
        </button>
      </div>

      {!manualMode ? (
        <BarCodeScanner onScan={addFood} />
      ) : (
        <div>
          <input
            className="border px-2 py-1 mr-2"
            placeholder="Código de barras"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-1 rounded"
            onClick={() => addFood(barcode)}
          >
            Buscar
          </button>
        </div>
      )}
    </div>
  );
}
