import {Component, useState} from 'react'
import {MusicScore} from '../components/Music'
//import Button from '../elements/Button'
import {Button} from 'antd'
import clientPromise from '../../lib/mongodb';
import 'antd/dist/antd.css';

const putData = async (form) => {
    try {
      const res = await fetch(`/api/musicScore`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/musicScore`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update')
    }
}

class Mobile extends Component {
    constructor() {

    }

    componentDidMount() {

    }

    _add_C4 = (e) => {
        console.log("_add_C4 pressed")
        e.preventDefault()
        putData()
    }

    _add_note = () => {
        console.log("_add_note pressed")

    }

	render() {
		return <div>
            <div> This is the mobile interface</div>
            <Button type='primary' onClick={this._add_C4}> Add C4 </Button>
            <Button type='secondary' onClick={this._add_note}> Add Note </Button>
        </div>
	}
}

export default Mobile
