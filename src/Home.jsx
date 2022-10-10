import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Reactの基本的な書き方</h1>
             <ul>
                <li><Link to='helloworld'>Hello World!</Link></li>
                <li><Link to='counter'>Counter</Link></li>
                <li><Link to='todolist'>Todoリスト</Link></li>
                <li><Link to='datafetch'>データフェッチ</Link></li>
             </ul>
        </div>
    )
}

export default Header;
