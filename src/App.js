import logo from "./logo.svg";
import "./App.css"; //ES6 문법

//modules 부품화
//jsx
//component 여러개의 코드 한번에 몰아 쓰기
//1. jsx 는 최상위에 부모 하나만 존재해야함. 만약 쓸모없는 태그를 생성하기 싫으면 <></> (프레그먼트) 로 감싸면 됨.
function App() {
    const myName = "one";
    return (
        <>
            <div className="App">
                <header className="App-header">
                    {/* {} 데이터바인딩 */}
                    <h1>
                        <span style={{ fontSize: "150px", color: "#61dafb", marginTop: "100px" }}>{myName}</span>
                    </h1>
                    <p>{100 + 1}</p>
                </header>
            </div>
        </>
    );
}

export default App;
