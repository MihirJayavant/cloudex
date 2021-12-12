import * as React from 'react'

interface IPostItemProps {
  title: string
  body: string
}

const postItem = (props: IPostItemProps) => (
  <div className="card">
    <div className="card-content">
      <p className="title">“{props.title}”</p>
      <p className="subtitle">{props.body}</p>
    </div>
  </div>
)

export default postItem
