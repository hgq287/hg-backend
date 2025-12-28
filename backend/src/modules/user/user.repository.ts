import prisma from '../../config/prisma.client';
import { UserProfileDto } from './dto/user-profile.dto';
import { UpdateUserDto } from './dto/update-user.dto';


export const findUserById = async (id: number): Promise<UserProfileDto | null> => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      username: true,
      bio: true,
    },
  });
};

export const updateUserById = async (id: number, data: Partial<UpdateUserDto>) => {
  return await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      email: true,
      username: true,
      bio: true,
    },
  });
};
