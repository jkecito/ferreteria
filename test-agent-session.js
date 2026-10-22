require("dotenv").config();

const { AIProjectClient } = require("@azure/ai-projects");
const { DefaultAzureCredential } = require("@azure/identity");

async function main() {

    const credential = new DefaultAzureCredential();

    const projectClient = new AIProjectClient(
        process.env.FOUNDRY_PROJECT_ENDPOINT,
        credential,
        {
            allowPreview: true
        }
    );

    console.log("Buscando agente...");

    const agent = await projectClient.agents.get(
        process.env.FOUNDRY_AGENT_NAME
    );

    console.log("Agente:", agent.name);

    console.log("Creando sesión...");

    const session =
        await projectClient.beta.agents.createSession(
            process.env.FOUNDRY_AGENT_NAME,
            {
                isolationKey: "ferreteria-test"
            }
        );

    console.log("Sesión creada");

    console.log(session);
}

main().catch(console.error);