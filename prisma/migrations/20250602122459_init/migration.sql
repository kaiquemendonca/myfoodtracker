-- CreateTable
CREATE TABLE "Refeicao" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Refeicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alimento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "calorias" DOUBLE PRECISION NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "gordura" DOUBLE PRECISION NOT NULL,
    "codigoBarras" TEXT,
    "refeicaoId" INTEGER NOT NULL,

    CONSTRAINT "Alimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atividade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "caloriasGastas" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Atividade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alimento" ADD CONSTRAINT "Alimento_refeicaoId_fkey" FOREIGN KEY ("refeicaoId") REFERENCES "Refeicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
