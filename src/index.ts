import express from "express";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";
import questionnaireRoutes from "./routes/questionnaire-routes.js";
import templateRoutes from "./routes/template-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/questionnaires', questionnaireRoutes);
app.use('/api/templates', templateRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
