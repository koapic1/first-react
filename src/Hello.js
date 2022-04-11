import World from "./World";
import UserName from "./UserName";
import { useState } from "react"; // default없이 export 로만 나갔을 경우 {} 사용

function Hello({ userAge }) {
    //Hook useState
    function showName() {
        console.log("my name is onee");
    }
    function showTxt(txt) {
        console.log(txt);
    }
    //let name = "one";
    //console.log(useState({ neme: "aaa" }));
    //useState = 상태를 바꿔서 화면을 그려야할때 사용
    //미성년자인지 아닌지 확인
    const [name, setName] = useState("one"); // 구조 분해 할당
    let [age, setAge] = useState(33);
    const alertMsg = userAge > 19 ? "성인입니다" : "미성년자 입니다";
    //let age = 33;
    return (
        <div>
            {/* <h1 onClick={showName}>Hello</h1>
            <div>
                <button
                    onClick={function () {
                        console.log("my name is one");
                    }}
                >
                    name
                </button>
            </div>
            <div>
                <button onClick={showName}>name02</button>
            </div>
            <div>
                <input
                    type="text"
                    onChange={function (e) {
                        showTxt(e.target.value);
                    }}
                />
            </div> */}
            <h1>
                {name} ({userAge}) {alertMsg}
            </h1>
            <h2>
                {age}
                <button
                    onClick={() => {
                        setAge(++age);
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        setAge(--age);
                    }}
                >
                    -
                </button>
            </h2>
            <button
                onClick={() => {
                    // if (name === "one") {
                    //     setName("원");
                    // } else {
                    //     setName("one");
                    // }
                    setName(name === "one" ? "원" : "one");
                }}
            >
                Change Name
            </button>
            <hr />
            <h1>{name}</h1>
            {/* props = 부모 컴퍼넌트에서 자식 컴퍼넌트로 값을 전달할 때 사용 */}
            <UserName userName={name} />
        </div>
    );
}

export default Hello;
// 부품 만들기 내보내기를 해야 다른곳에서 사용 가능
