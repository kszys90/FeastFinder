
export async function getRandomNames(numUsers: number) {
    const url = `https://randomuser.me/api/?results=${numUsers}`;
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        const users = []
        const user = {
            name: {
                title: 'Mrs',
                first: 'John',
                last: 'Doe'
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/1.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
                thumbnail: "https://randomuser.me/ap…raits/thumb/men/1.jpg"
            }
        }
        for (let i = 0; i < numUsers; i++) {
            users.push(user)
        }
        return users
    }
}

export type userData = {
    gender?: string
    name: {
        title: string
        first: string
        last: string
    }
    location?: {
        street: {
            number: number
            name: string
        }
        city: string
        state: string
        country: string
        postcode: number
        coordinates: {
            latitude: string
            longitude: string
        }
        timezone: {
            offset: string
            description: string
        }
    }
    email?: string
    login?: {
        uuid: string
        username: string
        password: string
        salt: string
        md5: string
        sha1: string
        sha256: string
    }
    dob?: {
        date: string
        age: number
    }
    registered?: {
        date: string
        age: number
    }
    phone?: string
    cell?: string
    id?: {
        name: string
        value: string
    }
    picture?: {
        large: string
        medium: string
        thumbnail: string
    }
    nat?: string

}