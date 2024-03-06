// import { Card, CardActionArea, Typography } from "@mui/material";
// import CardHead from "./CardHead";
// import CardBody from "./CardBody";
// import CardActionBar from "./CardActionBar";

// const LoopCadrs = () => {

//     const cards = [
//         {
//             _id: "639221ec70962dd4df2b7091",
//             title: "Business Name",
//             subtitle: "Headline",
//             description: "some desc",
//             phone: "0500000000",
//             email: "admin@gmail.com",
//             web: "https://www.hackampus.com",
//             image: {
//                 url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg",
//                 alt: "Wowww this is Apple Watch",
//                 _id: "639221ec70962dd4df2b709c",
//             },
//             address: {
//                 state: "israel",
//                 country: "israel",
//                 city: "Tel Aviv",
//                 street: "STREET",
//                 houseNumber: 1,
//                 zip: 123456,
//                 _id: "639221ec70962dd4df2b709d",
//             },
//             bizNumber: 6480165,
//             createdAt: "2022-12-08T17:42:04.379Z",
//             user_id: "638503e4caa1f3d9dbbcf7bc",
//             likes: ["639221ec70962dd4df2b70a3"],
//             __v: 0,
//         },
//         {
//             _id: "639221ec70962dd4df2b7092",
//             title: "Music",
//             subtitle: "Headline",
//             description: "some desc",
//             phone: "0500000000",
//             email: "admin@gmail.com",
//             web: "https://www.hackampus.com",
//             image: {
//                 url: "https://images.pexels.com/photos/1384605/pexels-photo-1384605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                 alt: "Wowww this is Apple Watch",
//                 _id: "639221ec70962dd4df2b709c",
//             },
//             address: {
//                 state: "israel",
//                 country: "israel",
//                 city: "Tel Aviv",
//                 street: "STREET",
//                 houseNumber: 1,
//                 zip: 123456,
//                 _id: "639221ec70962dd4df2b709d",
//             },
//             bizNumber: 6480165,
//             createdAt: "2022-12-08T17:42:04.379Z",
//             user_id: "638503e4caa1f3d9dbbcf7bc",
//             likes: ["639221ec70962dd4df2b70a3"],
//             __v: 0,
//         },
//         {
//             _id: "639221ec70962dd4df2b7093",
//             title: "Good Food",
//             subtitle: "Headline",
//             description: "some desc",
//             phone: "0500000000",
//             email: "admin@gmail.com",
//             web: "https://www.hackampus.com",
//             image: {
//                 url: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                 alt: "Wowww this is Apple Watch",
//                 _id: "639221ec70962dd4df2b709c",
//             },
//             address: {
//                 state: "israel",
//                 country: "israel",
//                 city: "Tel Aviv",
//                 street: "STREET",
//                 houseNumber: 1,
//                 zip: 123456,
//                 _id: "639221ec70962dd4df2b709d",
//             },
//             bizNumber: 6480165,
//             createdAt: "2022-12-08T17:42:04.379Z",
//             user_id: "638503e4caa1f3d9dbbcf7bc",
//             likes: ["639221ec70962dd4df2b70a3"],
//             __v: 0,
//         }
//     ]

//     if (!cards.length) {
//         return <Typography>No cards to genarate</Typography>
//     }

//     return cards.map((item, index) =>
//         <Card sx={{ minWidth: 280, maxWidth: 350 }} itemID={item._id}>
//             <CardActionArea>
//                 <CardHead image={item.image} />
//                 <CardBody card={item} />
//                 <CardActionBar />
//             </CardActionArea>
//         </Card>
//     )

// }

// export default LoopCadrs;