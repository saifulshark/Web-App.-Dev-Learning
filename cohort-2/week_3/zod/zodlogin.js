const zod=require('zod');
function validateLoginData(data) {
    const loginschema = zod.object({
        username: zod.string().length(6),
        email: zod.string().email(),
        password: zod.string().min(6).max(12)
    })
    const output =loginschema.safeParse(data);
    console.log(output.success);
}
validateLoginData({
    username: 'abcdef',
    email:'2001025@iot.bdu.ac.bd',
    password: 'sdf'
});