import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, CardBody,  CardSubtitle,  CardTitle, Container} from "reactstrap";
import NewsImage from "../NewsImage/NewsImage";
import {deleteNews, getNews} from "../../Store/actionOrder";
import {NavLink} from "react-router-dom";

class News extends Component {
    componentDidMount() {
        this.props.getNews()
    }

    render() {
        return (
            <div>
                <Container>
                    {this.props.news && this.props.news.map(key=>
                        <Card key={key.id}>
                            <NewsImage
                                image={key.image}
                                width={'200px'}
                            />
                            <CardBody>
                                <CardSubtitle>{key.heading}</CardSubtitle>
                                <CardTitle>{key.date}</CardTitle>
                                <NavLink to={`/news/${key.id}`}>Read Full News</NavLink>
                                <Button onClick={()=>this.props.deleteNews(key.id)}>DELETE</Button>
                            </CardBody>
                        </Card>
                    )}
                </Container>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    news: state.news
});
const mapDispatchToProps = dispatch => ({
    getNews: ()=> dispatch(getNews()),
    deleteNews: (id)=>dispatch(deleteNews(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(News);