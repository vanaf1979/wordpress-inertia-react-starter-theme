import {usePage} from "@inertiajs/react";

const Single = (props) => {

    const {post} = usePage().props

    return (
        <article>
            <h1>Single Post:</h1>
            <h3>{post.post_title}</h3>
            <div dangerouslySetInnerHTML={{__html: page.post_content}}></div>
        </article>
    );
};

export default Single