// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik, dirty, isValid } from 'formik';
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import axios from 'axios';
import { motion } from "framer-motion";
import ScrollAnimation from '../components/animations/ScrollAnimation'


import { useState, useEffect } from 'react';

import Button from './Button';

const styleForm = {
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "50px"
}

const styleInnerInput = {
    margin: "0",
    width: '100%',
    maxWidth: '100%',
    transition: "all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19)"
}

const styleInput = {
    display: "inline-block",
    width: '100%',
    maxWidth: '100%',
    height: '35px',
	marginBottom: '40px'
}




const phoneNumberMask = [
	"+", "7", " ",
	/[1-9]/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/
  ];




const FormС = (data) => {
	const [togglePopup, setTogglePopup] = useState(false)
	const [isSchemaValid, setIsSchemaValid] = useState(false)
	const [disableInputs, setDisableInputs] = useState(true)
	const [focused, setFocused] = useState(false)
	const [focused2, setFocused2] = useState(false)
	const onFocus = () => setFocused(true)
	const onFocus2 = () => setFocused2(true)
	const onBlur = () => setFocused(false)
	const onBlur2 = () => setFocused2(false)
	// const [phonePost, setPhonePost] = useState('')
	// const [phoneGet, setPhoneGet] = useState(data)
	const [error, setError] = useState(null)

	console.log(data)


	useEffect(() => {
		const timer = setTimeout(() => {
			setDisableInputs(false)
		}, 3000);
		return () => clearTimeout(timer);
	}, [])


	



	const animateInput = {
		x: [100, 200],
		opacity: [0.5, 0],
		transition: {
			// type: 'spring',
			duration: 0.08,
			ease: [0.075, 0.82, 0.165, 1],
			stiffness: 1000 ,
			repeatType: 'reverse'
			// damping: 24
		}
	}

	// const transition = {
	// 	type: 'spring',
	// 	duration: 0.2,
	// 	ease: "linear",
	// 	stiffness: 500, 
	// 	damping: 24
	// }


	const fetchStrapiPhones = (data) => {
		const phonesArr = [];
		data.data.data?.map((item) => {
			phonesArr.push(item.attributes.phonenumber)
			return phonesArr
		})

		return phonesArr
	}



	const schema = Yup.object().shape({
		name: Yup.string()
				.min(3, 'Минимальное количество символов: 3.')
				.required('Обязательное поле'),
		mobilephone: Yup.string()
				.min(10, 'Минимальное количество символов: 10.')
				.required('Обязательное поле')
				// .test('обязательное поле ввода', (value, { createError, path }) => {
				// 	if (!value) return createError({
				// 	  path,
				// 	  message: "Обязательное поле",
				// 	})
				// 	else return true;
				//  })
				// .test('Длина номера', (value, { createError, path }) => {
				// if (parseInt(value).length < 8 && value !== undefined) return createError({
				// 	path,
				// 	message: "Минимум 8",
				// })
				// else return true;
				// }),

				.test('existenceNumber',
					function(value) {

						const arr = fetchStrapiPhones(data)
						const booleanResult = !arr.includes(value)
						console.log(arr)
						return booleanResult === true ? true : this.createError({
							message: `Такой номер уже есть в базе.`,
							path: 'mobilephone', // Fieldname
						  })

					} 
				)
	  })



	const handleSchemaValue = (nameForm, numberForm) => {
	
	const obj = {
		name: nameForm,
		mobilephone: numberForm
	}

	setIsSchemaValid(schema.isValidSync(obj))
	// console.log(schema, schema.isValid(obj), schema.isValidSync(obj))


	// console.log(e.value)
	}
	// const checkV = schema.validateSync()


	const formik = useFormik({
		initialValues: {
		  name: '',
		  mobilephone: '',
		},
		validationSchema: schema,
		onSubmit: function (values) {

			const STRAPI_API = "https://api.zesvet.ru/api/form-requests"
			const TOKEN = "5957892134:AAF5p2FfyBeIyVjp1DaMPPUNJ0bzQ2wSffc";
			const CHAT_ID = "582978211";
			const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


			let message = `<b> Отправитель:</b> ${values.name}  <b> Телефон:</b> ${values.mobilephone}`;

			axios.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			})

			axios.post(STRAPI_API,{
				data: {
					name: values.name,
					phonenumber: values.mobilephone
				}
			})

		}
	  })
	return (
		<div className="flex flex-col form" style={{ margin: '30px 0' }}>
			<div className='form-top-text flex flex-col'>
				<h2 className='font-4-bold form-heading'>Мы хотим вам помочь, потому что знаем как.</h2>
				<p className='font-2-regular form-text'>Если вам нужна помощь в кредитной проблеме, то оставьте заявку ниже. Как можно быстрее перезвоним и с пониманием выслушаем, а потом предложим решение.</p>
			</div>
			<ScrollAnimation
				delay={0}
			>
				<form onSubmit={formik.handleSubmit} id="tg">
					<div style={styleInput} className='input-field'>
						<div style={styleInnerInput} className='input-container'>

							<input
								disabled={disableInputs}
								type="text"
								name="name"
								id="name"
								placeholder=" "
								className='font-1-bold'
								onFocus={onFocus}
								onChange={(e) => {
									formik.handleChange(e)
									const timer = setTimeout(() => {
										handleSchemaValue(e.target.value, formik.values.mobilephone)
									}, 100);
									return () => clearTimeout(timer);
								}
								}
								onBlur={onBlur}
								value={formik.values.name}
							/>
							<label
								// initial={{x: 0, opacity: 1}}
								// animate={focused === false && formik.values.name === '' ? '' : animateInput}
								className={(focused === false && formik.values.name === '' ? 'label' : 'label animate')}
								for="name">
								Имя
							</label>
							<br />
						</div>
							{formik.errors.name && (
								<motion.div 
									transition={{
										duration: .2,
										ease: 'easeInOut'
									}}
									initial={{opacity: 0, scale: 0.9}}
									animate={{opacity: 1, scale: 1}}
									className="error-container">
									<span className='error-message'>{formik.errors.name}</span>
								</motion.div>
							)}
					</div>
					<div style={styleInput} className='input-field'>
						<ScrollAnimation
							delay={0}
						>
							<div style={styleInnerInput} className='input-container'>

								<MaskedInput
									disabled={disableInputs}
									mask={phoneNumberMask}
									type="tel"
									name="mobilephone"
									id="mobilephone"
									placeholder=" "
									className='font-1-bold'
									onFocus={onFocus2}
									onChange={(e) => {
										formik.handleChange(e)
										const timer = setTimeout(() => {
											handleSchemaValue(formik.values.name, e.target.value)
										}, 100);
										return () => clearTimeout(timer);
									}
									}
									onBlur={onBlur2}
									// onBlur={formik.handleBlur} 
									value={formik.values.mobilephone.replace(/_/g, " ")}
								/>
								<label 
									className={(focused2 === false && formik.values.mobilephone === '' ? 'label2' : 'label2 animate')}
									for="phone">Телефон
								</label>
								<br />
								{formik.errors.mobilephone && (
									<motion.div 
										transition={{
											duration: .2,
											ease: 'easeInOut',
											repeatType: 'mirror'
										}}
										initial={{opacity: 0, scale: 0.9}}
										animate={{opacity: 1, scale: 1}}
										exit={{ opacity: 0 }}
										className="error-container">
										<span className='error-message'>{formik.errors.mobilephone}</span>
									</motion.div>
								)}
							</div>
						</ScrollAnimation>
					</div>
					<div className='button form-button'>
						<button disabled={isSchemaValid === true ? false : true} type='submit' className={isSchemaValid === true ? "" : "disabled"}>
							<a className='font-1-bold'>
								Оставить заявку
							</a>
						</button>
					</div>
					<div>
						<h1>{error}</h1>
					</div>
					<motion.div
						className={"flex flex-col popup " + (togglePopup === true ? 'active' : '')}

					>
						<div className="popup-container flex flex-col">
							<p className='font-1 popup-text'>Заявка успешно отправлена!</p>
							<div className='ok-button-container'>
								<div className='button ok-button' onClick={() => setTogglePopup(!togglePopup)}>
									<a className='font-1'>ОК</a>
								</div>
							</div>
						</div>
					</motion.div>
				</form>
			</ScrollAnimation>
		</div>
	);
}

export default FormС


//   <div className="flex flex-col" style={{ width: '362px', margin: '30px 0' }}>
//   <form onSubmit={values.handleSubmit}>
// 	  <div style={styleInput} className='input-field'>
// 		  <div style={styleInnerInput}>
// 			  <label for="name">First Name</label>
// 			  <input
// 				  type="text"
// 				  name="name"
// 				  id="name"
// 				  onChange={values.handleChange}
// 				  onBlur={values.handleBlur}
// 				  value={values.name} />
// 			  {touched.name && errors.name && (
// 				  <span>{errors.name}</span>
// 			  )}
// 		  </div>
// 	  </div>
// 	  <div style={styleInput} className='input-field'>
// 		  <div style={styleInnerInput}>
// 			  <label for="phone">Your phone</label>
// 			  <input
// 				  type="numer"
// 				  name="mobilephone"
// 				  id="mobilephone"
// 				  onChange={values.handleChange}
// 				  onBlur={values.handleBlur}
// 				  value={values.mobilephone} />
// 			  {touched.mobilephone && errors.mobilephone && (
// 				  <span>{errors.mobilephone}</span>
// 			  )}
// 		  </div>
// 	  </div>
//   </form>
// </div>




















