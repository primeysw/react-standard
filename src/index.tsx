import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // Strict Mode는 강력하게 제한하고 테스트를 하기 위한 모드이기 때문에 UseEffect가 총 2번 호출된다.
    // Build를 하면 알아서 없어지기 때문에 개발할 때는 호출하는 것이 좋다. (굳이 없애지 말자)
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
