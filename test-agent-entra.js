require("dotenv").config();

const { AIProjectClient } = require("@azure/ai-projects");
const { DefaultAzureCredential } = require("@azure/identity");

async function main() {

    console.log("1. Creando credencial");

    const credential =
        new DefaultAzureCredential();

    console.log("2. Creando cliente");

    const projectClient =
        new AIProjectClient(
            process.env.FOUNDRY_PROJECT_ENDPOINT,
            credential,
            {
                allowPreview: true
            }
        );

    console.log("3. Buscando agente");

    const agent =
        await projectClient.agents.get(
            process.env.FOUNDRY_AGENT_NAME
        );

    console.log("Agente encontrado:", agent.name);

    console.log("4. Creando OpenAI Client");

    const openAIClient =
        projectClient.getOpenAIClient();

    console.log("5. Enviando pregunta");

    const response =
        await openAIClient.responses.create({

            model:
                process.env.FOUNDRY_MODEL_DEPLOYMENT,

            input:
                "¿Dónde se encuentra la Ferretería César?"

        });

    console.log("6. Respuesta recibida");

    console.log(response.output_text);

}

main().catch(error => {

    console.error("ERROR:");

    console.error(error);

});