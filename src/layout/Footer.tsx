import styled from "styled-components";

/**
 * @description 푸터 컴포넌트
 */

type Props = {
    title: string;
    description?: string;
};

const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
`;

// 구조분해 할당을 사용하여 작성해주는게 코드가 깔끔하다.
// function Footer ({title, description}: Props)
// <h1>{title}</h1>
// <h1>{description}</h1>
function Footer(props: Props) {
    return (
        <FooterContainer>
            <h2>{props.title}</h2>
        </FooterContainer>
    );
}
export default Footer;
