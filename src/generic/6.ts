type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  email: "";
  password: "";
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};
