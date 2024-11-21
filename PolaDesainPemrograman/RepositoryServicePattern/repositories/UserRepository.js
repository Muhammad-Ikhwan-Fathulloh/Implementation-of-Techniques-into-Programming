// /repositories/UserRepository.js
class UserRepository {
    constructor() {
      this.users = []; // Simulasi database dalam array
    }
  
    getAll() {
      return this.users;
    }
  
    getById(id) {
      return this.users.find(user => user.id === id);
    }
  
    create(user) {
      this.users.push(user);
      return user;
    }
  
    update(id, updatedUser) {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...updatedUser };
        return this.users[index];
      }
      return null;
    }
  
    delete(id) {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
        return this.users.splice(index, 1)[0];
      }
      return null;
    }
}
  
export default UserRepository;  