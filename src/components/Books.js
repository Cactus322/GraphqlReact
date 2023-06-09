import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'
import { BOOKS_BY_GENRE } from '../queries'
import { useState } from 'react'

const Books = (props) => {
	const [genre, setGenre] = useState('')
	const result = useQuery(ALL_BOOKS)
	const resultByGenre = useQuery(BOOKS_BY_GENRE, {
		variables: { genre: genre },
	})

	const books = genre ? resultByGenre.data?.booksByGenre : result.data?.allBooks

	if (!props.show || !books) {
		return null
	}

	return (
		<div>
			<h2>books</h2>

			{genre && (
				<h3>
					in genre <strong>{genre}</strong>
				</h3>
			)}

			<table>
				<tbody>
					<tr>
						<th></th>
						<th>author</th>
						<th>published</th>
					</tr>
					{books.map((b) => {
						return (
							<tr key={b.title}>
								<td>{b.title}</td>
								<td>{b.author.name}</td>
								<td>{b.published}</td>
							</tr>
						)
					})}
				</tbody>
			</table>

			<div>
				<button onClick={() => setGenre('horror')}>horror</button>
				<button onClick={() => setGenre('crime')}>crime</button>
				<button onClick={() => setGenre('classic')}>classic</button>
				<button onClick={() => setGenre('refactoring')}>
					refactoring
				</button>
				<button onClick={() => setGenre('design')}>design</button>
				<button onClick={() => setGenre('patterns')}>patterns</button>
				<button onClick={() => setGenre('')}>all genres</button>
			</div>
		</div>
	)
}

export default Books
