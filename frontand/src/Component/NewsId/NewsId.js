import React, {Component} from 'react';
import {connect} from "react-redux";
import {getNewsId} from "../../Store/actionOrder";
import NewsImage from "../NewsImage/NewsImage";
import FormComment from "../FormComment/FormComment";
import {deleteComment, getComments} from "../../Store/commentAction";
import {Button, Col, FormGroup} from "reactstrap";
import './NewsId.css';

class NewsId extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNewsId(id);
        this.props.getComments(id)
    }

    render() {
        return (
            <div className="blocks">
                {this.props.oneNews && this.props.oneNews.map(key=> <div className="newsBlock" key={key.id}>
                    <div>
                        <h4>Заголовок: {key.heading}</h4>
                        <span>Дата добавления: <b>{key.date}</b></span>
                        <p>Описание: <b>{key.description}</b></p>
                    </div>
                    <NewsImage
                        image={key.image}
                        width={'300px'}
                    />
                </div>)}
                <div className="commentsblock">
                    <div className="headingComment">Коментарии:</div>
                    {this.props.comments && this.props.comments.map(key=> <div className="comments" key={key.id}>
                        <div>
                            <p className='author'><b>Автор: </b>{key.author}</p>
                            <p><b>Коментарий: </b>{key.comments}</p>
                        </div>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={()=>this.props.deleteComment(key.id, key.news_id)}>Delete</Button>
                            </Col>
                        </FormGroup>
                    </div>)}
                </div>

                <FormComment
                    id={this.props.match.params.id}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    oneNews: state.oneNews,
    comments: state.comments
});

const mapDispatchToProps = dispatch =>({
    getNewsId: (id)=> dispatch(getNewsId(id)),
    getComments: (id)=>dispatch(getComments(id)),
    deleteComment: (id, news_id)=> dispatch(deleteComment(id, news_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsId);