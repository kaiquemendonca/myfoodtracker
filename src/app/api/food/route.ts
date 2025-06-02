import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { barcode, mealId } = await req.json();

  const url = barcode?.match(/^\d+$/)
    ? `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`
    : `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(barcode)}&search_simple=1&action=process&json=1&page_size=1`;

  const res = await fetch(url);
  const data = await res.json();

  const product = barcode?.match(/^\d+$/) ? data.product : data.products?.[0];

  if (!product) {
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
  }

  const nutriments = product.nutriments;

  const food = await prisma.food.create({
    data: {
      name: product.product_name || "Produto sem nome",
      barcode: barcode || "",
      calories: nutriments["energy-kcal_100g"] || 0,
      protein: nutriments["proteins_100g"] || 0,
      carbs: nutriments["carbohydrates_100g"] || 0,
      fat: nutriments["fat_100g"] || 0,
      mealId,
    },
  });

  return NextResponse.json(food);
}
