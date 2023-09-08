import styled from 'styled-components';

interface PostWriteControlProps {
  name?: string,
  label?: string,
  value?: string, 
  onChange?: React.ChangeEventHandler<HTMLInputElement> | React.ChangeEventHandler<HTMLTextAreaElement>,
  textarea?: boolean
}

const PostWriteControlBlock = styled.div`
    display: flex;
    flex-direction: column;

    label {
      color: #616161;
      font-size: 0.875rem;
    }

    input, textarea {
      padding: 0.5rem;
      border-radius: 8px;
      border: 1px solid #D4D3D3;
      margin-top: 0.5rem;
      outline: none;
    }

    textarea {
      font-family: inherit;
      resize: none;
    }

    & + & {
      margin-top: 1rem;
    }
`;

const PostWriteControl = ({ name, label, value, onChange, textarea }: PostWriteControlProps) => {
  const preventEnterKey = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  return (
    <PostWriteControlBlock>
      <label htmlFor={ name }>{ label }</label>
      {textarea ? (
        <textarea id={ name } name={ name } rows={10}
          onChange={ onChange as React.ChangeEventHandler<HTMLTextAreaElement> } value={ value }></textarea>
      ) : (
        <input id={ name } name={ name } 
          onChange={ onChange as React.ChangeEventHandler<HTMLInputElement> } onKeyDown={ preventEnterKey } value={ value } />
      )}
    </PostWriteControlBlock>
  );
}

export default PostWriteControl;
