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

    console.log(
        projectClient.getOpenAIClient.toString()
    );

}

main().catch(console.error);