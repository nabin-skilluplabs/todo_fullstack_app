import { prisma } from "./lib/prisma.js";

const getTasks = async () => {
  return prisma.task.findMany();
};

export { getTasks };
