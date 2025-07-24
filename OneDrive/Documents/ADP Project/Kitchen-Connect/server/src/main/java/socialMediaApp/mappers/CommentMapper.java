package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.Comment;
import socialMediaApp.requests.CommentAddRequest;
import socialMediaApp.responses.comment.CommentGetResponse;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "post.id", target = "postId")
    @Mapping(source = "user.firstName", target = "userFirstName")
    @Mapping(source = "user.lastName", target = "userLastName")
    CommentGetResponse commentToResponse(Comment comment);

    List<CommentGetResponse> commentsToResponses(List<Comment> comments);

    @Mapping(source = "userId", target = "user.id")
    @Mapping(source = "postId", target = "post.id")
    Comment addRequestToComment(CommentAddRequest commentAddRequest);
}
