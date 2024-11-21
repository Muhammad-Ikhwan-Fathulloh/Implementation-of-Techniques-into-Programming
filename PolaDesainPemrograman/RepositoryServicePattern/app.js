// /app.js
import User from './models/User.js';
import UserRepository from './repositories/UserRepository.js';
import UserService from './services/UserService.js';

// Initialize repository and service
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

// Simulasi Operasi CRUD
try {
  // Create users
  userService.createUser(new User(1, 'Tekno', 'tekno@utb-univ.ac.id'));
  userService.createUser(new User(2, 'Tekna', 'tekna@utb-univ.ac.id'));

  // Get all users
  console.log('All Users:', userService.getAllUsers());

  // Get user by ID
  console.log('User with ID 1:', userService.getUserById(1));

  // Update user
  const updatedUser = userService.updateUser(1, { name: 'Tekno Updated' });
  console.log('Updated User:', updatedUser);

  // Delete user
  const deletedUser = userService.deleteUser(2);
  console.log('Deleted User:', deletedUser);

  // Get all users after deletion
  console.log('All Users After Deletion:', userService.getAllUsers());
} catch (error) {
  console.error(error.message);
}
