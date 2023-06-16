import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/Login'
import { useApolloClient } from '@apollo/client'
import Recommend from './components/Recommend'

const App = () => {
	const [page, setPage] = useState('authors')
	const [token, setToken] = useState(null)
	const client = useApolloClient()

	const loginButtonChanger = () => {
		if (token) {
			return (
				<>
					<button onClick={() => setPage('add book')}>
						add book
					</button>
					<button onClick={() => setPage('recommend')}>
						recommendation
					</button>
				</>
			)
		} else {
			return <button onClick={() => setPage('login')}>login</button>
		}
	}

	const logout = () => {
		setToken(null)
		localStorage.clear()
		client.resetStore()
	}

	return (
		<div>
			<div>
				<button onClick={() => setPage('authors')}>authors</button>
				<button onClick={() => setPage('books')}>books</button>
				{loginButtonChanger()}
				{token && <button onClick={logout}>logout</button>}
			</div>

			<Authors show={page === 'authors'} />

			<Books show={page === 'books'} />

			<NewBook show={page === 'add book'} />

			<Login
				setToken={setToken}
				setPage={setPage}
				show={page === 'login'}
			/>

			{ token && (<Recommend show={page === 'recommend'} />)}
		</div>
	)
}

export default App
