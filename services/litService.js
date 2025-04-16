import { LitNodeClient } from "@lit-protocol/lit-node-client";

class LitService {
    constructor() {
        this.litNodeClient = new LitNodeClient();
    }

    async connect() {
        await this.litNodeClient.connect();
    }

    async generatePKP() {
        return await this.litNodeClient.generatePKP();
    }

    async publishLitAction() {
        const litActionCode = `
        const go = async () => {
            const sigShare = await Lit.Actions.signEcdsa({ toSign, publicKey, sigName });
            Lit.Actions.setResponse({ response: sigShare });
        };
        go();
        `;

        return await this.litNodeClient.publishLitAction(litActionCode);
    }

    async signTransaction(actionId, toSign) {
        return await this.litNodeClient.invokeLitAction({ actionId, params: { toSign } });
    }
}

export default new LitService();
