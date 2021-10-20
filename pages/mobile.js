import {Component} from 'react'
import {MusicScore} from '../components/Music'
//import Button from '../elements/Button'
import {Button} from 'antd'
import {ExampleMusic} from './globalvars'
import ScoreApi from '../api'
import 'antd/dist/antd.css';

class Mobile extends Component {
    componentDidMount() {

    }

    static async getInitialProps(ctx) {
		let musicInfo = {}
		try {
			musicInfo = await ScoreApi(ctx).Score.addNote("C4")
		} catch (err) {
			console.log("custom catch error", err)
		}
		return musicInfo
	}

    _add_C4 = () => {
        var newMusic = ExampleMusic.concat('C4')
        console.log(newMusic)
    }

    _add_note = () => {
        console.log("_add_note pressed")

    }

	render() {
		return <div>
            <div> This is the mobile interface</div>
            <Button type='primary' onClick={this._add_C4}> Button1 </Button>
            <Button type='primary' onClick={this._add_note}> Button2 </Button>
        </div>
	}
}

export default Mobile
