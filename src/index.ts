import express from "express";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";
import questionnaireRoutes from "./routes/questionnaire-routes.js";
import templateRoutes from "./routes/template-routes.js";
import uploadRoutes from "./routes/upload-routes.js";
import bodyParser from "body-parser";
import promptRoutes from "./routes/prompt-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/questionnaires', questionnaireRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/prompt', promptRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
