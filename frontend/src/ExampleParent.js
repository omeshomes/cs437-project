import React, {useState} from 'react';

class Parent extends React.Component {
    state = { data : "Hello World" } 
    render() {
            
            return (
                <div>         
                     <Child2 dataFromParent = {this.state.data} />
                </div>
            );
        }
    }

    class Child2 extends React.Component {
        render() {
                
                return (
                    <div>
                        The data from parent is:{this.props.dataFromParent}
                    </div>
                );
            }
        }

export default Parent;