// import { useState } from "react";

import { useState } from "react";


// const SetPosts = () => {
//     const INITIAL_POST = {
//         title: "",
//         subtitle: "",
//         author: "",
//         createdAt: "",
//     };

//     const [post, setPost] = useState(INITIAL_POST);
//     const [posts, setPosts] = useState([]);

//     const createNewPost = (e) => {
//         e.preventDefault();
//         setPosts([...posts, { ...post, createdAt: new Date().toLocaleString() }]);
//         return setPost(INITIAL_POST);
//     };

//     return (
//         <div>
//             <form>
//                 <h5>
//                     Post title: {post.title} {post.subtitle} {post.author}
//                 </h5>
//                 <input
//                     type="text"
//                     placeholder="Enter title"
//                     onChange={(e) => setPost({ ...post, title: e.target.value })}
//                     value={post.title}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter subtitle"
//                     onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
//                     value={post.subtitle}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter auther"
//                     onChange={(e) => setPost({ ...post, author: e.target.value })}
//                     value={post.author}
//                 />
//                 <button
//                     onClick={createNewPost}
//                     disabled={!post.title | !post.subtitle | !post.author}
//                 >
//                     Create
//                 </button>
//             </form>

//             {!!posts.length && (
//                 <table border={1}>
//                     <thead>
//                         <tr>
//                             <th>no.</th>
//                             <th>title</th>
//                             <th>subtitle</th>
//                             <th>author</th>
//                             <th>created at</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {posts.map((post, i) => (
//                             <tr key={i}>
//                                 <td>{i + 1}</td>
//                                 <td>{post.title}</td>
//                                 <td>{post.subtitle}</td>
//                                 <td>{post.author}</td>
//                                 <td>{post.createdAt}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default SetPosts;

const SetPost = () => {

    const INITIAL_POST = {
        title: '',
        subtitle: '',
        author: '',
        createdAt: ''
    }

    const [post, setPost] = useState(INITIAL_POST);
    const [posts, setPosts] = useState([]);

    const createNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, { ...post, createdAt: new Date().toLocaleString() }]);
        return setPost(INITIAL_POST);
    }

    return (
        <div>
            <form>
                <h3>{post.title} {post.subtitle} {post.author}</h3>


                <input type="text"
                    placeholder="title"
                    onChange={e => setPost({ ...post, title: e.target.value })}
                />
                <input type="text"
                    placeholder="subtitle"
                    onChange={e => setPost({ ...post, subtitle: e.target.value })}
                />
                <input type="text"
                    placeholder="auther"
                    onChange={e => setPost({ ...post, author: e.target.value })}
                />

                <button
                    onClick={createNewPost}
                    disabled={!post.title || !post.subtitle || !post.author}
                >
                    create
                </button>

            </form>


            {!!posts.length && (
                <table border={1}>
                    <thead>
                        <tr>
                            <th>no.</th>
                            <th>title</th>
                            <th>subtitle</th>
                            <th>author</th>
                            <th>createdAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.subtitle}</td>
                                <td>{post.author}</td>
                                <td>{post.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>



    )
}

export default SetPost;





