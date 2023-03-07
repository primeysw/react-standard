import Header from "@/layout/Header";
import Contents from "@/layout/Contents";
import Footer from "@/layout/Footer";
import Sidebar from "@/layout/Sidebar";
import styled from "styled-components";

import GlobalStyle from "@/style/GlobalStyle";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 240px;
`;

/**
 * @description 루트 컴포넌트
 */
function App() {
    // js

    // view
    // return <h1>React-Standard</h1>;

    // 컴포넌트는 아래와 같이 불러올 수 있다.
    // 2개 이상의 컴포넌트를 넣으려면, return 뒤에 소괄호로 묶고 공백 태그를 이용해서 리턴한다.
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <Header title="유선우" description="@@@@@@" />
                {/** String이 아닌 다른 값을 넣는 경우, Props에 지정한 타입과 일치하지 않으므로 에러 발생함타입 뿐만 아니라 오타도 잡아준다...!*/}
                <Sidebar title="유선우 Sidebar" description="@@@@@@ Sidebar" />
                <Contents
                    title="유선우 Contents"
                    description="@@@@@@ Contents"
                />
                <Footer title="유선우 Footer" description="@@@@@@ Footer" />
            </AppContainer>
        </>
    );
}

export default App;
