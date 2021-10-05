import {Component} from 'react'
import {MusicScore} from '../components/Music'
import Button from '../elements/Button'
import {ExampleMusic} from './globalvars'

class Mobile extends Component {
    componentDidMount() {

    }

    _add_C4 = () => {
        var newMusic = ExampleMusic.concat('C4')
        console.log(newMusic)
    }

	render() {
		return <div>
            <div> This is the mobile interface</div>
            Button <Button text='button' onClick={this._add_C4}/>
        </div>
	}
}

export default Mobile
