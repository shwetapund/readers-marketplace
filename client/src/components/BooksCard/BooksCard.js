import React from 'react'

function BooksCard({cover, price, title, }) {
  return (
    <div class="card" style="width: 18rem;">
  <img src={cover} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{title}</p>
    <h5 class="card-title">{price}</h5>
    <a href="" class="btn btn-primary">Add +</a>
  </div>
</div>
  )
}

export default BooksCard