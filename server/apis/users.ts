import { prisma } from "./prisma";

export const greetings = async () => {
  return "Hi! I'm tRPC:^)";
};

export const getUserById = async (userId: number) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const getUsers = async () => {
  // return array[User(), User(), ...]
  return prisma.user.findMany();
};

export const createUsers = async (name: string, email: string) => {
  // return User()
  return prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
};
