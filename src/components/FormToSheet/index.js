import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './styles.module.css';

const FormToSheet = () => {
  const [processing, setProcessing] = useState(false);
  const [modalClass, setModalClass] = useState('');
  const [modalClassError, setModalClassError] = useState('');
  const [info, setInfo] = useState({
    name: '',
    contentType: '',
    platforms: [],
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
    };

    if (!info.name) {
      newErrors.name = 'الرجاء إدخال الاسم';
      formValid = false;
    }
    if (!info.number) {
      newErrors.number = 'الرجاء إدخال الرقم';
      formValid = false;
    }
    if (info.platforms.length === 0) {
      newErrors.platforms = 'الرجاء اختيار منصة واحدة على الأقل';
      formValid = false;
    }
    if (!info.ecommerceLicense) {
      newErrors.ecommerceLicense = 'الرجاء اختيار حالة رخصة موثوق';
      formValid = false;
    }
    if (info.ecommerceLicense === 'نعم' && !info.licenseNumber) {
      newErrors.licenseNumber = 'الرجاء إدخال رقم الرخصة';
      formValid = false;
    }

    setErrors(newErrors);

    if (!formValid) {
      return;
    }

    setProcessing(true);
    const response = await fetch('/submit-form.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });

    if (response.ok) {
      setModalClass('show');
      setProcessing(false);
      setInfo({
        name: '',
        contentType: '',
        platforms: [],
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
      });
    } else {
      setModalClassError('show');
      setProcessing(false);
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
          <h2 className={styles.required__title}>انضم لفريق صانعي المحتوى</h2>
        </div>
        <p>املأ الفورم المرفق هنا لنبدأ العمل معا</p>

        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-12'>
              <h3 className={`${styles.sectionTitle} mt-4 mb-2`}>
                معلومات شخصية
              </h3>
            </div>
            <div className='col-12 col-md-6'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='الاسم'
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
                    نوع المحتوى
                  </option>
                  <option value='ترفيه والعاب'>ترفيه والعاب</option>
                  <option value='أطفال'>أطفال</option>
                  <option value='عناية وجمال'>عناية وجمال</option>
                  <option value='اخبار'>اخبار</option>
                  <option value='تقنية'>تقنية</option>
                  <option value='تطوير أعمال'>تطوير أعمال</option>
                  <option value='فنون'>فنون</option>
                  <option value='طبخ وطعام'>طبخ وطعام</option>
                  <option value='ديكور'>ديكور</option>
                  <option value='أزياء واناقة'>أزياء واناقة</option>
                  <option value='صحة ولياقة'>صحة ولياقة</option>
                  <option value='كتب وتعليم'>كتب وتعليم</option>
                  <option value='السفر والسياحة'>السفر والسياحة</option>
                  <option value='محتوى اخرى'>محتوى اخرى</option>
                </select>
              </div>
            </div>

            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4 mb-2`}>
                معلومات الاتصال
              </h3>
            </div>
            <div className='col-12 col-md-6'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='الرقم'
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
                  placeholder='البريد الإلكتروني'
                  value={info.email}
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                />
              </div>
            </div>

            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4 mb-2`}>
                روابط الأعمال السابقة
              </h3>
            </div>
            <div className='col-12'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='رابط لأعمال سابقة'
                  value={info.pastWork}
                  onChange={(e) =>
                    setInfo({ ...info, pastWork: e.target.value })
                  }
                />
              </div>
            </div>

            <div className='col-12'>
              <h3 className={`${styles.sectionTitleBorder} mt-4 mb-2`}>
                المنصات الاجتماعية
              </h3>
            </div>
            <div className='col-12'>
              <div className='input-group mb-1'>
                <label style={{ fontSize: '18px', marginBottom: '10px' }}>
                  على أي المنصات أنت أكثر تأثيراً؟
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
                      placeholder='رابط Instagram'
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
                      placeholder='عدد المتابعين على Instagram'
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
                      placeholder='رابط YouTube'
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
                      placeholder='عدد المتابعين على YouTube'
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
                      placeholder='رابط TikTok'
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
                      placeholder='عدد المتابعين على TikTok'
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
                      placeholder='رابط Twitter'
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
                      placeholder='عدد المتابعين على Twitter'
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
                      placeholder='رابط Facebook'
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
                      placeholder='عدد المتابعين على Facebook'
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
                      placeholder='رابط Blog'
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
                      placeholder='عدد المتابعين على Blog'
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
                      placeholder='رابط Snapchat'
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
                      placeholder='عدد المتابعين على Snapchat'
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
                    منصة أخرى
                  </h3>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='input-group mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='اسم المنصة الأخرى'
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
                      placeholder='رابط المنصة الأخرى'
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
                      placeholder='عدد المتابعين على المنصة الأخرى'
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
                ترخيص التجارة الإلكترونية
              </h3>
            </div>
            <div className='col-12'>
              <div className='input-group mb-1 flex-column'>
                <label style={{ fontSize: '18px', marginBottom: '10px' }}>
                  هل لديك رخصة موثوق ؟{' '}
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
                      نعم
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
                      لا
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
                    placeholder='ادخل رقم الرخصة'
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
                تفاصيل الأسعار
              </h3>
            </div>
            <p className={`${styles.p} mb-2`}>نحن نعمل مع اكثر من الفي صانع محتوى، وعامل السعر يعتبر من العوامل الحاسمة بقرار العميل بطلب خدماتكم او لا.<br/> الرجاء وضع سعر مناسب علما بانه لن يكون هنالك أي عمولات خفية عليكم</p>
            { info.ecommerceLicense === 'نعم' ? <> 
             <div className='col-12 col-md-6'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='السعر مع نشر'
                  value={info.priceWithPublishing}
                  onChange={(e) =>
                    setInfo({ ...info, priceWithPublishing: e.target.value })
                  }
                />
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='السعر بدون نشر'
                  value={info.priceWithoutPublishing}
                  onChange={(e) =>
                    setInfo({ ...info, priceWithoutPublishing: e.target.value })
                  }
                />
              </div>
            </div></>: 
            <div className='col-12 col-md-12'>
              <div className='input-group mb-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='السعر بدون نشر'
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
              <span>إرسال رسالة</span>
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
                آيدا للتسويق
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
              {' '}
              تم إرسال الطلب سيتم التواصل معك في أقرب وقت <br />
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
                آيدا للتسويق{' '}
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
    </div>
  );
};

export default FormToSheet;
