// מקבלים אובייקט שטוח
// בגלל זה יש את התמונה ככה
// מקבל שטוח מחזיר היררכי מסודר

// biznumber and userId 
// i dont want the user to decide it so that why we include it
// only when we are about to send the updated info to the server
export const normalizeCard = card => ({
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.webUrl,
    image: {
        url: card.imageUrl,
        alt: card.imageAlt
    },
    address: {
        state: card.state,
        country: card.country,
        city: card.city,
        street: card.street,
        houseNumber: card.houseNumber,
        zip: card.zip,
    }
})