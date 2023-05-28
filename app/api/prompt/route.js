import { connectToDB } from "@utils/database.js";
import Prompt from "@models/prompt.js";

export const GET = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        return new Response ('Failed to fetch all prompts', {status: 500})
    }
}