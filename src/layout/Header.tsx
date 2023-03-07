import styled from "styled-components";

/**
 * @description 헤더 컴포넌트 // description
 * @see // @see뒤에 URL을 넣으면 찾아가기 쉽다. JSDoc을 잘 사용하도록 하자.
 */

// 자바스크립트는 타입이 없어 에러 확인이 어렵다.
// 이를 보완하기 위해 타입스크립트를 사용하며, type과 spelling 체크를 해준다.
// 이 부분은 리액트가 아닌 타입스크립트이다.
type Props = {
    title: string;
    description: string; // 필수가 아닌 경우 ?:로 정의를 해준다.
};

// ` 베틱 문자
// 베틱 문자 안에 스타일을 작성할 수 있다.
// styled.{태그명} EX) styled.div
const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: #a6f78b;
`;

function Header({ title, description }: Props) {
    // js

    // 변수의 경우 function 안에서 정의하는 것이 좋다.
    // const name = "유선우";
    // view
    // 1. return 아래의 영역은 jsx 영역임
    // 2. jsx영역에서는 카멜 케이스로 사용함
    // 3. class 대신 className으로 작성함
    //return (
    //    <>
    //        <h1>{props.title}</h1>
    //        <h1>{props.description}</h1>
    //    </>
    //);
    return (
        // 빈 태그 대신 스타일이 포함된 태그로 입혀주었다.
        <HeaderContainer>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </HeaderContainer>
    );
    // 변수를 return 하는 경우 중괄호 안에 변수를 넣어준다.
    // return <h1>{name}</h1>;
}
export default Header;
