require("dotenv").config();

const { AIProjectClient } = require("@azure/ai-projects");
const { DefaultAzureCredential } = require("@azure/identity");

async function main() {

    const projectClient =
        new AIProjectClient(
            process.env.FOUNDRY_PROJECT_ENDPOINT,
            new DefaultAzureCredential(),
            {
                allowPreview: true
            }
        );

    const openAIClient =
        projectClient.getOpenAIClient({
            agentName: "Chatbot"
        });

    const response =
    await openAIClient.responses.create({

        model:
            process.env.FOUNDRY_MODEL_DEPLOYMENT,

        input:
            "¿Dónde se encuentra la Ferretería César?"

    });

    console.log(response.output_text);

}

main().catch(console.error);