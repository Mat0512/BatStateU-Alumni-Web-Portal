import "./Main.css";

const Main = (props) => {
    return (
        <main>
            <div className="main-wrapper">{props.children}</div>
        </main>
    );
};

export default Main;
