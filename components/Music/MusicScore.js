import {Component} from 'react'
import Abc2Svg from 'react-abc2svg'

class MusicScore extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div> test score
            <Abc2Svg
                abcNotation={this.props.abc}
                showErrors
            />
        </div>
    }
}

export default MusicScore
