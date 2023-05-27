import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'

const App = () => {
    const [page, setPage] = useState('authors')
    const [token, setToken] = useState(null)

    const loginButtonChanger = () => {
        if (token) {
            return <button onClick={() => setPage('add book')}>add book</button>
        } else {
            return <button onClick={() => setPage('login')}>login</button>
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => setPage('authors')}>authors</button>
                <button onClick={() => setPage('books')}>books</button>
                {loginButtonChanger()}
                {token && <button>logout</button>}
            </div>

            <Authors show={page === 'authors'} />

            <Books show={page === 'books'} />

            <NewBook show={page === 'add'} />
        </div>
    )
}

export default App
