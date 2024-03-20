const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUsers() {
  await prisma.users.createMany({
    data: [
      {
        username: "Blake",
        password: "password123",
        firstName: "Blake",
        lastName: "Blake",
        email: "Blake@email.com",
        admin: true,

      },
      {
        username: "toni",
        password: "password123",
        firstName: "toni",
        lastName: "toni",
        email: "toni@email.com",
        admin: true,
      },
      {
        username: "preston94",
        password: "password123",
        firstName: "Preston",
        lastName: "Polston",
        email: "preston@email.com",
        admin: true,
      },
    ],
  });
}

async function createProducts() {
  const products = [
    {
      name: "Shirt",
      price: 25.0,
      description: "A stylish shirt.",
      class: "subscription",
    },
    {
      name: "Poster",
      price: 5.00,
      description: "A decorative poster offering easy to grab rules.",
      class: "subscription",
    },
    {
      name: "Mug",
      price: 15.00,
      description: "A durable mug part to hold your players tears.",
      class: "subscription",
    },
  ];


  await prisma.product.createMany({
    data: products,
  });
}

async function seedData() {
  await createUsers();
  await createProducts();
}

seedData()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
