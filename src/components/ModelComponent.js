import React from 'react'
import Modal from "react-modal";

const ModalComponent = (props) => {

	// @ts-ignore
	return (
		<Modal
			{...props}
			isOpen={props?.isOpen}
			ariaHideApp={false}
			onRequestClose={() => props?.setIsOpen(false)}
			shouldCloseOnOverlayClick={true}
			overlayClassName="overlay-bg"
			style={{
				content: {
					top: '50%',
					left:  '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '- 50%',
					transform: 'translate(-50%, -50%)',
					paddingLeft: props?.height ? '2px' : '',
					paddingRight: props?.height ?  '5px' : '',
					width: '80%',
					borderRadius: '18px',
					height: '300px',

				},
				overlay:
				{
				  zIndex: 1000000,
				},
			}}

		>
			<div style={{textAlign: 'left'}} className='p-0 m-0'>
				{props.children}
			</div>
		</Modal>
	)
}

export default ModalComponent