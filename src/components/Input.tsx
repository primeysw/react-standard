import styled from "styled-components";
import { ChangeEvent, useState, useEffect } from "react";

/**
 * @description Input 컴포넌트
 */

const Wrap = styled.div`
    padding: 15px;
    h1 {
        font-size: 2em;
    }
    input {
        margin-top: 10px;
        padding: 10px;
    }
`;

function Input() {
    // state
    const [inputValue, setInputValue] = useState<string>("");

    // event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        //
        const value = e.target.value;
        setInputValue(value);
        // setInputValue(e.target.value);
    };

    // watch
    // useEffect의 경우 화면에 변경사항이 생길때마다 계속 호출된다.
    // 따라서 두번째 parameter에 빈 배열로 넣어준다.
    // 빈 배열을 넣어주게 되면 초기 1회만 호출하게 된다.

    // useEffect(() => {
    //     console.log(new Date());
    // }, []);

    // watch
    useEffect(() => {
        //
    }, [inputValue]);

    // view
    return (
        <Wrap>
            <h1>Input : {inputValue}</h1>
            <input value={inputValue} onChange={onChange} />
            {/* onChange={(e) => onChange(e)}
                이런 형태로 작성하지 않아도 위에서 이벤트를 선언할 때 작성해주면 된다.
                
                onChange의 값에서 이벤트 값을 파라미터로 받아서 처리한다.
            */}
        </Wrap>
    );
}
export default Input;
