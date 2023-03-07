import styled from "styled-components";
/**
 * @description 콘텐츠 컴포넌트
 */

type Props = {
    title: string;
    description: string;
};

const ContentsContainer = styled.main`
    height: 100%;
    background-color: #ffffff;
`;

function Contents({ title, description }: Props) {
    return (
        <ContentsContainer>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </ContentsContainer>
    );
}
export default Contents;
