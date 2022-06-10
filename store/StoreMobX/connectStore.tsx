import { configure, makeAutoObservable } from "mobx";
import {providers} from "ethers"

configure({
  enforceActions: "never",
});

export interface State {
    provider: null | (() => providers.Web3Provider)
    singer: null | (() => providers.JsonRpcSigner )
    walletAddress: null | string
}

export class ConnectStore {
  state: State = {
    provider: null,
    singer: null,
    walletAddress: null,
  }

  constructor() {
    makeAutoObservable(this);
  }

  get getWalletAddress():null | string {
    return this.state.walletAddress
  }

  async addTodo():Promise<void> {
      const provider = new providers.Web3Provider((window as any).ethereum)
      const singer = provider.getSigner()
      const walletAddress = await singer.getAddress()
      this.state = {
        provider: () => provider,
        singer: () => singer,
        walletAddress
      }
  }
  

}
