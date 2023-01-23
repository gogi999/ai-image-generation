import * as dotenv from 'dotenv';
import {
  Configuration,
  OpenAIApi,
} from 'openai';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const getOpenAIImage = (req, res) => {
  res.send('Hello from DALL-E!');
};

export const createOpenAIImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(201).json({ photo: image });
  } catch (err) {
    console.log(err);
    res.status(500).send(err?.response.data.error.message);
  }
};
