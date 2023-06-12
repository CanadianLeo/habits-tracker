-- CreateTable
CREATE TABLE "Habit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "currentValue" INTEGER,
    "targetValue" INTEGER,
    "color" TEXT,
    "period" TEXT
);
