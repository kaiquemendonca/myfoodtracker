import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, date } = await req.json();

  const meal = await prisma.meal.create({
    data: {
      name,
      date: new Date(date),
    },
  });

  return NextResponse.json(meal);
}

export async function GET() {
  const meals = await prisma.meal.findMany({
    include: { foods: true },
    orderBy: { date: "desc" },
  });

  return NextResponse.json(meals);
}
