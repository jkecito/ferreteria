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

    const agent =
        await projectClient.agents.get(
            process.env.FOUNDRY_AGENT_NAME
        );

    console.log(
        JSON.stringify(agent, null, 2)
    );

}

main().catch(console.error);