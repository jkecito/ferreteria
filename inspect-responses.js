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
        projectClient.getOpenAIClient();

    console.log("RESPONSES:");

    console.log(
        Object.getOwnPropertyNames(
            Object.getPrototypeOf(
                openAIClient.responses
            )
        )
    );

}

main().catch(console.error);