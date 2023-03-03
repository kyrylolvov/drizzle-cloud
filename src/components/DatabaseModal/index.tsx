import React, { FC, useEffect, useMemo } from 'react';
import ReactModal from 'react-modal';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from '../Input';
import Button from '../Button';
import Select from '../Select';

import { regionOptions } from '../../utils/constants';
import { useDatabaseStore } from '../../store/databaseStore';
import { ICreateDatabase } from '../../types/database';

import { ReactComponent as CrossIcon } from '../../assets/images/icons/cross-icon.svg';

import * as css from './css';

interface IDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DatabaseModal: FC<IDashboardModalProps> = ({ isOpen, onClose }) => {
  const { createDatabase } = useDatabaseStore((state) => state);

  const initialValues = useMemo<ICreateDatabase>(
    () => ({
      name: '',
      region: '',
    }),
    [isOpen]
  );

  const validationSchema = yup.object({
    name: yup.string(),
    region: yup.string().required('This field is required'),
  });

  const { values, errors, handleChange, setFieldValue, handleSubmit, resetForm, validateForm, isValid } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    onSubmit: async (values) => {
      await createDatabase(values);
      onClose();
    },
  });

  useEffect(() => {
    if (!isOpen) resetForm();
    else validateForm();
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
      appElement={document.getElementById('root') || undefined}
      overlayElement={(props, contentElement) => (
        <div css={css.modalBackdrop} {...props}>
          {contentElement}
        </div>
      )}
      css={css.modal}
    >
      <div css={css.modalHeader}>
        <h3>Create new database</h3>
        <CrossIcon onClick={onClose} />
      </div>
      <form css={css.modalBody} onSubmit={handleSubmit}>
        <div css={css.twoColumnContainer}>
          <Input
            label="Name"
            name="name"
            placeholder="Database name (optional)"
            value={values.name}
            onChange={handleChange}
          />
          <Select
            label="Region"
            placeholder="Select a region"
            options={regionOptions}
            value={values.region}
            handleChange={(value) => setFieldValue('region', value.value)}
          />
        </div>
        <Button type="submit" style={{ marginTop: '32px', textTransform: 'uppercase' }} disabled={!isValid}>
          Continue
        </Button>
      </form>
    </ReactModal>
  );
};

export default DatabaseModal;
