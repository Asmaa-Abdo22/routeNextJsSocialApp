import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Comment, Post } from "@/types/posts.type";
import Box from "@mui/material/Box";

const CommentCard = ({ commentInfo }: { commentInfo: Comment }) => {
  return (
    <>
      <Box sx={{ bg: "#f1f1f1", px: 3, py: 2, borderRadius: 8 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={commentInfo.commentCreator.name}
          subheader={new Date(commentInfo.createdAt).toLocaleDateString()}
        />
        <Typography component="p" sx={{ pl: 5 }}>
          {commentInfo.content}
        </Typography>
      </Box>
    </>
  );
};

export default CommentCard;
