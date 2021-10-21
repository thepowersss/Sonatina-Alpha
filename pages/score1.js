import {Component} from 'react'
import {MusicScore} from '../components/Music'
import clientPromise from '../lib/mongodb';
//import {ExampleMusic} from './globalvars'
//console.log(ExampleMusic)

class ScorePage extends Component {

    componentDidMount() {

    }

	render() {
		return <div>
            <div>Main score website</div>
            <MusicScore
                title={'score 1'}
                abc={`
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
            `}/>
            <MusicScore
                title={'score 2'}
                abc={`
%abc-2.2
%%pagewidth 14cm
%%bgcolor beige
%%topspace 0
%%composerspace 0
%%leftmargin 0.8cm
%%rightmargin 0.8cm
%%fullsvg 1

X:1
T:Example
M:4/4
C:Trad.
K:G
|:Gccc dedB|dedB dedB|
c2ec B2dB|c2A2 A2BA|
            `}/>

            <div>
              <h1>Score_Test</h1>
              <p>
                <small>(According to Metacritic)</small>
              </p>
              <ul>
                {this.props.score1.map((music) => (
                  <li>
                    <h2>{music.abcScoreString}</h2>
                  </li>
                ))}
              </ul>
            </div>
        </div>
	}
}
export async function getServerSideProps() {
    const client = await clientPromise;
    const db = await client.db();

  const score1 = await db
    .collection("score1")
    .find({})
    .limit(20)
    .toArray();

  return {
    props: {
      score1: JSON.parse(JSON.stringify(score1)),
    },
  };
}
export default ScorePage
