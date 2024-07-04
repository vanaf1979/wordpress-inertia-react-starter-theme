import {usePage} from "@inertiajs/react";

const Page = (props) => {

    const {page} = usePage().props

    return (
        <section>
            <h1>Page:</h1>
            <h3>{page.post_title}</h3>
            <div dangerouslySetInnerHTML={{__html: page.post_content}}></div>
        </section>
    );
};

export default Page