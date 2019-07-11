import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: null

        };
        Object.prototype.map = function (func) {
            const new_arr = [];
            for(let i in this){

                if(this.hasOwnProperty(i)){
                    new_arr.push(func(this[i], i));
                }
            }

            return new_arr;
        };
        // this.enterNumber = this.enterNumber.bind(this);
    }

    // enterNumber(ev){
    //     let result = this.state.result;
    //     const target = ev.currentTarget;
    //     result = result + target.innerText;
    //     this.setState({
    //         result: result
    //     });
    // }

    componentDidMount() {
        // const a = fetch('/main/get').then(ans => ans.json());
        // console.log(a);
        fetch('/main/get').then(ans => ans.json())
            .then(res => {
                this.setState({
                    table: res
                })
            });
    }



    render() {
        return (
            <div>
                <h1>My React App 4!</h1>
                <div className="calc">
                    {/*<div>Результат: <span>{this.state.result}</span></div>*/}
                    {/*<table border={1}>*/}
                    {/*    <tbody>*/}
                    {/*    <tr>*/}
                    {/*        <td onClick={this.enterNumber}>*/}
                    {/*            1*/}
                    {/*        </td>*/}
                    {/*        <td onClick={this.enterNumber}>2</td>*/}
                    {/*        <td onClick={this.enterNumber}>3</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td onClick={this.enterNumber}>4</td>*/}
                    {/*        <td onClick={this.enterNumber}>5</td>*/}
                    {/*        <td onClick={this.enterNumber}>6</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td onClick={this.enterNumber}>7</td>*/}
                    {/*        <td onClick={this.enterNumber}>8</td>*/}
                    {/*        <td onClick={this.enterNumber}>9</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td onClick={this.enterNumber}>0</td>*/}
                    {/*        <td onClick={this.enterNumber}>+</td>*/}
                    {/*        <td onClick={this.enterNumber}>-</td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}
                    {/*</table>*/}
                    <table>
                        {
                            console.log(this.state.table)
                            // this.state.table ?
                            //     this.state.table.map( (el, key) =>
                            //         <tr>
                            //             <td>Head: {key}</td>
                            //             {
                            //                 el.map( el2 =>
                            //                     <td>{el2}</td>
                            //                 )
                            //             }
                            //         </tr>
                            //     ) :
                            //     <tr><td>Зогрузка....</td></tr>
                        }
                    </table>

                </div>
            </div>
        );
    }
}

export default App;
