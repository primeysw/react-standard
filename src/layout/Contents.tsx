import styled from "styled-components";
/**
 * @description 콘텐츠 컴포넌트
 */

type Props = {
    title: string;
    description?: string;
};

const ContentsContainer = styled.main`
    height: 100%;
    background-color: #ffffff;
`;

function Contents({ title }: Props) {
    return (
        <ContentsContainer>
            <h2>{title}</h2>
        </ContentsContainer>
    );
}
export default Contents;
