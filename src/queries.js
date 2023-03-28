import { gql } from '@apollo/client'

export const ALL_BOOKS = gql`
    query {
        allBooks {
            author
            published
            title
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

export const CREATE_BOOK = gql`
    mutation (
        $title: String!
        $author: String!
        $published: String
        $genres: [String]
    ) {
        addBook(
            title: $title
            author: $author
            published: $published
            genres: $genres
        ) {
            title
            author
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
