import express from "express";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Get all users
// app.get("/api/v1/users", async (req: Request, res: Response) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.status(200).json(users);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// })
