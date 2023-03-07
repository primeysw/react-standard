import styled from "styled-components";
/**
 * @description 사이드바 컴포넌트
 */

type Props = {
    title: string;
    description: string;
};

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;
`;

function Sidebar(props: Props) {
    return (
        <SidebarContainer>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
        </SidebarContainer>
    );
}
export default Sidebar;
