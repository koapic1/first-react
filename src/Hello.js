import World from "./World";
import { useState } from "react"; // default없이 export 로만 나갔을 경우 {} 사용

function Hello() {
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
    const [name, setName] = useState("one"); // 구조 분해 할당
    let [age, setAge] = useState(33);
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
            <h1>{name}</h1>
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
        </div>
    );
}

export default Hello;
// 부품 만들기 내보내기를 해야 다른곳에서 사용 가능
