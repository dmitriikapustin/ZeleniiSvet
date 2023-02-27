// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik, dirty, isValid } from 'formik';
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import axios from 'axios';
import { motion } from "framer-motion";
import ScrollAnimation from '../components/animationC/ScrollAnimation'


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
		x: 200,
		opacity: 0
	}

	const transition = {
		type: 'spring',
		duration: 0.2,
		ease: "linear"
	}


	const fetchStrapiPhones = (data) => {
		const phonesArr = [];
		data.data.data?.map((item) => {
			phonesArr.push(item.attributes.PhoneNumber)
			return phonesArr
		})
		// console.log(phonesArr)
		return phonesArr
	}



	const schema = Yup.object({
		name: Yup.string()
				// .min(3, 'Минимальное количество символов: 3.')
				.required('Обязательное поле'),
		mobilephone: Yup.string()
				.min(10, 'Минимальное количество символов: 10.')
				.typeError('Введите корректный номер')
				.required('Обязательное поле')
				.test('existenceNumber', 'Такой номер уже есть в базе.',
					function(value) {
						const arr = fetchStrapiPhones(data)
						const booleanResult = !arr.includes(value)
						// console.log(value, arr, booleanResult)
						return booleanResult
					} 
				)
	  })



	const handleSchemaValue = (nameForm, numberForm) => {
	
	const obj = {
		name: nameForm,
		mobilephone: numberForm
	}

	setIsSchemaValid(schema.isValidSync(obj))
	console.log(schema, schema.isValid(obj), schema.isValidSync(obj))


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
			let message;
			const STRAPI_API = "http://localhost:1337/api/form-requests"
			const TOKEN = "5957892134:AAF5p2FfyBeIyVjp1DaMPPUNJ0bzQ2wSffc";
			const CHAT_ID = "582978211";
			const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

			if (props.sum && props.term && props.rate && props.result) {
				message = `<b> Отправитель:</b> ${values.name}  <b> Телефон:</b> ${values.mobilephone} <b> Сумма:</b> ${props.sum} <b> Срок:</b> ${props.term} <b> Ставка:</b> ${props.rate} <b> Ежемесячный платёж:</b> ${props.result} `;
			} else {
			 	message = `<b> Отправитель:</b> ${values.name}  <b> Телефон:</b> ${values.mobilephone}`;
			}
			axios.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			})

			axios.post(STRAPI_API,{
				data: {
					FirstName: values.name,
					PhoneNumber: values.mobilephone
				}
			})

		}
	  })
	return (
		<div className="flex flex-col form" style={{ margin: '30px 0' }}>
			<div className='form-top-text flex flex-col'>
				<h2 className='font-4-bold form-heading'>Мы хотим вам помочь, потому что знаем как</h2>
			</div>
			<ScrollAnimation
				delay={0}
			>
				<form onSubmit={formik.handleSubmit} id="tg">
					<div style={styleInput} className='input-field'>
						<div style={styleInnerInput}>

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
							<motion.label
								animate={focused === true ? animateInput : ''}
								transition={transition}
								for="name">
								Имя
							</motion.label>
							<br />
							{formik.errors.name && (
								<span className=''>{formik.errors.name}</span>
							)}
						</div>
					</div>
					<div style={styleInput} className='input-field'>
						<ScrollAnimation
							delay={0}
						>
							<div style={styleInnerInput}>

								<MaskedInput
									disabled={disableInputs}
									mask={phoneNumberMask}
									type="tel"
									name="mobilephone"
									id="mobilephone"
									placeholder=" "
									className='font-1-bold'
									onFocus={onFocus}
									onChange={(e) => {
										formik.handleChange(e)
										const timer = setTimeout(() => {
											handleSchemaValue(formik.values.name, e.target.value)
										}, 100);
										return () => clearTimeout(timer);
									}
									}
									onBlur={onBlur}
									// onBlur={formik.handleBlur} 
									value={formik.values.mobilephone}
								/>
								<label for="phone">Телефон</label>
								<br />
								{formik.touched && formik.errors.mobilephone && (
									<span className=''>{formik.errors.mobilephone}</span>
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




















