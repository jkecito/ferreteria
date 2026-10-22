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

    console.log("AGENTS:");
    console.log(
        Object.keys(projectClient.agents)
    );

    console.log("\nBETA.AGENTS:");
    console.log(
        Object.keys(projectClient.beta.agents)
    );

}

main().catch(console.error);