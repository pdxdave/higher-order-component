import React from 'react';

const withCounter = (WrappedComponent, incrementor) => {
    class NewComponent extends React.Component {

        constructor(){
            super()
            this.state = { 
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prev => {
                return {
                    count: prev.count + incrementor
                }
            })
        }

        render(){
            return(
                <div>
                    <WrappedComponent 
                        count={this.state.count} 
                        incrementCount={this.incrementCount}
                    />
                </div>
            )
        }
    }
    return NewComponent
}

export default withCounter