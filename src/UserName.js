// function UserName({ userName }) {
//     console.log(userName);
//     return <p>Hello {userName}</p>;
// }
function UserName(props) {
    console.log(props.userName);
    return <p>Hello {props.userName}</p>;
}
export default UserName;
