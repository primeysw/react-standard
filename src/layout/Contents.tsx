import styled from "styled-components";
import Counter from "@/components/Counter";
import Input from "@/components/Input";
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
            <Counter />
            <Input />
        </ContentsContainer>
    );
}
export default Contents;
