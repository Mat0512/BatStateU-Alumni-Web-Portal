const Main = (props) => {
    return (
        <main className="mt-18 ml-48">
            <div className="max-w-screen-xl h-full mx-auto min-h-xl py-4 px-10">
                {props.children}
            </div>
        </main>
    );
};

export default Main;
