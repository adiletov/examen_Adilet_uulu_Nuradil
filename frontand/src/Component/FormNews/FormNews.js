import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {postNewPost} from "../../Store/actionOrder";

class FormNews extends Component {
    state={
        heading: '',
        description: '',
        image: ''
    };

    inputChangeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    };

    fileChangeHandler = e => {
        this.setState({[e.target.name] : e.target.files[0]})
    };

    submitFile=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key=> formData.append(key, this.state[key]));
        this.props.postNewPost(formData);
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.submitFile}>
                    <FormGroup row>
                        <Label for="heading" sm={2}>Заголовок</Label>
                        <Col sm={10}>
                            <Input type="text" name="heading" id="heading"
                                   placeholder="Введите заголовок"
                                   required
                                   onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="description" sm={2}>Описание</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="description"
                                   required
                                   id="description"
                                   onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>Картинка</Label>
                        <Col sm={10}>
                            <Input type="file" name="image" id="image"
                                   onChange={this.fileChangeHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    postNewPost: (file)=> dispatch(postNewPost(file))
});
export default connect(null, mapDispatchToProps) (FormNews);