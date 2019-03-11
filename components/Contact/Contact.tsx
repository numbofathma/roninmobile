import * as React from 'react';
import {ContactWrapper, LoaderStyled} from './style';
import { Container, Row, Col, Form, FormGroup, Input, Button, FormText, FormFeedback } from 'reactstrap';
import {SlideHeader} from '../common/Style/style';
import {ContactFormErrorsInterface} from '../../interfaces/interfaces';
import ContactFormValidator from '../../services/ContactFormValidator';
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';
import EmailService from '../../services/EmailService';
import SocialListContainer from '../SocialList/SocialListContainer';

interface ContactFormState {
    name: string;
    email: string;
    message: string;
    isSending: boolean;
    isSuccess: boolean;
    errors: ContactFormErrorsInterface;
}

class Contact extends React.Component<any, ContactFormState> {
    private contactFormValidator: ContactFormValidator;

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            isSending: false,
            isSuccess: false,
            errors: {}
        };

        this.contactFormValidator = new ContactFormValidator();
    }

    public render() {
        const {name, email, message, errors} = this.state;

        const contactForm = <ContactWrapper>
                <Container>
                    <Row>
                        <Col>
                            <SlideHeader>CONTACT US!</SlideHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>It's easy to get in contact with us, just drop us a line and we will get in touch as soon as possible.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={this.sendEmail}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input
                                                type='text'
                                                name='name'
                                                id='name'
                                                value={name}
                                                bsSize='lg'
                                                placeholder='NAME'
                                                onChange={this.handleChange}
                                                invalid={!!errors.name}
                                            />
                                            <FormText>Tell us your name.</FormText>
                                            <FormFeedback>{errors.name}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input
                                                type='email'
                                                name='email'
                                                id='email'
                                                value={email}
                                                bsSize='lg'
                                                placeholder='EMAIL'
                                                onChange={this.handleChange}
                                                invalid={!!errors.email}
                                            />
                                            <FormText>We need your email to contanct you back.</FormText>
                                            <FormFeedback>{errors.email}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Input
                                        type='textarea'
                                        name='message'
                                        id='message'
                                        value={message}
                                        bsSize='lg'
                                        placeholder='MESSAGE'
                                        rows={10}
                                        onChange={this.handleChange}
                                        invalid={!!errors.message}
                                    />
                                    <FormText>Your message to us.</FormText>
                                    <FormFeedback>{errors.message}</FormFeedback>
                                </FormGroup>
                                <Button size='lg'>SEND MESSAGE</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <br />
                            <SocialListContainer />
                            <br />
                            <div className={'small text-center'}>
                                Copyright &copy; Ronin Mobile
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ContactWrapper>;

        if (this.state.isSending) {
            return (
                <ContactWrapper>
                    <Container>
                        <Row>
                            <Col>
                                <SlideHeader>CONTACT US!</SlideHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <LoaderStyled>
                                    <Loader
                                        type='Oval'
                                        color='#555555'
                                        height='250'
                                        width='250'
                                    />
                                </LoaderStyled>
                            </Col>
                        </Row>
                    </Container>
                </ContactWrapper>
            );
        }

        return (
            contactForm
        );
    }

    private handleChange = (e) => {
        const contactFormFieldsValues = {};
        contactFormFieldsValues[e.target.name] = e.target.value;

        this.setState(contactFormFieldsValues);
    }

    private sendEmail = async (e) => {
        e.preventDefault();

        this.setState({
            isSending: true,
            errors: {}
        });

        if (this.contactFormValidator.validate(this.state)) {
            if (await EmailService.sendEmail(this.state)) {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    errors: {},
                    isSending: false,
                    isSuccess: true
                });

                await Swal.fire('Email sent', 'We will get back to you shortly!', 'success');
            }
            else {
                this.setState({
                    errors: {},
                    isSending: false,
                    isSuccess: false
                });

                await Swal.fire('Oops...', 'Something went wrong! Please try again later!', 'error');
            }
        }
        else {
            this.setState({
                errors: this.contactFormValidator.getErrors(),
                isSending: false,
                isSuccess: false
            });
        }

    }
}

export default Contact;
