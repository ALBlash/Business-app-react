import useName from "./useName";
import Typography from '@mui/material/Typography'

// const CustomName = () => {

//     const [name, setName] = useName();


//     return (
//         <>
//             <p>name: {name}</p>
//             <input type="text" onChange={e => setName(e.target.value)} value={name} />
//         </>

//     )
// }

const CustomName = () => {
    const [name, setName] = useName()
    return (
        <>
            <Typography variant="h5" color="darkorange">{name}</Typography>
            <input type="text" onChange={e => setName(e.target.value)} />
        </>
    );
}

export default CustomName;