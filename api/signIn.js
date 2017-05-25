const signIn = (email, password) => (
    fetch('http://nhatrogan.com/api/v1/login',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signIn;
