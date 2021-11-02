// import {Button} from 'antd'
// import 'antd/dist/antd.css';
// import clientPromise from '../../lib/mongodb';
//
// export async function getServerSideProps() {
//     const client = await clientPromise;
//     const db = await client.db();
//
//     console.log("PutMusic called")
//
//     const test_score = `
//     %abc-2.2
//     %%pagewidth 14cm
//     %%bgcolor white
//     %%topspace 0
//     %%composerspace 0
//     %%leftmargin 0.8cm
//     %%rightmargin 0.8cm
//     %%fullsvg 2
//
//     X:1
//     T:J'ai du bon tabac
//     C:Trad.
//     M:2/4
//     L:1/8
//     Q:1/4=120
//     K:C
//     CDEC|D2DE|F2F2|E2E2|CDEC|D2DE|F2G2|C4:|
//     G2GF|E2DE|F2G2|F2E2|G2GF|E2DE|F2G2|D4|
//     CDEC|D2DE|F2F2|E2E2|CDEC|D2DE|F2G2|C4||C4
//     `
//
//     try {
//         await db.collection("score1").replaceOne(
//             {
//                 score1: test_score
//             }
//         )
//         console.log("putData success")
//         // set state
//
//         // reload the page
//         //return router.push(router.asPath);
//     } catch (error) {
//         console.log("putData error")
//         console.log(error)
//     }
//
//     const score1 = await db
//         .collection("score1")
//         .find({})
//         .limit(20)
//         .toArray();
//
//     return {
//         props: {
//             score1: JSON.parse(JSON.stringify(score1)),
//         },
//     };
// }
//
// export default function PutMusic() {
//
//     const publishPut = async () => {
//         return {
//             props: {
//                 score1: JSON.parse(JSON.stringify(score1)),
//             },
//         };
//     }
//
//     return  <div>
//         <Button type='primary' onClick={publishPut}> Add C4 </Button>
//     </div>
// }
