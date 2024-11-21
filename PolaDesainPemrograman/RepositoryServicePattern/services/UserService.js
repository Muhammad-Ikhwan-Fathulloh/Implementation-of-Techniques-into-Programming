// /services/UserService.js
class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    getAllUsers() {
      return this.userRepository.getAll();
    }
  
    getUserById(id) {
      const user = this.userRepository.getById(id);
      if (!user) throw new Error(`User with ID ${id} not found.`);
      return user;
    }
  
    createUser(user) {
      return this.userRepository.create(user);
    }
  
    updateUser(id, updatedUser) {
      const user = this.userRepository.update(id, updatedUser);
      if (!user) throw new Error(`Cannot update user with ID ${id}, not found.`);
      return user;
    }
  
    deleteUser(id) {
      const user = this.userRepository.delete(id);
      if (!user) throw new Error(`Cannot delete user with ID ${id}, not found.`);
      return user;
    }
}
  
export default UserService;  