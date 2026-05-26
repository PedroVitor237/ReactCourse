function Title(props) {
    return (
        <h1 className="text-5xl text-slate-100 font-bold text-center mb-4">
            {props.children}
        </h1>
    );
}

export default Title;