import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from '@material-ui/core';
import { useForm } from 'react-hooks-useform';


export const NewMarkdown = ({ component, onCancel, onCreate }) => {
  const [fields, form] = useForm({
    fields: [
      { name: 'content', label: 'Content' },
    ],
    submit: values => {
      onCreate({
        type: 'markdown',
        content: values.get('content'),
      });
      onCancel();
    },
  });

  return (
    <div>
      <Card>
        <CardHeader title="Add text component" />
        <CardContent>

        <TextField {...fields.content} multiline rowsMax="20" />

      </CardContent>

      <CardActions>
        <Button variant="outlined" color="primary" onClick={form.submit}>Save</Button>
        <Button variant="outlined" onClick={onCancel}>Cancel</Button>
      </CardActions>

    </Card>
    </div>
  );
};
