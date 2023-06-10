import { useQuery } from '@apollo/client'
import { BOOKS_BY_GENRE, ME } from '../queries'

const Recommend = (props) => {
	const user = useQuery(ME)
    const genre = user.data?.me.favoriteGenre
    const resultByGenre = useQuery(BOOKS_BY_GENRE, {
		variables: { genre: genre },
	})
	const books = resultByGenre.data?.booksByGenre

	if (!props.show || !books) {
		return null
	}

	return (
		<div>
			<h2>recommendation</h2>

			<h3>
				books in your favorite genre <strong>{genre}</strong>
			</h3>

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
		</div>
	)
}

export default Recommend
