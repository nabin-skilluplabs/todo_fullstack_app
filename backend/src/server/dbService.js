import { prisma } from "./lib/prisma.js";

const getTasks = async () => {
  return prisma.task.findMany();
};

const createTask = async (task) => {
  return prisma.task.create({
    data: {
      task: task,
      isEditing: false,
    }
  })
}

export { getTasks, createTask };
