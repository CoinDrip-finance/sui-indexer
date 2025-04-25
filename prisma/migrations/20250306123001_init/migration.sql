-- CreateTable
CREATE TABLE "Segment" (
    "dbId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "exponent" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,

    CONSTRAINT "Segment_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "StreamClaimed" (
    "dbId" TEXT NOT NULL,
    "stream_id" TEXT NOT NULL,
    "claimed_by" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "remaining_balance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StreamClaimed_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "StreamCreated" (
    "dbId" TEXT NOT NULL,
    "stream_id" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "cliff" TEXT NOT NULL,
    "segments" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StreamCreated_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "StreamDestroyed" (
    "dbId" TEXT NOT NULL,
    "stream_id" TEXT NOT NULL,
    "destroyed_by" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StreamDestroyed_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "cursor" (
    "id" TEXT NOT NULL,
    "eventSeq" TEXT NOT NULL,
    "txDigest" TEXT NOT NULL,

    CONSTRAINT "cursor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Segment_dbId_key" ON "Segment"("dbId");

-- CreateIndex
CREATE UNIQUE INDEX "StreamClaimed_dbId_key" ON "StreamClaimed"("dbId");

-- CreateIndex
CREATE UNIQUE INDEX "StreamCreated_dbId_key" ON "StreamCreated"("dbId");

-- CreateIndex
CREATE UNIQUE INDEX "StreamDestroyed_dbId_key" ON "StreamDestroyed"("dbId");
