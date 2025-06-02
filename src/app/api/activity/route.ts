import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type ActivityBody = {
  name: string;
  calories: number;
  date: string;
};

// POST - Cadastrar uma atividade
export async function POST(req: Request) {
  const { name, calories, date }: ActivityBody = await req.json();

  const activity = await prisma.activity.create({
    data: {
      name,
      calories,
      date: new Date(date),
    },
  });

  return NextResponse.json(activity);
}

// GET - Listar atividades
export async function GET() {
  const activities = await prisma.activity.findMany({
    orderBy: {
      date: "desc",
    },
  });

  return NextResponse.json(activities);
}
