function profile() {
    return (
        <div>
            <h1>Profile card challenge</h1>
            <ProfileCard
                name="John"
                age={30}
                greetings={
                    <div>
                        <strong>Hi john, have a wonderful day! </strong>
                    </div>
                }
            > 
                <p> Hobbies: Reading, Hiking, Coding </p>
                <button>Contact</button> 
            </ProfileCard>

            <ProfileCard
                name="Jane"
                age={28}
                greetings={
                    <div>
                        <strong>Hi jane, have a wonderful day! </strong>
                    </div>
                }
            >
                <p> Hobbies: Painting, Dancing, Writing </p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}

export default profile;

function ProfileCard({name, age, greetings, children}) {
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>{greetings}</p>
            <div>{children}</div>
        </>
    );
}