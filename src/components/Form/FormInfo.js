import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import styles from '../styles.module.css';

const serviceID = 'service_6olqw9t';
const PublicKey = 'QdPyV13Jdbl1gJfP5';
const templateID = 'template_26qsmb6';

const FormInfo = () => {
    const { formatMessage } = useIntl();
    const [info, setInfo] = useState({
        name: '',
        jobTitle: '',
        number: '',
        url: '',
    });
    const [errors, setErrors] = useState({
        name: false,
        number: false,
        url: false,
    });
    const [processing, setProcessing] = useState(false);
    const [modalclass, setModalclass] = useState('');
    const [modalclassError, setModalclassError] = useState('');
    const notify = () => toast.success(formatMessage({ id: 'RequestSent' }));
    const notifyError = () => toast.error(formatMessage({ id: 'RequestError' }));

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNameValid = info.name !== '';
        const isNumberValid = info.number !== '' && info.number?.toString().length >= 9 && info.number?.toString().length <= 13;
        const isUrlValid = info.url !== '';

        if (isNameValid && isNumberValid && isUrlValid) {
            setProcessing(true);
            setErrors({ name: false, number: false, url: false });

            emailjs.send(serviceID, templateID, info, PublicKey).then(
                async (result) => {
                    console.log(result.text);
                    setModalclass('show');
                    notify();
                    setProcessing(false);

                    Array.from(document.querySelectorAll('input')).forEach(
                        (input) => (input.value = '')
                    );
                    setInfo({
                        name: '',
                        jobTitle: '',
                        number: '',
                        url: '',
                    });
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
            setErrors({
                name: !isNameValid,
                number: !isNumberValid,
                url: !isUrlValid,
            });
        }
    };

    return (
        <div className="container mt-40 mb-40" id="contactform">
            <div className={styles.required}>
                <div className={styles.required__titleBox}>
                    <h2 className={styles.required__title}>{formatMessage({ id: 'StartWithUsToday' })}</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    aria-label="name"
                                    placeholder={formatMessage({ id: 'YourName' })}
                                    aria-describedby="name"
                                    value={info.name}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            name: e.target.value,
                                        }))
                                    }
                                />
                                {errors.name && <div className="invalid-feedback">{formatMessage({ id: 'EnterName' })}</div>}
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="jobTitle"
                                    placeholder={formatMessage({ id: 'JobTitle' })}
                                    aria-describedby="jobTitle"
                                    value={info.jobTitle}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            jobTitle: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label className="label-form" htmlFor="select">
                                {formatMessage({ id: 'ContactNumber' })}
                            </label>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                                    aria-label="number"
                                    placeholder={formatMessage({ id: 'EnterNumber' })}
                                    aria-describedby="number"
                                    value={info.number}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            number: e.target.value,
                                        }))
                                    }
                                />
                                {errors.number && <div className="invalid-feedback">{formatMessage({ id: 'EnterValidNumber' })}</div>}
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="label-form" htmlFor="select">
                                {formatMessage({ id: 'StoreURL' })}
                            </label>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.url ? 'is-invalid' : ''}`}
                                    aria-label="url"
                                    placeholder={formatMessage({ id: 'EnterURL' })}
                                    aria-describedby="url"
                                    value={info.url}
                                    onChange={(e) =>
                                        setInfo((previousState) => ({
                                            ...previousState,
                                            url: e.target.value,
                                        }))
                                    }
                                />
                                {errors.url && <div className="invalid-feedback">{formatMessage({ id: 'EnterURL' })}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <button
                            className="btn-submit main-btn primary-color font-weight-bolder"
                            type="submit"
                            disabled={processing}
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
                            <span>{formatMessage({ id: 'Submit' })}</span>
                        </button>
                    </div>

                    {/* modal */}
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
                                    {formatMessage({ id: 'RequestSent' })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal error */}
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
                                        آيدا للتسويق
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
                                    {formatMessage({ id: 'RequestError' })}
                                    <br />
                                    <a href="https://wa.me/966509211666">
                                        {formatMessage({ id: 'ContactUsDirectly' })}
                                    </a>
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
