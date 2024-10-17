import { Request, Response } from 'express';
import { handleError } from "../utils/error-handler.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const filterQuestions = async (req: Request, res: Response) => {
    const { content } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY as string);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        const promptText = `Extract survey questions from the following text: ${content} using this JSON schema:
            Question = {'question': string, 'shortcut': string, 'options': string[], 'questionType': string}
                Return: Array<Question>`;
        const result = await model.generateContent(promptText);

        res.status(200).json(result.response?.candidates?.[0].content.parts[0].text);
    } catch (error) {
        handleError(error, res);
    }
}

export const generateQuestionsUsingPrompt = async (req: Request, res: Response) => {
    const { survey_topic } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY as string);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        // const promptText = `${prompt}, '${survey_question}'`;
        const promptText = `Generate web survey questions about '${survey_topic}' using this JSON schema: 
            Question = {'question': string, 'options': string[], 'questionType': string}
                Return: Array<Question>`;
        const result = await model.generateContent(promptText);

        res.status(200).json(result.response?.candidates?.[0].content.parts[0].text);
    } catch (error) {
        handleError(error, res);
    }
}

export const generateQuestionsUsingAdvancedPrompt = async (req: Request, res: Response) => {
    const { survey_prompt } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY as string);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        const promptText = `${survey_prompt} using this JSON schema: 
            Question = {'question': string, 'options': string[], 'questionType': string}
                Return: Array<Question>`;
        const result = await model.generateContent(promptText);

        res.status(200).json(result.response?.candidates?.[0].content.parts[0].text);
    } catch (error) {
        handleError(error, res);
    }
}


// export const generateQuestions = async (req: Request, res: Response) => {
//     if (req.method === 'POST') {
//         const { surveyTopic } = req.body;

//         try {
//             const generator = await pipeline('text2text-generation', 'google/flan-t5-base');
//             const generatedQuestions = await generator(
//                 `Generate survey questions about: ${surveyTopic}`,
//                 { max_length: 200 }
//             );

//             res.status(200).json({ questions: generatedQuestions[0] });
//         } catch (error) {
//             handleError(error, res);
//         }
//     } else {
//         res.status(405).end(); // Method Not Allowed
//     }
// }

// export const filterQuestions = async (req: Request, res: Response) => {
// const { documentText } = req.body;

// try {
//     const questionAnswerer = await pipeline(
//         "question-answering",
//         "deepset/roberta-base-squad2"
//     );
//     const questions = [];

//     const result = await questionAnswerer({
//         question: "What are the survey questions?", //  Generic question
//         context: documentText,
//     });
//     if (result.answer && result.score > 0.8) {
//         questions.push(result.answer);
//     }
//     //   }

//     res.status(200).json({ questions });
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to extract questions' });
// }

// }
