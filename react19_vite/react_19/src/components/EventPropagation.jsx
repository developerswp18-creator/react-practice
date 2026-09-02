export const EventPropagation = () => {
    const handleGrandParentClick = () => {
        console.log("Grand Parent Div Clicked");
    };

    const handleParentClick = (event) => {
        console.log("Parent Div Clicked");
        event.stopPropagation();
    }
    const handleChildClick = (event) => {
        event.stopPropagation();
        console.log("Child Div Clicked");
    };
    return (
        <section className="main-div">
            <div className="g-div" onClick=
            {handleGrandParentClick}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    );
};