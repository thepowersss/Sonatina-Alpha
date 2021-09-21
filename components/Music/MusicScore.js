import abcjs from 'abcjs';

export default class MusicScore extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        renderScore = () => {
            abcjs.renderAbc('notation', 'X:1\nT:Example\nM:4/4\nC:Trad.\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|');
        }
        
    }
}
