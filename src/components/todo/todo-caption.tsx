import * as React from 'react'

interface ITodoCaptionProps {
  onAdd: (value: string) => void
}

interface ITodoCaptionState {
  value: string
}

class TodoCaption extends React.Component<ITodoCaptionProps, ITodoCaptionState> {
  state = {
    value: '',
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value,
    })
  }

  onAdd = (value: string) => {
    this.setState({ value: '' })
    this.props.onAdd(value)
  }

  render() {
    const value = this.state.value

    return (
      <div className="field has-addons">
        <div className="control">
          <input className="input is-info" type="text" placeholder="Enter Todo" onChange={this.onChange} value={value} />
        </div>
        <div className="control">
          <button className="button is-info" onClick={() => this.onAdd(value)}>
            Add
          </button>
        </div>
      </div>
    )
  }
}

export default TodoCaption
