const normalizUpdatedUser = (user) => ({
    name: {
        first: user.first,
        last: user.last,
        middle: user.middle
    },
    phone: user.phone,
    image: {
        url: user.url,
        alt: user.alt
    },
    address: {
        state: user.state,
        country: user.country,
        city: user.city,
        street: user.street,
        houseNumber: user.houseNumber,
        zip: user.zip,
    }
})

export default normalizUpdatedUser;