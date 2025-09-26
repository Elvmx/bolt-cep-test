import { helloVoid, helloError, helloStr, helloNum, helloArrayStr, helloObj } from "../utils/samples";
export { helloError, helloStr, helloNum, helloArrayStr, helloObj, helloVoid };
import { dispatchTS } from "../utils/utils";

export const helloWorld = () => {
    const layers = Layer.getSelectedLayers();

    for (let i = 0; i < layers.length; i++) {
        alert("" + layers[i].name());
    }

    alert(layers.length + "");
};
