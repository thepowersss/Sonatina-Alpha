import React from 'react'

function Button(props) {
	const { text='', width=180, height=45, borderRadius, fontSize, fontWeight,
		onClick=()=>{}, disabled, hide} = props
	if (hide) return null

	return <div onClick={disabled?()=>{}:onClick} style={width, height, borderRadius}>
		<div style={{fontSize, fontWeight}}>
			{text}
		</div>
	</div>
}

export default Button
