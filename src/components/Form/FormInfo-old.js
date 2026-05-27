/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import toast from 'react-hot-toast';
import styles from '../styles.module.css';

const serviceID = 'service_6olqw9t';
const PublicKey = 'QdPyV13Jdbl1gJfP5';
const templateID = 'template_26qsmb6';

const FormInfo = () => {
    const [numberError, setNumberError] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [modalclass, setModalclass] = useState('');
    const [modalclassError, setModalclassError] = useState('');
    const [info, setInfo] = useState({
        name: '',
        url: '',
        number: '',
        employeesnumber: '',
        productsnumber: '',
        time: '',
        date: moment().format('L'),
        contactway: '',
    });
    const notify = () => toast.success('تم ارسال الطلب');
    const notifyError = () => toast.error('خطأ في ارسال الطلب');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            info.number !== '' &&
            info.number?.toString().length >= 9 &&
            info.number?.toString().length <= 13
        ) {
            setProcessing(true);
            setNumberError(false);
            setInfo({
                name: '',
                url: '',
                number: '',
                employeesnumber: '',
                productsnumber: '',
                time: '',
                contactway: 'واتساب',
            });
            emailjs.send(serviceID, templateID, info, PublicKey).then(
                async (result) => {
                    console.log(result.text);
                    setModalclass('show');
                    notify();
                    setProcessing(false);

                    // eslint-disable-next-line no-return-assign
                    Array.from(document.querySelectorAll('input')).forEach(
                        // eslint-disable-next-line no-return-assign
                        (input) => (input.value = '')
                    );
                    Array.from(document.querySelectorAll('textarea')).forEach(
                        (input) => (input.value = '')
                    );
                    window.location.href = 'https://www.aidaksa.com/confirmation';
                },
                async (error) => {
                    console.log(error.text);
                    notifyError();
                    setProcessing(false);
                    setModalclassError('show');
                }
            );
        } else {
            console.log('inside else if');
            if (info.number?.toString().length < 9 || info.number?.toString().length > 13) {
                setNumberError(true);
            } else {
                setNumberError(false);
            }
        }
    };
    const yesterday = moment().subtract(1, 'day');
    const today = moment().subtract(0, 'day');
    const format = 'HH:mm';
    const time = moment(moment().format('HH:mm'), format);
    const afterTime = moment('21:00', format);
    const handleChange = (e) => {
        console.log('test', e.format('L'));

        setInfo((previousState) => ({
            ...previousState,
            date: e.format('L'),
        }));
    };
    const valid = (current) => {
        if (!current.isAfter(yesterday)) return false;
        if (current.day() === 5) {
            return false;
        }
        if (!current.isAfter(today) && time.isAfter(afterTime)) {
            return false;
        }
        return true;
    };
    useEffect(() => {
        if (moment().day === 5 || time.isAfter(afterTime)) {
            setInfo((previousState) => ({
                ...previousState,
                date: moment().add(1, 'day').format('L'),
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container mt-40 mb-40" id="contactform">
            <div className={styles.required}>
                    <div className={styles.required__titleBox}>
                        <h2 className={styles.required__title}> تواصل معنا</h2>
                    </div>{' '}
                <form>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="name"
                                    placeholder="ما اسم الشركة او الجهة ؟"
                                    aria-describedby="name"
                                    value={info.name}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            name: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className={`form-control `}
                                    placeholder=" الرجاء ارفاق رابط المتجر الإلكتروني"
                                    aria-label="url"
                                    aria-describedby="url"
                                    value={info.url}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            url: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    aria-label="employeesnumber"
                                    placeholder="العدد التقريبي للعاملين في الجهة ؟ "
                                    aria-describedby="employeesnumber"
                                    value={info.employeesnumber}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            employeesnumber: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="عدد المنتجات بالمتجر؟"
                                    aria-label="productsnumber"
                                    aria-describedby="productsnumber"
                                    value={info.productsnumber}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            productsnumber: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <label className="label-form" htmlFor="select">
                                باي يوم تفضل ان نتواصل معك؟
                            </label>
                            <div className="form-control p-0 mb-3 border-0">
                                <DatePicker
                                    closeOnSelect
                                    closeOnTab
                                    isValidDate={valid}
                                    value={info.date}
                                    className=""
                                    timeFormat={false}
                                    dateFormat
                                    initialViewDate={info.data}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="label-form" htmlFor="time">
                                باي ساعة تفضل ان يتم التواصل ؟
                            </label>
                            <div className="input-group mb-3">
                                <input
                                    id="time"
                                    type="time"
                                    className="form-control p-time"
                                    aria-label="time"
                                    placeholder="باي ساعة تفضل ان يتم التواصل ؟"
                                    aria-describedby="time"
                                    value={info.time}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            time: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label className="label-form" htmlFor="select">
                                هل تفضل التواصل عن طريق الواتساب او الاتصال
                            </label>
                            <div className=" mb-3">
                                <select
                                    className="form-select input-goup"
                                    aria-label="Default select example"
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            contactway: e.target.value,
                                        }))
                                    }
                                    value={info.contactway}
                                >
                                    <option value="واتساب" selected>
                                        {' '}
                                        واتساب
                                    </option>
                                    <option value="الاتصال">الاتصال</option>
                                </select>
                            </div>

                            {/* <div className="input-group mb-3">
                                <input
                                    type="text"
                                    id="select"
                                    className="form-control"
                                    placeholder="هل تفضل التواصل عن طريق الواتساب او الاتصال"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div> */}
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="label-form" htmlFor="select">
                                رقم التواصل{' '}
                            </label>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className={`form-control   ${numberError ? 'is-invalid' : ''}`}
                                    aria-label="number"
                                    placeholder="الرجاء وضع الرقم"
                                    aria-describedby=" -addon1"
                                    value={info.number}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            number: e.target.value,
                                        }))
                                    }
                                />
                                <div className="invalid-feedback mb-3 mt-n-20">
                                    الرجاء إدخال الرقم
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <button
                            className="btn-submit main-btn primary-color font-weight-bolder"
                            type="submit"
                            disabled={processing}
                            onClick={handleSubmit}
                        >
                            {processing ? (
                                <span
                                    className="spinner-border spinner-border-sm ml-2"
                                    style={{ verticalAlign: 'middle' }}
                                    role="status"
                                ></span>
                            ) : (
                                ''
                            )}
                            <span>إرسال رسالة</span>
                        </button>
                    </div>

                    {/* model */}
                    <div
                        className={`modal fade ${modalclass}`}
                        id="exampleModalCenter"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div
                                    className="modal-header"
                                    style={{
                                        backgroundColor: 'var(--color-primary)',
                                        color: 'white',
                                    }}
                                >
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLongTitle"
                                        style={{
                                            color: 'white',
                                        }}
                                    >
                                        آيدا للتسويق
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        onClick={() => setModalclass('')}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body p-5">
                                    {' '}
                                    تم إرسال الطلب سيتم التواصل معك في أقرب وقت <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* model error */}
                    <div
                        className={`modal fade ${modalclassError}`}
                        id="exampleModalCenter2"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div
                                    className="modal-header"
                                    style={{
                                        backgroundColor: '#b00',
                                        color: 'white',
                                    }}
                                >
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLongTitle"
                                        style={{
                                            color: 'white',
                                        }}
                                    >
                                        آيدا للتسويق{' '}
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        onClick={() => setModalclassError('')}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body p-5">
                                    {' '}
                                    خطأ في إرسال الطلب
                                    <br />
                                    <a href="https://wa.me/966509211666">
                                        يمكنك التواصل معنا مباشراً من هنا{' '}
                                    </a>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormInfo;
