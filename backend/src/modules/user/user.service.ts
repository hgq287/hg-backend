import * as bcrypt from 'bcryptjs';
import * as userRepository from './user.repository';
import { UpdateUserDto } from './dto/update-user.dto';
import generateToken from '../../common/utils/token.utils';

export const getUserProfile = async (id: number) => {
  // Ensure ID is valid
  if (!id || id <= 0) {
    throw new Error("Invalid User ID"); 
  }

  const user = await userRepository.findUserById(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user; 
};

export const updateUserProfile = async (id: number, payload: UpdateUserDto) => {
  const updateData: any = { ...payload };

  // Handle sensitive logic like password hashing
  if (payload.password) {
    updateData.password = await bcrypt.hash(payload.password, 10);
  }

  const user = await userRepository.updateUserById(id, updateData);

  // Return the user with a fresh token
  return {
    ...user,
    token: generateToken(user.id),
  };
};
