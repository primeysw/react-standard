import { useState } from "react";
import styled from "styled-components";

/**
 * @description Counter 컴포넌트
 */

// view를 보기 좋게 하기 위해 styled component를 설정해줌
const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }
    button {
        margin-right: 3px;
        width: 30px;
        height: 30px;
    }
`;

function Counter() {
    // state
    // read-only, update
    const [count, setCount] = useState<number>(0);

    // event
    const onIncrease = () => {
        // count가 Readonly이기 때문에 몇 번을 불러와도 한 번만 호출하는 형태가 된다.
        // 값을 직접 바꿔줄 때는 싱크가 맞지 않을 수 있기 때문에 함수 형태로 쓰는 것이 좋음
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // 이런 식으로 함수 형태로 넣을 때는 몇 번을 불러오면 부른 횟수만큼 업데이트 해줌
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
    };

    const onDecrease = () => {
        // setCount(count - 1);

        setCount((prevState) => prevState - 1);
        setCount((prevState) => prevState - 1);
        setCount((prevState) => prevState - 1);
    };

    // view
    return (
        <Wrap>
            <hr />
            <h1>Counter : {count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <hr />
        </Wrap>
    );
}
export default Counter;
