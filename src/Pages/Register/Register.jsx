import { Button, Checkbox, Form, Input, InputNumber, Select, } from 'antd';
import regImg from '../../assets/images/login/AlluraBackinTown.png';
import regImg2 from '../../assets/images/login/newart.png';
import SectionTitle from '../../components/shared/SectionTitle/SectionTitle';
import Footer from '../../components/shared/Footer/Footer';
import { Link } from 'react-router-dom';


const { Option } = Select;


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const Register = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="countryCode" noStyle>
            <Select
                style={{
                    width: 90,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
                <Option value="87">+880</Option>
            </Select>
        </Form.Item>
    );

    return (
        <>
            <section>
                <SectionTitle
                    heading={'please Register'}
                ></SectionTitle>
                <div className='flex items-center w-80 mx-auto md:w-full justify-center mt-8 gap-24'>


                    <div className='mt-20'>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                residence: ['zhejiang', 'hangzhou', 'xihu'],
                                prefix: '86',
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            scrollToFirstError
                        >

                            <Form.Item
                                name="nickname"
                                label="Nickname"
                                tooltip="What do you want others to call you?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your nickname!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The new password that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>



                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select gender!',
                                    },
                                ]}
                            >
                                <Select placeholder="select your gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="age" label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                    },
                                ]}
                                {...tailFormItemLayout}
                            >
                                <Checkbox>
                                    I have read the <a href="">agreement</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                            <h2 className='ml-24'>New here? Register please..<Link to='/login'>Click here</Link></h2>
                        </Form>
                    </div>
                    {/* img----------------------------------- */}
                    <div className='hidden md:inline'>
                        <img className='w-[620px]' src={regImg}></img>
                    </div>
                    <div className='absolute w-40 bottom-0 left-5'>
                        <img className='hidden md:inline' src={regImg2}></img>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>

    );
};

export default Register;