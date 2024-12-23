import db from "./db";

const run = async () => {
  await db.user.create({
    data: {
      username: "unnhao",
      email: "unnhao@gmail.com",
      password: "",
    },
  });
};

run();
