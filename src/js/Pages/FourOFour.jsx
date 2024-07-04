import {usePage} from "@inertiajs/react";

const FourOFour = (props) => {

    const {content} = usePage();

    return (
        <section>
            <h1>404:</h1>
            <h3>{props.content}</h3>
        </section>
    );
};

export default FourOFour