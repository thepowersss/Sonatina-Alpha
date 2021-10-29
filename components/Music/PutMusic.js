import { useState } from 'react';
import { useRouter } from 'next/router';
import {Button} from 'antd'
import 'antd/dist/antd.css';

export default function PutMusic() {

    const router = useRouter();

    const publishPut = async () => {
        console.log("publishPut called")
        const test_score = `
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
        CDEC|D2DE|F2F2|E2E2|CDEC|D2DE|F2G2|C4||C4
        `
        try {
            // Update post
            fetch('/api/musicScore', {
                method: 'PUT',
                body: JSON.stringify(test_score),
            });
            console.log("putData success")
            // set state

            // reload the page
            //return router.push(router.asPath);
        } catch (error) {
            console.log("putData error")
            console.log(error)
        }
    }
    return  <div>
        <Button type='primary' onClick={publishPut}> Add C4 </Button>
    </div>
}
