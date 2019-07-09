import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            a: 1,
            b: 2,
            table: null
        }
        this.enterNumber = this.enterNumber.bind(this);
    }

    enterNumber(ev){
        let result = this.state.result;
        const target = ev.currentTarget;
        result = result + target.innerText;
        this.setState({
            result: result
        });
    }

    componentDidMount() {
        fetch('/main/get').then(ans => ans.json())
            .then(res => {
                console.log(res);
                this.setState({
                    result: res.kek[0],
                    table: res.kek
                })
            });
    }

    render() {
        return (
            <div>
                <h1>My React App 4!</h1>
                <div className="calc">
                    <div>Результат: <span>{this.state.result}</span></div>
                    <table border={1}>
                        <tbody>
                        <tr>
                            <td onClick={this.enterNumber}>
                                1
                            </td>
                            <td onClick={this.enterNumber}>2</td>
                            <td onClick={this.enterNumber}>3</td>
                        </tr>
                        <tr>
                            <td onClick={this.enterNumber}>4</td>
                            <td onClick={this.enterNumber}>5</td>
                            <td onClick={this.enterNumber}>6</td>
                        </tr>
                        <tr>
                            <td onClick={this.enterNumber}>7</td>
                            <td onClick={this.enterNumber}>8</td>
                            <td onClick={this.enterNumber}>9</td>
                        </tr>
                        <tr>
                            <td onClick={this.enterNumber}>0</td>
                            <td onClick={this.enterNumber}>+</td>
                            <td onClick={this.enterNumber}>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        {
                            this.state.table ?
                                this.state.table.map( el =>
                                    <tr><td>{el}</td></tr>):
                                <tr><td>Зогрузка....</td></tr>
                        }
                    </table>

                </div>
            </div>
        );
    }
}

export default App;
