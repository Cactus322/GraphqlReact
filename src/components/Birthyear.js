import { useMutation } from '@apollo/client'
import { useState } from 'react'
import Select from 'react-select'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'

const Birthday = ({ authors }) => {
    const [born, setBorn] = useState('')
    const [selectedName, setSelectedName] = useState(null)

    const [editAuthor] = useMutation(EDIT_AUTHOR, {
        refetchQueries: [{ query: ALL_AUTHORS }],
    })

    const options = authors.map((a) => ({ value: a.name, label: a.name }))

    const submit = async (event) => {
        event.preventDefault()

        const name = selectedName.value

        editAuthor({ variables: { name, born } })

        setSelectedName(null)
        setBorn('')
    }

    return (
        <div>
            <h2>Set birthyear</h2>
            <form onSubmit={submit}>
                <div>
                    <Select
                        defaultValue={selectedName}
                        onChange={setSelectedName}
                        options={options}
                    />
                </div>

                <div>
                    <label htmlFor="born">born</label>
                    <input
                        id="born"
                        value={born}
                        onChange={({ target }) =>
                            setBorn(parseInt(target.value))
                        }
                    />
                </div>

                <button type="submit">update author</button>
            </form>
        </div>
    )
}

export default Birthday
