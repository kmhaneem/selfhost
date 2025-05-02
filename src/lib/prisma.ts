import { PrismaClient } from "@prisma/client";

// The singleton avoids creating multiple instances of the Prisma Client due to Next.js's hot reloading. See: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#best-practices-for-using-prisma-client-in-development

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
