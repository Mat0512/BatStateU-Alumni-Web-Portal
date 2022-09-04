const Main = (props) => {
    return (
        <main className="mt-16 ml-56 h-100">
            <div className="max-w-screen-xl h-full mx-auto py-4 px-16">
                {props.children}
            </div>
        </main>
    );
};

export default Main;
