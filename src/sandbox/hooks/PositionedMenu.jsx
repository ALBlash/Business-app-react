// import { Box, Button, OutlinedInput, Typography } from "@mui/material";
// import { Box, Divider, Typography, Button } from "@mui/material";
// import { useState } from "react";

// import { useState } from "react";
// import Button from '@mui/material/Button'
// import { Menu, MenuItem } from "@mui/material";

// const SetPost = () => {

//     const INITIAL_POST = {
//         title: '',
//         createdAt: '',
//     }
//     const [post, setPost] = useState(INITIAL_POST)
//     const [posts, setPosts] = useState([])

//     const createNewPost = (e) => {
//         e.preventDefault();
//         setPosts([...posts, { ...post, createdAt: new Date().toLocaleDateString() }])
//         return setPost(INITIAL_POST)
//     }

//     return (
//         <>
//             <Box sx={{ display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
//                 <Typography>{post.post}</Typography>
//                 <OutlinedInput placeholder="new post" onChange={e => setPost({ ...post, title: e.target.value })} />
//                 <Button variant="contained" color="inherit" disabled={!post.title} onClick={createNewPost}>
//                     Create
//                 </Button>

//                 {!!posts.length && (
//                     <table border={2}>
//                         <thead>
//                             <tr>
//                                 <th>no</th>
//                                 <th>title</th>
//                                 <th>createAt</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {posts.map((post, i) => (
//                                 <tr key={i}>
//                                     <td>{i + 1}</td>
//                                     <td>{post.title}</td>
//                                     <td>{post.createdAt}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </Box>
//         </>
//     );
// };
// export default SetPost;



// const useStateWithObj = () => {
//     const INITIAL_USER = {
//         name: {
//             first: '',
//             last: ''
//         },
//         email: '',
//         age: '',
//     }
//     const [user, setUser] = useState(INITIAL_USER)

//     return (
//         <>
//             <form>
//                 <span>
//                     your name is:
//                     <h5>
//                         {user.name.first} {user.name.last}
//                     </h5>
//                 </span>

//                 <span>
//                     your email is:
//                     <h5>{user.email}</h5>
//                 </span>
//                 <span>
//                     your age is:
//                     <h5>{user.age}</h5>
//                 </span>
//                 <Divider />

//                 <input type="text" placeholder="first name" onChange={(e) => setUser({ ...user, name: { ...user.name, first: e.target.value } })} />
//                 <input type="text" placeholder="last name" onChange={(e) => setUser({ ...user, name: { ...user.name, last: e.target.value } })} />
//                 <input type="text" placeholder="email" onChange={e => setUser({ ...user, email: e.target.value })} />
//                 <input type="text" placeholder="age" onChange={e => setUser({ ...user, age: e.target.value })} />
//             </form>
//         </>
//     )


// }
// export default useStateWithObj




// const useStateWithFunction = () => {

//     const [count, setCount] = useState(0);

//     const changeAmount = (term = '') => {
//         if (term === 'plus') {
//             return setCount(count + 1)
//         } else if (term === 'minus') {
//             return setCount(count - 1)
//         } else if (term === 'multiply') {
//             return setCount(count * 2)
//         }
//         else return setCount(0)
//     }

//     return (
//         <>
//             <Typography variant="h3" color="initial">{count}</Typography>

//             <Box>
//                 <Button variant="outlined" color="primary" onClick={() => changeAmount("plus")}>
//                     +
//                 </Button>
//                 <Button variant="outlined" color="primary" onClick={() => changeAmount("minus")}>
//                     -
//                 </Button>
//                 <Button variant="outlined" color="primary" onClick={() => changeAmount("multiply")}>
//                     multiply
//                 </Button>
//                 <Button variant="outlined" color="primary" onClick={() => changeAmount()}>
//                     reset
//                 </Button>
//             </Box>
//         </>
//     )

// }
// export default useStateWithFunction;

// my version works gr8 but returns undefined
// import { useState } from "react"
// import Button from '@mui/material/Button'

// const SetPost = () => {
//     const INITIAL_POST = {
//         title: "",
//         subtitle: "",
//         author: "",
//         createdAt: ""
//     }

//     const [post, setPost] = useState(INITIAL_POST);
//     const [posts, setPosts] = useState([]);

//     const handleButtonClick = () => {
//         setPosts((prevPosts) => [...prevPosts, { ...posts }])
//         setPost(INITIAL_POST);
//     }

//     return (
//         <>
//             <form>
//                 <div>
//                     <input placeholder="title" type="text" id="title" onChange={(e) => setPost({ ...post, title: e.target.value })} />
//                 </div>
//                 <div>
//                     <input placeholder="subtitle" type="text" id="subtitle" onChange={(e) => setPost({ ...post, subtitle: e.target.value })} />
//                 </div>
//                 <div>
//                     <input placeholder="author" type="text" id="auther" onChange={(e) => setPost({ ...post, author: e.target.value })} />
//                 </div>
//                 <Button variant="contained" color="primary" onClick={handleButtonClick} disabled={!post.title || !post.subtitle || !post.author}>
//                     Add Post
//                 </Button>
//             </form>
//             <div>
//                 {posts.map((p, index) => (
//                     <div key={index}>
//                         <p>{`Title: ${p.title}, Subtitle: ${p.subtitle}, Author: ${p.author}`}</p>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }
// export default SetPost




// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// export default function PositionedMenu() {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <div>

//             <Button
//                 id="demo-positioned-button"
//                 aria-controls={open ? 'demo-positioned-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}
//             >
//                 Dashboard
//             </Button>
//             <Menu
//                 id="demo-positioned-menu"
//                 aria-labelledby="demo-positioned-button"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                 }}
//             >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                 <MenuItem onClick={handleClose}>Logout</MenuItem>
//             </Menu>
//         </div>
//     );
// }