import * as React from 'react'

interface ITodoCaptionProps {
  value: string
  change: (event: React.ChangeEvent<HTMLInputElement>) => void
  click: () => void
}

const todoCaption = (props: ITodoCaptionProps) => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input
          className="input is-info"
          type="text"
          placeholder="Enter Todo"
          onChange={props.change}
          value={props.value}
        />
      </div>
      <div className="control">
        <button className="button is-info" onClick={props.click}>
          Add
        </button>
      </div>
    </div>
  )
}

export default todoCaption
