import { Button, Checkbox, Form, Input, InputNumber, Select, } from 'antd';
import Footer from '../../components/shared/Footer/Footer';
import SectionTitle from '../../components/shared/SectionTitle/SectionTitle';
import logImg from '../../assets/images/login/allurawomen.png';
import logImg2 from '../../assets/images/login/SquigglesColorful.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';






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

const Login = () => {
    const nagivate = useNavigate()
    const { signInUser } = useContext(AuthContext);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const { email, password } = values;
        signInUser(email, password)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'login Successfully',
            showConfirmButton: false,
            timer: 1500
        })
        nagivate('/')

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
                    heading={'please Login'}
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


                            <Form.Item {...tailFormItemLayout}>
                                <Button htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>
                            <h2>New here? Register please..<Link to='/register'>Click here</Link></h2>
                        </Form>
                    </div>
                    {/* img----------------------------------- */}
                    <div className='hidden md:inline'>
                        <img className='w-[500px]' src={logImg}></img>
                    </div>
                    <div className='absolute w-32 bottom-52 left-5'>
                        <img className='hidden md:inline' src={logImg2}></img>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Login;