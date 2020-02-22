import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {postComment} from "../../Store/commentAction";

class FormComment extends Component {
    state={
        author: '',
        comment: ''
    };

    inputChangeHandler=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };
    submitComment=(e)=>{
        e.preventDefault();
        const comment = {
            author: this.state.author,
            comment: this.state.comment,
            id: this.props.id
        };
        this.props.postComment(comment);
        this.setState({author: '', comment: ''})
    };
    styles={
        border: '1px solid #cccccc',
        padding: '10px',
    };

    render() {
        return (
            <div style={this.styles}>
                <Form onSubmit={this.submitComment}>
                    <FormGroup row>
                        <Label for="author" sm={2}>Автор</Label>
                        <Col sm={10}>
                            <Input type="text" name="author" id="author"
                                   placeholder="Автор"
                                   value={this.state.author}
                                   onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="comment" sm={2}>Описание</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="comment"
                                   required
                                   id="comment"
                                   value={this.state.comment}
                                   onChange={this.inputChangeHandler}
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


const mapDispatchToProps = dispatch=>({
    postComment: (comment)=> dispatch(postComment(comment))
});

export default connect(null, mapDispatchToProps)(FormComment);