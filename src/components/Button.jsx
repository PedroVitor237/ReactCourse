function Button(props) {
    return (
        <button 
        className="bg-slate-400 text-white p-2 rounded mb-2"
        {...props} // Spread the props to allow passing any additional attributes (like onClick, etc.)
        >
            {props.children} {/* Render the children passed to the Button component */}
        </button>
    );
}

export default Button;
