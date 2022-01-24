class Form extends React.Component {
    state = {
        city: "Zermatt",
        description: "nice town",
        isLiked: true,
        number: "1",
    }
    handleCityChange = e => {
        this.setState({
            city: e.target.value,
        })
    }

    handleCityDescripitionChange = e => {
        this.setState({
            description: e.target.value,
        })
    }

    handleLikeCheck(e){
        this.setState({
            isLiked: e.target.checked,
        })
    }

    handleVisitNumber = (e) =>{
        this.setState({
            number: e.target.value,
        })
    }

    render() {
        return (
            <>
                <label>Provide city:
                    <input onChange={this.handleCityChange} value={this.state.city} type="text" />
                </label>
                <br />
                <label>Write something about this town
                    <br/><textarea onChange={this.handleCityDescripitionChange} value={this.state.description}></textarea>
                </label>
                <br />
                <label>Do you like this town?
                    <input  type="checkbox" checked={this.state.isLiked} onChange={this.handleLikeCheck}/>

                </label>
                <br />
                <select value={this.state.number} onChange={this.handleVisitNumber.bind(this)}>How many times have you been there?
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