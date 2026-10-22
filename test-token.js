const { DefaultAzureCredential } =
    require("@azure/identity");

async function main() {

    const credential =
        new DefaultAzureCredential();

    const token =
        await credential.getToken(
            "https://ai.azure.com/.default"
        );

    console.log(token);

}

main().catch(console.error);