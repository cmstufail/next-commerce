import { NextResponse } from 'next/server'

let users = [
    {
        id: '1',
        email: 'user@example.com',
        password: 'password',
        name: 'Demo User'
    }
]

export async function POST( request ) {
    try {
        const { name, email, password } = await request.json()

        // Validation
        if ( !name || !email || !password ) {
            return NextResponse.json(
                { error: 'Name, email and password are required' },
                { status: 400 }
            )
        }

        if ( password.length < 6 ) {
            return NextResponse.json(
                { error: 'Password must be at least 6 characters' },
                { status: 400 }
            )
        }

        // Check if user already exists
        const existingUser = users.find( user => user.email === email )
        if ( existingUser ) {
            return NextResponse.json(
                { error: 'User already exists with this email' },
                { status: 409 }
            )
        }

        // Create new user
        const newUser = {
            id: ( users.length + 1 ).toString(),
            name,
            email,
            password,
        }

        users.push( newUser )
        console.log( 'New user registered:', newUser )

        return NextResponse.json(
            { message: 'User created successfully', user: { id: newUser.id, name: newUser.name, email: newUser.email } },
            { status: 201 }
        )

    } catch ( error ) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// GET request for testing
export async function GET() {
    return NextResponse.json( { users } )
}