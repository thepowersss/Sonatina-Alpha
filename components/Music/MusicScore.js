import {Component} from 'react'
import Abc2Svg from 'react-abc2svg'

class MusicScore extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div> test score 1
            <Abc2Svg
                abcNotation={
                    `%abc-2.2\n%%pagewidth 14cm\n%%bgcolor beige\n%%topspace 0\n%%composerspace 0\n%%leftmargin 0.8cm\n%%rightmargin 0.8cm\n%%fullsvg 1\n\nX:1\nT:Example\nM:4/4\nC:Trad.\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|`
                }
                showErrors
            />
            test score 2
            <Abc2Svg
                abcNotation={`
%abc-2.2
%%pagewidth 14cm
%%bgcolor white
%%topspace 0
%%composerspace 0
%%leftmargin 0.8cm
%%rightmargin 0.8cm
%%fullsvg 2

X:1
T:J'ai du bon tabac
C:Trad.
M:2/4
L:1/8
Q:1/4=120
K:C
CDEC|D2DE|F2F2|E2E2|CDEC|D2DE|F2G2|C4:|
G2GF|E2DE|F2G2|F2E2|G2GF|E2DE|F2G2|D4|
CDEC|D2DE|F2F2|E2E2|CDEC|D2DE|F2G2|C4||
                `}
                showErrors
            />
        </div>
    }
}

export default MusicScore
