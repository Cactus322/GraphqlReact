import { gql } from '@apollo/client'

export const ALL_BOOKS = gql`
    query {
        allBooks {
            published
            title
            author {
                name
            }
            genres
        }
    }
`

export const ALL_AUTHORS = gql`
    query {
        allAuthors {
            name
            bookCount
            born
        }
    }
`

export const BOOKS_BY_GENRE = gql`
    query($genre: String!) {
        booksByGenre(genre: $genre) {
            published
            title
            author {
                name
            }
            genres
        }
    }
`

export const ME = gql`
    query {
        me {
            username
            favoriteGenre
        }
    }    
`

export const CREATE_BOOK = gql`
    mutation (
        $title: String!
        $author: String!
        $published: Int!
        $genres: [String]!
    ) {
        addBook(
            title: $title
            author: $author
            published: $published
            genres: $genres
        ) {
            title
            author {
                name
            }
            published
            genres
        }
    }
`

export const EDIT_AUTHOR = gql`
    mutation ($name: String!, $born: Int!) {
        editAuthor(name: $name, born: $born) {
            name
            born
        }
    }
`

export const LOGIN = gql`
    mutation ($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            value
        }
    }
`
