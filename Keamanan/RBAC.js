class RBAC {
    constructor() {
        this.roles = {};
    }

    // Menambahkan peran
    addRole(role) {
        if (!this.roles[role]) {
            this.roles[role] = [];
        }
    }

    // Menambahkan izin ke peran
    addPermissionToRole(role, permission) {
        if (this.roles[role]) {
            this.roles[role].push(permission);
        }
    }

    // Mengecek apakah peran memiliki izin
    can(role, permission) {
        return this.roles[role] && this.roles[role].includes(permission);
    }
}

// Contoh Penggunaan
const rbac = new RBAC();
rbac.addRole("admin");
rbac.addPermissionToRole("admin", "read");
rbac.addPermissionToRole("admin", "write");
console.log(rbac.can("admin", "write")); // Output: true
console.log(rbac.can("admin", "delete")); // Output: false