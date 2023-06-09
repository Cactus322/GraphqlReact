import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { LOGIN } from '../queries'

const Login = ({ show, setToken, setPage }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [login, result] = useMutation(LOGIN)

	useEffect(() => {
		if (result.data) {
			const token = result.data.login.value
			setToken(token)
			setPage('authors')
			localStorage.setItem('user-token', token)
		}
	}, [result.data])

	if (!show) {
		return null
	}

	const submit = async (event) => {
		event.preventDefault()

		login({ variables: { username, password } })

		setUsername('')
		setPassword('')
	}

	return (
		<form onSubmit={submit}>
			<div>
				<label htmlFor="username">name</label>
				<input
					id="username"
					type="text"
					onChange={({ target }) => setUsername(target.value)}
				/>
			</div>

			<div>
				<label htmlFor="password">password</label>
				<input
					id="password"
					type="password"
					onChange={({ target }) => setPassword(target.value)}
				/>
			</div>

			<button type="submit">submit</button>
		</form>
	)
}

export default Login
