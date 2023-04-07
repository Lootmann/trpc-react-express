import { prisma } from "./prisma";

export const greetings = async () => {
  return "hello world";
};

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const createUsers = async (name: string, email: string) => {
  return prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
};
