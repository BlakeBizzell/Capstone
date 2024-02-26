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
      name: "free tier",
      price: 0.0,
      description: "free tier subscription model",
      class: "subscription",
    },
    {
      name: "player tier",
      price: 0.99,
      description: "player tier subscription model",
      class: "subscription",
    },
    {
      name: "DM tier",
      price: 4.99,
      description: "DM tier subscription model",
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
