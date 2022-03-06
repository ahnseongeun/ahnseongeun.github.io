import { div } from "./core/tag.js";
import Router from "./router.js";

function App() {
    const router = Router();

    return {
        template: () => div( {id: "app" }, [router.template()]),
    };
}

export default App;