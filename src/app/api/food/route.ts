import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { barcode, mealId } = await req.json();

  const res = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`);
  const data = await res.json();

  if (!data.product) {
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
  }

  const nutriments = data.product.nutriments;

  const food = await prisma.food.create({
    data: {
      name: data.product.product_name || "Produto sem nome",
      barcode,
      calories: nutriments["energy-kcal_100g"] || 0,
      protein: nutriments["proteins_100g"] || 0,
      carbs: nutriments["carbohydrates_100g"] || 0,
      fat: nutriments["fat_100g"] || 0,
      mealId,
    },
  });

  return NextResponse.json(food);
}
