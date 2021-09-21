import {Component} from 'react'
import Abcjs from 'react-abcjs'

class Index extends Component {
    componentDidMount() {
        //var reactAbcjs = require("react-abcjs")

    }

	render() {
		return <div>
            <div> This is my website </div>
            <div>
                <Abcjs
                    abcNotation={
                        'X:1\nT:Example\nM:4/4\nC:Trad.\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|'
                    }
                    parserParams={{}}
                    engraverParams={{ responsive: 'resize' }}
                    renderParams={{ viewportHorizontal: true }}
                />
            </div>
        </div>
	}
}

export default Index
