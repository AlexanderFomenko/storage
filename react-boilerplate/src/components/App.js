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
                console.log(i)
                if(this.hasOwnProperty(i)){
                    new_arr.push(func(this[i], i));
                }
            }

            return new_arr;
        };
        
        
    }
    componentDidMount() {
        
        fetch('/main/get').then(ans => ans.json())
            .then(res => {
                this.setState({
                    table: res
                })
            });

          
    }

    render() {
        console.log(this.state.table)
        return (
            <div>
                <h1>My React App 4!</h1>
                <table>
                    {
                    this.state.table ?
                        this.state.table.map( (el, key) =>
                            <tr>
                                
                                 {
                                    el.map( el2 =>
                                        <td>{el2}</td>
                                        )
                                }       
                            </tr>
                        ):
                        <tr><td>Зогрузка....</td></tr>
                    
                    }
                </table>
                    
                    

                
            </div>
        );
    }
}

export default App;
