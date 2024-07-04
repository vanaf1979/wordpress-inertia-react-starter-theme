import {Link, usePage} from "@inertiajs/react";

const Index = (props) => {

    const {posts} = usePage().props;

    return (
        <section>
            <h1>List of Posts:</h1>
            {posts.map((post) => {
                return (
                    <article key={post.id}>
                        <Link href={post.post_name}>
                            <h3>{post.post_title}</h3>
                        </Link>
                    </article>
                )
            })}
        </section>
    );
};

export default Index