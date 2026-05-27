import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useIntl } from 'react-intl';
import styles from './styles.module.css';

const FormToSheet = () => {
  const { formatMessage } = useIntl();
  const [processing, setProcessing] = useState(false);
  const [modalClass, setModalClass] = useState('');
  const [modalClassError, setModalClassError] = useState('');
  const [modalErrorMessage, setModalErrorMessage] = useState('');
  const [modalSuccessMessage, setModalSuccessMessage] = useState('');

  const [info, setInfo] = useState({
    name: '',
    contentType: '',
    otherContentType: '',
    platforms: [],
    city: '',
    accounts: {
      instagram: { link: '', followers: '' },
      snapchat: { link: '', followers: '' },
      youtube: { link: '', followers: '' },
      tiktok: { link: '', followers: '' },
      twitter: { link: '', followers: '' },
      facebook: { link: '', followers: '' },
      blog: { link: '', followers: '' },
      other: { name: '', link: '', followers: '' },
    },
    pastWork: '',
    number: '',
    email: '',
    priceWithPublishing: '',
    priceWithoutPublishing: '',
    cooperationTerms: '',
    ecommerceLicense: '',
    licenseNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    number: '',
    platforms: '',
    ecommerceLicense: '',
    licenseNumber: '',
    otherContentType: '',
    city: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formValid = true;
    let newErrors = {
      name: '',
      number: '',
      platforms: '',
      ecommerceLicense: '',
      licenseNumber: '',
      otherContentType: '',
      city: '',
    };

    if (!info.name) {
      newErrors.name = formatMessage({ id: 'form.errorName', defaultMessage: 'الرجاء إدخال الاسم' });
      formValid = false;
    }
    if (!info.number) {
      newErrors.number = formatMessage({ id: 'form.errorNumber', defaultMessage: 'الرجاء إدخال الرقم' });
      formValid = false;
    }
    if (info.platforms.length === 0) {
      newErrors.platforms = formatMessage({ id: 'form.errorPlatforms', defaultMessage: 'الرجاء اختيار منصة واحدة على الأقل' });
      formValid = false;
    }
    if (!info.ecommerceLicense) {
      newErrors.ecommerceLicense = formatMessage({ id: 'form.errorEcommerceLicense', defaultMessage: 'الرجاء اختيار حالة رخصة موثوق' });
      formValid = false;
    }
    if (info.ecommerceLicense === 'نعم' && !info.licenseNumber) {
      newErrors.licenseNumber = formatMessage({ id: 'form.errorLicenseNumber', defaultMessage: 'الرجاء إدخال رقم الرخصة' });
      formValid = false;
    }
    if (info.contentType === 'محتوى اخرى' && !info.otherContentType) {
      newErrors.otherContentType = formatMessage({ id: 'form.errorOtherContentType', defaultMessage: 'الرجاء إدخال نوع المحتوى' });
      formValid = false;
    }
    if (!info.city) {
      newErrors.city = formatMessage({ id: 'form.errorCity', defaultMessage: 'الرجاء اختيار المدينة' });
      formValid = false;
    }

    setErrors(newErrors);

    if (!formValid) {
      return;
    }

    setProcessing(true);
    try {
      const response = await fetch('/submit-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData.message === 'تم إرسال النموذج بنجاح!') {
          setModalClass('show');
          setModalClassError('');
        } else if (responseData.message === 'الرقم مسجل مسبقًا') {
          setModalErrorMessage(formatMessage({ id: 'form.errorDuplicateNumber', defaultMessage: 'بياناتك متوفرة لدينا! شكرا لثقتك بنا. اذا تحتاج تعدل على بياناتك ' }));
          setModalClassError('show');
        } else {
          setModalErrorMessage(formatMessage({ id: 'form.errorSubmitFailed', defaultMessage: 'فشل في إرسال النموذج: ' }) + (responseData.message || formatMessage({ id: 'form.errorUnknown', defaultMessage: 'حدث خطأ غير معروف.' })));
          setModalClassError('show');
        }
      } else {
        setModalErrorMessage(formatMessage({ id: 'form.errorSubmitFailed', defaultMessage: 'فشل في إرسال النموذج: ' }) + (responseData.message || formatMessage({ id: 'form.errorUnknown', defaultMessage: 'حدث خطأ غير معروف.' })));
        setModalClassError('show');
      }
    } catch (error) {
      setModalErrorMessage(formatMessage({ id: 'form.errorSubmitFailed', defaultMessage: 'فشل في إرسال النموذج: ' }) + error.message);
      setModalClassError('show');
    } finally {
      setProcessing(false);
      setInfo({
        name: '',
        contentType: '',
        otherContentType: '',
        platforms: [],
        city: '',
        accounts: {
          instagram: { link: '', followers: '' },
          youtube: { link: '', followers: '' },
          tiktok: { link: '', followers: '' },
          twitter: { link: '', followers: '' },
          facebook: { link: '', followers: '' },
          blog: { link: '', followers: '' },
          snapchat: { link: '', followers: '' },
          other: { name: '', link: '', followers: '' },
        },
        pastWork: '',
        number: '',
        email: '',
        priceWithPublishing: '',
        priceWithoutPublishing: '',
        cooperationTerms: '',
        ecommerceLicense: '',
        licenseNumber: '',
      });
      setErrors({
        name: '',
        number: '',
        platforms: '',
        ecommerceLicense: '',
        licenseNumber: '',
        otherContentType: '',
        city: '',
      });
    }
  };

  const handlePlatformChange = (e) => {
    const { value, checked } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      platforms: checked
        ? [...prevInfo.platforms, value]
        : prevInfo.platforms.filter((platform) => platform !== value),
    }));
  };

  return (
    <div className='container mt-40 mb-40' id='contactform'>
      <Toaster />
      <div className={styles.required}>
        <div className={styles.required__titleBox}>
          <h2 className={styles.required__title}>
            {formatMessage({ id: 'form.joinTeam', defaultMessage: 'انضم لفريق صانعي المحتوى' })}
          </h2>
          <p>
            {formatMessage({ id: 'form.fillForm', defaultMessage: 'املأ الفورم المرفق هنا لنبدأ العمل معا' })}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-12'>
              <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>
                {formatMessage({ id: 'form.personalInfo', defaultMessage: 'معلومات شخصية' })}
              </h3>
            </div>
            <div className='col-12 col-md-6'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={formatMessage({ id: 'form.name', defaultMessage: 'الاسم' })}
                  value={info.name}
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                />
                {errors.name && (
                  <div className={styles.errorText}>{errors.name}</div>
                )}
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='input-group mb-1'>
                <select
                  className='form-control'
                  value={info.contentType}
                  onChange={(e) =>
                    setInfo({ ...info, contentType: e.target.value })
                  }
                >
                  <option value='' disabled>
                    {formatMessage({ id: 'form.contentType', defaultMessage: 'نوع المحتوى' })}
                  </option>
                  <option value='ترفيه والعاب'>{formatMessage({ id: 'form.entertainment', defaultMessage: 'ترفيه والعاب' })}</option>
                  <option value='أطفال'>{formatMessage({ id: 'form.kids', defaultMessage: 'أطفال' })}</option>
                  <option value='عناية وجمال'>{formatMessage({ id: 'form.beauty', defaultMessage: 'عناية وجمال' })}</option>
                  <option value='اخبار'>{formatMessage({ id: 'form.news', defaultMessage: 'اخبار' })}</option>
                  <option value='تقنية'>{formatMessage({ id: 'form.tech', defaultMessage: 'تقنية' })}</option>
                  <option value='تطوير أعمال'>{formatMessage({ id: 'form.business', defaultMessage: 'تطوير أعمال' })}</option>
                  <option value='فنون'>{formatMessage({ id: 'form.arts', defaultMessage: 'فنون' })}</option>
                  <option value='طبخ وطعام'>{formatMessage({ id: 'form.cooking', defaultMessage: 'طبخ وطعام' })}</option>
                  <option value='ديكور'>{formatMessage({ id: 'form.decor', defaultMessage: 'ديكور' })}</option>
                  <option value='أزياء واناقة'>{formatMessage({ id: 'form.fashion', defaultMessage: 'أزياء واناقة' })}</option>
                  <option value='صحة ولياقة'>{formatMessage({ id: 'form.health', defaultMessage: 'صحة ولياقة' })}</option>
                  <option value='كتب وتعليم'>{formatMessage({ id: 'form.education', defaultMessage: 'كتب وتعليم' })}</option>
                  <option value='السفر والسياحة'>{formatMessage({ id: 'form.travel', defaultMessage: 'السفر والسياحة' })}</option>
                  <option value='محتوى اخرى'>{formatMessage({ id: 'form.otherContent', defaultMessage: 'محتوى اخرى' })}</option>
                </select>
              </div>
            </div>

            {info.contentType === 'محتوى اخرى' && (
              <div className='col-12 col-md-12'>
                <div className='input-group mb-1'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder={formatMessage({ id: 'form.otherContentTypePlaceholder', defaultMessage: 'نوع المحتوى' })}
                    value={info.otherContentType}
                    onChange={(e) => setInfo({ ...info, otherContentType: e.target.value })}
                  />
                  {errors.otherContentType && (
                    <div className={styles.errorText}>{errors.otherContentType}</div>
                  )}
                </div>
              </div>
            )}

            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4 mb-2`}>
                {formatMessage({ id: 'form.contactInfo', defaultMessage: 'معلومات الاتصال' })}
              </h3>
            </div>
            <div className='col-12 col-md-6'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={formatMessage({ id: 'form.number', defaultMessage: 'الرقم' })}
                  value={info.number}
                  onChange={(e) => setInfo({ ...info, number: e.target.value })}
                />
                {errors.number && (
                  <div className={styles.errorText}>{errors.number}</div>
                )}
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='input-group mb-1'>
                <input
                  type='email'
                  className='form-control'
                  placeholder={formatMessage({ id: 'form.email', defaultMessage: 'البريد الإلكتروني' })}
                  value={info.email}
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                />
              </div>
            </div>

            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4 mb-2`}>
                {formatMessage({ id: 'form.city', defaultMessage: 'المدينة' })}
              </h3>
            </div>
            <div className='col-12 '>
              <div className='input-group mb-1'>
                <select
                  className='form-control'
                  value={info.city}
                  onChange={(e) => setInfo({ ...info, city: e.target.value })}
                >
                  <option value='' disabled>
                    {formatMessage({ id: 'form.selectCity', defaultMessage: 'اختر المدينة' })}
                  </option>
                  <option value='الرياض'>{formatMessage({ id: 'form.riyadh', defaultMessage: 'الرياض' })}</option>
                  <option value='جدة'>{formatMessage({ id: 'form.jeddah', defaultMessage: 'جدة' })}</option>
                  <option value='مكة'>{formatMessage({ id: 'form.makkah', defaultMessage: 'مكة' })}</option>
                  <option value='المدينة المنورة'>{formatMessage({ id: 'form.madinah', defaultMessage: 'المدينة المنورة' })}</option>
                  <option value='الدمام'>{formatMessage({ id: 'form.dammam', defaultMessage: 'الدمام' })}</option>
                  <option value='الأحساء'>{formatMessage({ id: 'form.ahsa', defaultMessage: 'الأحساء' })}</option>
                  <option value='الطائف'>{formatMessage({ id: 'form.taif', defaultMessage: 'الطائف' })}</option>
                  <option value='بريدة'>{formatMessage({ id: 'form.buraidah', defaultMessage: 'بريدة' })}</option>
                  <option value='تبوك'>{formatMessage({ id: 'form.tabuk', defaultMessage: 'تبوك' })}</option>
                  <option value='خميس مشيط'>{formatMessage({ id: 'form.khamis', defaultMessage: 'خميس مشيط' })}</option>
                  <option value='حائل'>{formatMessage({ id: 'form.hail', defaultMessage: 'حائل' })}</option>
                  <option value='نجران'>{formatMessage({ id: 'form.najran', defaultMessage: 'نجران' })}</option>
                  <option value='أبها'>{formatMessage({ id: 'form.abha', defaultMessage: 'أبها' })}</option>
                  <option value='عرعر'>{formatMessage({ id: 'form.arar', defaultMessage: 'عرعر' })}</option>
                  <option value='جازان'>{formatMessage({ id: 'form.jazan', defaultMessage: 'جازان' })}</option>
                  <option value='ينبع'>{formatMessage({ id: 'form.yanbu', defaultMessage: 'ينبع' })}</option>
                  <option value='القطيف'>{formatMessage({ id: 'form.qatif', defaultMessage: 'القطيف' })}</option>
                  <option value='الباحة'>{formatMessage({ id: 'form.baha', defaultMessage: 'الباحة' })}</option>
                  <option value='سكاكا'>{formatMessage({ id: 'form.sakaka', defaultMessage: 'سكاكا' })}</option>
                </select>
                {errors.city && (
                  <div className={styles.errorText}>{errors.city}</div>
                )}
              </div>
            </div>

            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4 mb-2`}>
                {formatMessage({ id: 'form.pastWork', defaultMessage: 'روابط الأعمال السابقة' })}
              </h3>
            </div>
            <div className='col-12'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={formatMessage({ id: 'form.pastWorkLink', defaultMessage: 'رابط لأعمال سابقة' })}
                  value={info.pastWork}
                  onChange={(e) =>
                    setInfo({ ...info, pastWork: e.target.value })
                  }
                />
              </div>
            </div>

            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4 mb-2`}>
                {formatMessage({ id: 'form.socialPlatforms', defaultMessage: 'المنصات الاجتماعية' })}
              </h3>
            </div>
            <div className='col-12'>
              <div className='input-group mb-1'>
                <label style={{ fontSize: '18px', marginBottom: '10px' }}>
                  {formatMessage({ id: 'form.mostInfluentialPlatforms', defaultMessage: 'على أي المنصات أنت أكثر تأثيراً؟' })}
                </label>
                <div className={styles.platformContainer}>
                  {[
                    'Instagram',
                    'TikTok',
                    'Snapchat',
                    'YouTube',
                    'Twitter',
                    'Facebook',
                    'Blog',
                    'Other',
                  ].map((platform) => (
                    <div key={platform} className={styles.platformItem}>
                      <input
                        type='checkbox'
                        value={platform.toLowerCase()}
                        checked={info.platforms.includes(
                          platform.toLowerCase()
                        )}
                        onChange={handlePlatformChange}
                        id={platform.toLowerCase()}
                        className={styles.checkbox}
                      />
                      <label
                        htmlFor={platform.toLowerCase()}
                        className={styles.platformLabel}
                      >
                        {platform}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.platforms && (
                  <div className={styles.errorText}>{errors.platforms}</div>
                )}
              </div>
            </div>

            {info.platforms.includes('instagram') && (
              <>
                <div className='col-12'>
                  <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>
                    Instagram
                  </h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.instagramLink', defaultMessage: 'رابط Instagram' })}
                      value={info.accounts.instagram.link}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            instagram: {
                              ...info.accounts.instagram,
                              link: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.instagramFollowers', defaultMessage: 'عدد المتابعين على Instagram' })}
                      value={info.accounts.instagram.followers}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            instagram: {
                              ...info.accounts.instagram,
                              followers: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {info.platforms.includes('youtube') && (
              <>
                <div className='col-12'>
                  <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>
                    YouTube
                  </h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.youtubeLink', defaultMessage: 'رابط YouTube' })}
                      value={info.accounts.youtube.link}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            youtube: {
                              ...info.accounts.youtube,
                              link: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.youtubeFollowers', defaultMessage: 'عدد المتابعين على YouTube' })}
                      value={info.accounts.youtube.followers}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            youtube: {
                              ...info.accounts.youtube,
                              followers: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {info.platforms.includes('tiktok') && (
              <>
                <div className='col-12'>
                  <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>TikTok</h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.tiktokLink', defaultMessage: 'رابط TikTok' })}
                      value={info.accounts.tiktok.link}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            tiktok: {
                              ...info.accounts.tiktok,
                              link: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.tiktokFollowers', defaultMessage: 'عدد المتابعين على TikTok' })}
                      value={info.accounts.tiktok.followers}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            tiktok: {
                              ...info.accounts.tiktok,
                              followers: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {info.platforms.includes('twitter') && (
              <>
                <div className='col-12'>
                  <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>
                    Twitter
                  </h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.twitterLink', defaultMessage: 'رابط Twitter' })}
                      value={info.accounts.twitter.link}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            twitter: {
                              ...info.accounts.twitter,
                              link: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.twitterFollowers', defaultMessage: 'عدد المتابعين على Twitter' })}
                      value={info.accounts.twitter.followers}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            twitter: {
                              ...info.accounts.twitter,
                              followers: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {info.platforms.includes('facebook') && (
              <>
                <div className='col-12'>
                  <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>
                    Facebook
                  </h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.facebookLink', defaultMessage: 'رابط Facebook' })}
                      value={info.accounts.facebook.link}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            facebook: {
                              ...info.accounts.facebook,
                              link: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.facebookFollowers', defaultMessage: 'عدد المتابعين على Facebook' })}
                      value={info.accounts.facebook.followers}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            facebook: {
                              ...info.accounts.facebook,
                              followers: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {info.platforms.includes('blog') && (
              <>
                <div className='col-12'>
                  <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>Blog</h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.blogLink', defaultMessage: 'رابط Blog' })}
                      value={info.accounts.blog.link}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            blog: {
                              ...info.accounts.blog,
                              link: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.blogFollowers', defaultMessage: 'عدد المتابعين على Blog' })}
                      value={info.accounts.blog.followers}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            blog: {
                              ...info.accounts.blog,
                              followers: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {info.platforms.includes('snapchat') && (
              <>
                <div className='col-12'>
                  <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>
                    Snapchat
                  </h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.snapchatLink', defaultMessage: 'رابط Snapchat' })}
                      value={info.accounts.snapchat.link}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            snapchat: {
                              ...info.accounts.snapchat,
                              link: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.snapchatFollowers', defaultMessage: 'عدد المتابعين على Snapchat' })}
                      value={info.accounts.snapchat.followers}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            snapchat: {
                              ...info.accounts.snapchat,
                              followers: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {info.platforms.includes('other') && (
              <>
                <div className='col-12'>
                  <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>
                    {formatMessage({ id: 'form.otherPlatform', defaultMessage: 'منصة أخرى' })}
                  </h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.otherPlatformName', defaultMessage: 'اسم المنصة الأخرى' })}
                      value={info.accounts.other.name}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            other: {
                              ...info.accounts.other,
                              name: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.otherPlatformLink', defaultMessage: 'رابط المنصة الأخرى' })}
                      value={info.accounts.other.link}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            other: {
                              ...info.accounts.other,
                              link: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={formatMessage({ id: 'form.otherPlatformFollowers', defaultMessage: 'عدد المتابعين على المنصة الأخرى' })}
                      value={info.accounts.other.followers}
                      onChange={(e) =>
                        setInfo({
                          ...info,
                          accounts: {
                            ...info.accounts,
                            other: {
                              ...info.accounts.other,
                              followers: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}

            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4 mb-2`}>
                {formatMessage({ id: 'form.ecommerceLicense', defaultMessage: 'ترخيص التجارة الإلكترونية' })}
              </h3>
            </div>
            <div className='col-12'>
              <div className='input-group mb-1 flex-column'>
                <label style={{ fontSize: '18px', marginBottom: '10px' }}>
                  {formatMessage({ id: 'form.hasEcommerceLicense', defaultMessage: 'هل لديك رخصة موثوق ؟' })}
                </label>
                <div className={styles.radioContainer}>
                  <div className={styles.radioOption}>
                    <input
                      type='radio'
                      id='licenseYes'
                      name='ecommerceLicense'
                      value='نعم'
                      checked={info.ecommerceLicense === 'نعم'}
                      onChange={(e) =>
                        setInfo({ ...info, ecommerceLicense: e.target.value })
                      }
                    />
                    <label
                      htmlFor='licenseYes'
                      style={{ marginLeft: '10px', fontSize: '16px' }}
                    >
                      {formatMessage({ id: 'form.yes', defaultMessage: 'نعم' })}
                    </label>
                  </div>
                  <div className={styles.radioOption}>
                    <input
                      type='radio'
                      id='licenseNo'
                      name='ecommerceLicense'
                      value='لا'
                      checked={info.ecommerceLicense === 'لا'}
                      onChange={(e) =>
                        setInfo({ ...info, ecommerceLicense: e.target.value })
                      }
                    />
                    <label
                      htmlFor='licenseNo'
                      style={{ marginLeft: '10px', fontSize: '16px' }}
                    >
                      {formatMessage({ id: 'form.no', defaultMessage: 'لا' })}
                    </label>
                  </div>
                </div>
                {errors.ecommerceLicense && (
                  <div className={styles.errorText}>{errors.ecommerceLicense}</div>
                )}
              </div>
            </div>

            {info.ecommerceLicense === 'نعم' && (
              <div className='col-12'>
                <div className='input-group mb-1 mt-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder={formatMessage({ id: 'form.enterLicenseNumber', defaultMessage: 'ادخل رقم الرخصة' })}
                    value={info.licenseNumber}
                    onChange={(e) =>
                      setInfo({ ...info, licenseNumber: e.target.value })
                    }
                    required
                  />
                  {errors.licenseNumber && (
                    <div className={styles.errorText}>{errors.licenseNumber}</div>
                  )}
                </div>
              </div>
            )}
            
            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4`}>
                {formatMessage({ id: 'form.priceDetails', defaultMessage: 'تفاصيل الأسعار' })}
              </h3>
            </div>
            <p className={`${styles.p} mb-2`}>
              {formatMessage({ id: 'form.priceInfo', defaultMessage: 'نحن نعمل مع اكثر من الفي صانع محتوى، وعامل السعر يعتبر من العوامل الحاسمة بقرار العميل بطلب خدماتكم او لا. الرجاء وضع سعر مناسب علما بانه لن يكون هنالك أي عمولات خفية عليكم' })}
            </p>
            { info.ecommerceLicense === 'نعم' ? <> 
             <div className='col-12 mt-4'>
              <label className='d-flex' style={{ fontSize: '16px' ,marginBottom:'10px' }}>
                {formatMessage({ id: 'form.priceWithPublishing', defaultMessage: 'السعر مع النشر على منصتي انستقرام - تيك توك فقط' })}
              </label>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={formatMessage({ id: 'form.priceWithPublishingPlaceholder', defaultMessage: 'السعر مع نشر' })}
                  value={info.priceWithPublishing}
                  onChange={(e) =>
                    setInfo({ ...info, priceWithPublishing: e.target.value })
                  }
                />
              </div>
            </div>
            <div className='col-12 mt-3'>
              <label className='d-flex' style={{ fontSize: '16px' ,marginBottom:'10px'}}>
                {formatMessage({ id: 'form.priceWithoutPublishing', defaultMessage: 'السعر لتصوير وإنتاج مقطع الUGC فقط' })}
              </label>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={formatMessage({ id: 'form.priceWithoutPublishingPlaceholder', defaultMessage: 'السعر بدون نشر' })}
                  value={info.priceWithoutPublishing}
                  onChange={(e) =>
                    setInfo({ ...info, priceWithoutPublishing: e.target.value })
                  }
                />
              </div>
            </div></>: 
            <div className='col-12'>
              <label style={{ fontSize: '18px', marginBottom: '10px' }}>
                {formatMessage({ id: 'form.priceWithoutPublishing', defaultMessage: 'السعر لتصوير وإنتاج مقطع الUGC فقط' })}
              </label>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={formatMessage({ id: 'form.priceWithoutPublishingPlaceholder', defaultMessage: 'السعر بدون نشر' })}
                  value={info.priceWithoutPublishing}
                  onChange={(e) =>
                    setInfo({ ...info, priceWithoutPublishing: e.target.value })
                  }
                />
              </div>
            </div> }
          
          </div>
         

 <div className='btn-box'>
            <button
              className='btn-submit main-btn primary-color font-weight-bolder'
              type='submit'
              disabled={processing}
            >
              {processing && (
                <span
                  className='spinner-border spinner-border-sm ml-2'
                  role='status'
                ></span>
              )}
              <span>{formatMessage({ id: 'form.submit', defaultMessage: 'إرسال رسالة' })}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      <div
        className={`modal fade ${modalClass}`}
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
                {formatMessage({ id: 'form.modalTitle', defaultMessage: 'آيدا للتسويق' })}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setModalClass('')}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-5">
              {formatMessage({ id: 'form.modalSuccessMessage', defaultMessage: 'تم إرسال المعلومات سيتم التواصل معك في أقرب وقت' })}
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      <div
        className={`modal fade ${modalClassError}`}
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
                {formatMessage({ id: 'form.modalTitle', defaultMessage: 'آيدا للتسويق' })}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setModalClassError('')}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-5">
              {modalErrorMessage}
              <br />
              <a style={{borderBottom:' 1px solid var(--color-primary)'}} href="https://wa.me/966509211666">
                {formatMessage({ id: 'form.modalContactUs', defaultMessage: 'يمكنك التواصل معنا عن طريق الواتس اب من هنا' })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormToSheet;
