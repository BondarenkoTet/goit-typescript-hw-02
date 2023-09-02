type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  name: "";
  surname: "";
  email: "";
  password: "";
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};
