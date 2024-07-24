import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({ title: "", author: "" })
    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook("")
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input id="title" name="title" value={newBook.title} onChange={handleInputChange}
                    />
                    <label htmlFor="author">Authot: </label>
                    <input id="author" name="author" value={newBook.author} onChange={handleInputChange}
                    />
                    <button type="submit">Submit your book</button>
                </form>
            </div>
            <div className="bookCardsDiv">{
                books.map((book, index) => {
                    return (
                        <div key={index}>
                            <p>{book.title} by {book.author}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Bookshelf