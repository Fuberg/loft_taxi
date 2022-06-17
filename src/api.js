export const serverLogin = async (email, password) => { 
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success)
}

// export const serverLogin = async (email, password) => {
//     try {
//         const response = await fetch('https://loft-taxi.glitch.me/auth', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 email: email,
//                 password: password
//             })
//         })
//         const json = await response.json();
//         console.log(json)
//         return json;
//     }
//     catch (error) {
//         console.log(error);
//     }
// };