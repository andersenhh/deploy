import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle,authorName,imageURL,bookDescription,bookPDFURL} = useLoaderData();
  const bookCategories = ["Fiction", "Non-Fiction", "Mistery", "Programming"];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };


  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
     
    const bookTitle = form.bookTitle.value;
    // console.log(bookTitle);
    const authorName = form.authorName.value;
    // console.log(authorName);

    const imageURL = form.imageURL.value;
    // console.log(imageURL);

    const category = form.categoryName.value;
    // console.log(category);

    const bookDescription = form.bookDescription.value;
    // console.log(bookDescription);

    const bookPDFURL = form.bookPDFURL.value;
    // console.log(bookPDFURL);


    const updateBookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
    // console.log(bookObj)

    //update book data 
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book is Updated Sucessfully")
   
    })


  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Book</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1580px] flex-col flex-wrap gap-4">

        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            {/* imageURL */}
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Image URL"
              required
              defaultValue={imageURL}
    
            />
          </div>
          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* bookdescription */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            id="description"
            name="bookDescription"
            placeholder="Description"
            required
            className="full-rounded"
            rows={4}
            defaultValue={bookDescription}

          />
        </div>

        {/* book PDF Url */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF Url" />
        </div>
        <TextInput id="bookPDFURL" type="text" name="bookPDFURL" placeholder="book PDF Url" defaultValue={bookPDFURL}  required />
      </div>

      <Button type="submit" className="mt-5">
        Update
      </Button>

      </form>
    </div>
  );
}

export default EditBooks