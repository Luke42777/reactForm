class Form extends React.Component {
    state = {
        city: "Zermatt",
        description: "nice town",
        isLiked: true,
        number: "1",
    }
    handleChange = e => {
        if(e.target.type === "checkbox"){
            this.setState({
                [e.target.name]: e.target.checked,
            })
        }
       else{
        this.setState({
            [e.target.name]: e.target.value,
        })
       }
    }

    render() {
        return (
            <>
                <label>Provide city:
                    <input name="city" onChange={this.handleChange} value={this.state.city} type="text" />
                </label>
                <br />
                <label>Write something about this town
                    <br/><textarea name="description" onChange={this.handleChange} value={this.state.description}></textarea>
                </label>
                <br />
                <label>Do you like this town?
                    <input name="isLiked"  type="checkbox" checked={this.state.isLiked} onChange={this.handleChange}/>

                </label>
                <br />
                <select name="number" value={this.state.number} onChange={this.handleChange.bind(this)}>How many times have you been there?
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">more</option>
                </select>
            </>
        )
    }
}


ReactDOM.render(<React.StrictMode><Form /></React.StrictMode>, document.getElementById("root"));