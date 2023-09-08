import styled from 'styled-components';

interface PostWriteFormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
  children: React.ReactNode
}

const PostWriteFormBlock = styled.form`
    display: flex;
    flex-direction: column;
`;

const PostWriteForm = ({ onSubmit, children }: PostWriteFormProps) => {
  return (
    <PostWriteFormBlock onSubmit={ onSubmit }>
      { children }
    </PostWriteFormBlock>
  );
}

export default PostWriteForm;
