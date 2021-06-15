import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AddBooksHeader from '../Header/AddBooksHeader';


const AddBooks = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState();


    const onSubmit = data => {
        const bookInfo = {
            name: data.bookTitle,
            authorName: data.bookAuthor,
            bookPrice: data.bookPrice,
            bookId: data.bookId,
            imageUrl: imageURL
        };
        console.log(bookInfo);

        fetch(`https://hidden-anchorage-96552.herokuapp.com/addBooks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        })
            .then(res => console.log('server side res', res))
    };

    const handleImageUpload = e => {
        const imageInfo = new FormData();
        imageInfo.set('key', '3142b88ec7d1f986d0d52da6338bea68');
        imageInfo.append('image', e.target.files[0]);

        axios.post("https://api.imgbb.com/1/upload", imageInfo)
            .then(function (res) {
                setImageURL(res.data.data.display_url);
            })
            .catch(function (res) {
                console.log(res)
            })
    }
    return (
        <div>
            <AddBooksHeader />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="bookTitle" defaultValue="Book Name" ref={register} />
                    <br />
                    <input name="bookAuthor" defaultValue="Author Name" ref={register} />
                    <br />
                    <input name="bookPrice" defaultValue="Book Price" ref={register} />
                    <br />
                    <input name="bookId" defaultValue="Book ID" ref={register} />
                    <br />
                    <input name="photos" type="file" onChange={handleImageUpload} />
                    <br />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddBooks;