// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik, dirty, isValid } from 'formik';
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import axios from 'axios';
import { motion } from "framer-motion";
import ScrollAnimation from '../components/animations/ScrollAnimation'

import { AllContexts } from '@/context/Context'

import { useState, useEffect, useContext } from 'react';

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
	const [disableInput1, setDisableInput1] = useState(true)
	const [disableInput2, setDisableInput2] = useState(true)	
	const [submitDelay, setSumbitDelay] = useState(true)
	const [focused, setFocused] = useState(false)
	const [focused2, setFocused2] = useState(false)
	const onFocus = () => setFocused(true)
	const onFocus2 = () => setFocused2(true)
	const onBlur = () => setFocused(false)
	const onBlur2 = () => setFocused2(false)
	const [onBlurOnce1, setOnBlurOnce1] = useState(false)
	const [onBlurOnce2, setOnBlurOnce2] = useState(false)

	// console.log(data)




	const {currentPage, currentComponent, phonesData} = useContext(AllContexts)


	useEffect(() => {
		const timer = setTimeout(() => {
			setDisableInput1(false)
			setDisableInput2(false)
		}, 1000);
		return () => clearTimeout(timer);
	}, [])




	useEffect(() => {
		const timer = setTimeout(() => {
			setSumbitDelay(true)
		}, 3000);
		return () => clearTimeout(timer);
	}, [submitDelay])


	
	// useEffect(() => {
	// 	console.log(currentPage, currentComponent)
	// }, [])


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


	const fetchStrapiPhones = (phonesData) => {
		const phonesArr = [];
		console.log(phonesData)
		phonesData.data.dataGetPhones.data?.map((item) => {
			phonesArr.push(item.attributes.phonenumber)
			return phonesArr
		})

		return phonesArr
	}



	const schema = Yup.object({
		name: Yup.string()
				.min(3, 'Минимальное количество символов: 3')
				.required('Обязательное поле'),
		mobilephone: Yup.string()
				.min(16, 'Введите номер полностью')
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
							message: `Вы недавно уже отправляли заявку`,
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

	const submitBtnHandler = () => {
		setTogglePopup(!togglePopup)
		setSumbitDelay(false)
	}


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


			let message = `<b> Отправитель:</b> ${values.name}  <b> Телефон:</b> ${values.mobilephone} <b> Страница:</b> ${currentPage} <b> Страница:</b> ${currentComponent}`;

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
		<div className="flex flex-col form mtm mbm relative">
			<div className='form-top-text flex flex-col z-100'>
				<h2 className='mbs'>Мы хотим вам помочь, потому что знаем как.</h2>
				<p className='mb0'>Если вам нужна помощь в кредитной проблеме, то оставьте заявку ниже. Как можно быстрее перезвоним и с пониманием выслушаем, а потом предложим решение.</p>
			</div>
			<ScrollAnimation
				delay={0}
			>
				<form onSubmit={formik.handleSubmit} id="tg" className='cd8 cm4 px0'>
					<div className='input-field relative mb ov-visible mtm'>
						<div className='input-container w-full relative'>

							<input
								disabled={disableInput1}
								autoComplete="off"
								type="text"
								name="name"
								id="name"
								placeholder=" "
								onFocus={(e) => {
									onFocus(e)
									setDisableInput2(true)
								}}
								// onHover={() => {
								// 	setDisableInput1(false)
								// }}
								onChange={(e) => {
									formik.handleChange(e)
									const timer = setTimeout(() => {
										handleSchemaValue(e.target.value, formik.values.mobilephone)
									}, 100);
									return () => clearTimeout(timer);
								}
								}
								onBlur={(e) => {
									onBlur(e)
									setDisableInput2(false)
									setOnBlurOnce1(true)
								}}
								value={formik.values.name}
							/>
							<label
								// initial={{x: 0, opacity: 1}}
								// animate={focused === false && formik.values.name === '' ? '' : animateInput}
								className={(focused === false && formik.values.name === '' ? 'label' : 'label animate')}
								htmlFor="name">
								Имя
							</label>
							<br />
							{formik.errors.name && onBlurOnce1 === true ? (
								<motion.div 
									transition={{
										duration: .2,
										ease: 'easeInOut'
									}}
									initial={{opacity: 0, scale: 0.9}}
									animate={{opacity: 1, scale: 1}}
									className="error-container absolute flex items-center">
									<span className='error-message'>{formik.errors.name}</span>
								</motion.div>
							) : ''}
						</div>
					</div>
					<div className='input-field relative mbm ov-visible mts'>
						<ScrollAnimation
							delay={0}
						>
							<div className='input-container w-full relative'>

								<MaskedInput
									disabled={disableInput2}
									guide={false}
									autoComplete="off"
									mask={phoneNumberMask}
									type="tel"
									name="mobilephone"
									id="mobilephone"
									placeholder=" "
									className=''
									onFocus={(e) => {
										onFocus2(e)
										setDisableInput1(true)
									}}
									onChange={(e) => {
										formik.handleChange(e)
										const timer = setTimeout(() => {
											handleSchemaValue(formik.values.name, e.target.value)
										}, 100);
										return () => clearTimeout(timer);
									}
									}
									onBlur={(e) => {
										onBlur2(e)
										setDisableInput1(false)
										setOnBlurOnce2(true)
									}}
									// onBlur={formik.handleBlur} 
									value={formik.values.mobilephone.replace(/_/g, " ")}
								/>
								<label 
									className={(focused2 === false && formik.values.mobilephone === '' ? 'label2' : 'label2 animate')}
									htmlFor="phone">Телефон
								</label>
								<br /> 
								{formik.errors.mobilephone && onBlurOnce2 === true ? (
									<motion.div 
										transition={{
											duration: .2,
											ease: 'easeInOut',
											repeatType: 'mirror'
										}}
										initial={{opacity: 0, scale: 0.9}}
										animate={{opacity: 1, scale: 1}}
										exit={{ opacity: 0 }}
										className="error-container absolute flex items-center">
										<span className='error-message'>{formik.errors.mobilephone}</span>
									</motion.div>
								) : ''}
							</div>
						</ScrollAnimation>
					</div>
					<div className='form-button px0 justify-center'>
						<button 
							disabled={isSchemaValid && submitDelay ? false : true} 
							type='submit' 
							className={'button ' + (isSchemaValid === true ? "" : "disabled") }
							onClick={()=>submitBtnHandler()}
						>
							<a className='py'>
								Оставить заявку
							</a>
						</button>
					</div>
					{/* <div>
						<h1>{error}</h1>
					</div> */}
					<motion.div
						className={"flex flex-col popup " + (togglePopup === true ? 'active' : '')}

					>
						<div className="popup-container flex flex-col">
							{isSchemaValid ? <p className=''>Заявка успешно отправлена!</p> : <p className=''>Заявка не отправлена! Повторите позже</p>}
							<div className='ok-button-container flex justify-end'>
								<button 
									className='action action--light '
									onClick={() => setTogglePopup(!togglePopup)}
								>OK</button>
							</div>
						</div>
					</motion.div>
				</form>
			</ScrollAnimation>
		</div>
	);
}

export default FormС






















