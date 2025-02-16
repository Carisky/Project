import UserModel from '../models/UserModel';

export const createUserService = async (name: string, email: string, password: string) => {
  const user = UserModel.fromJson({
    name,
    email,
    password: await UserModel.hashPassword(password),
    role: 'user',
  });
  return await user.saveUser();
};

export const authenticateUserService = async (email: string, password: string) => {
  return await UserModel.authenticate(email, password);
};

export const getUserByIdService = async (id: number) => {
  return await UserModel.findById(id);
};

export const updateUserService = async (userId: number, updates: Partial<UserModel>) => {
  const user = await getUserByIdService(userId);
  if (user) {
    return await user.updateUser(updates);
  }
  return null;
};

export const deleteUserService = async (userId: number) => {
  const user = await getUserByIdService(userId);
  if (user) {
    return await user.deleteUser();
  }
};
