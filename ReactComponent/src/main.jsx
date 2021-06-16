import React from 'react'
import ReactDOM from 'react-dom'

// class Welcome extends React.Component {

//     constructor(props) {
//         // obliger d'aller chercher props depuis React.component du coup il faut utiliser super
//         super(props)
//         // console.log(props);
//     }

//     render () {

//         return <>
//             <h1>bonjour {this.props.name}</h1>
//             <p>{this.props.children}</p>
//         </>
//     }
// }
// // ReactDOM.render(<Welcome name="Alexis">Hey !!</Welcome>, document.querySelector('#app'))

// class Heure extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()}
//         this.timer = null
//     }

//     componentDidMount() { // permet de lancer qqc quand un composant est monter
//         this.timer = window.setInterval(this.tick.bind(this), 1000);
//     }

//     componentWillUnmount() { // permet de faire qqc avant que le composant soit detruit
//         window.clearInterval(this.timer)
//     }

//     tick() { 
//         this.setState({date: new Date()})
//     }

//     render () {
//         return <>
//         <div>Voici la date : {this.state.date

//.toLocaleString()}</div>
//         </>
//     }
// }
ReactDOM.render(<Heure />, document.querySelector('#app'))

function tickReactJsOrg () {
    const element = (
        <>
            <h1>Bonjour, monde !</h1>
            <h2>il est  {new Date().toLocaleTimeString()}.</h2>
        </>
    )
    ReactDOM.render(element, document.getElementById('app'))
}

setInterval(tickReactJsOrg, 1000);

