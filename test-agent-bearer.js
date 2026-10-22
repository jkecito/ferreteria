require("dotenv").config();

const { DefaultAzureCredential } =
    require("@azure/identity");

async function main() {

    const credential =
        new DefaultAzureCredential();

    const token =
        await credential.getToken(
            "https://ai.azure.com/.default"
        );

    const response =
        await fetch(
            "https://gdzcesar-chatbot-resource.services.ai.azure.com/api/projects/gdzcesar-chatbot/agents/Chatbot/endpoint/protocols/openai/responses?api-version=2025-05-15-preview",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json",

                    "Authorization":
                        `Bearer ${token.token}`
                },

                body: JSON.stringify({

                    model: "gpt-5-mini",

                    input:
                        "¿Dónde se encuentra la Ferretería César?"

                })
            }
        );

    console.log(
        "STATUS:",
        response.status
    );

    const data =
        await response.text();

    console.log(data);

}

main().catch(console.error);