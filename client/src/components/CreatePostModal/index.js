import FileBase64 from 'react-file-base64';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import { createPost, hideModal } from '../../redux/actions';
import { Button, Modal, TextareaAutosize, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';

export default function CreatePostModal() {
  const [data, setData] = React.useState({
    title: '',
    content: '',
    attachment: '',
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);

  console.log('isShow: ', isShow);

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: '',
      content: '',
      attachment: '',
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    console.log('data: ', data);
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div id='simple-modal-title'>
      <h2>Create New Post</h2>
      <form noValidate autoComplete='off'>
        <TextField

          required
          label='Title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          rowsMin={10}
          rowsMax={15}
          placeholder='Content...'
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <Box sx={{mt: {sm:2, lg: 4}}}>
          <FileBase64
            accept='image/*'
            multiple={false}
            type='file'
            value={data.attachment}
            onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
            sx={{height: '48px', width: '100%'}}
          />
        </Box>
        <Box sx={{mt: 2}}>
          <Button
            variant='primary'
            color='primary'
            component='span'
            onClick={onSubmit}
          >
            Create
          </Button>
        </Box>
      </form>
    </div>
  );

  return (
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
  );
}
