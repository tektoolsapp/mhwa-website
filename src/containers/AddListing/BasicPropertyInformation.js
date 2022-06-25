import React, { useEffect } from 'react';
// import { useStateMachine } from 'little-state-machine';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, InputNumber, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
// import addListingAction from './AddListingAction';
import {
  FormHeader,
  Title,
  FormContent,
  FormAction,
} from './AddPropertyListing.style';

const BasicPropertyInformation = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      hotelName: '',
      pricePerNight: '',
      hotelDescription: '',
      guest: '' || 0,
      bed: '' || 0,
    },
  });

  console.log('ERRORS: ', errors);

  useEffect(() => {
    register('guest', { required: true });
    register('bed', { required: true });
  }, [register]);

  const onSubmit = (data) => {
    console.log('DATA: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <FormHeader>
          <Title>Property Details:</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="Hotel Name"
              htmlFor="hotelName"
              error={errors.hotelName && <span>This field is required!</span>}
            >
              <Controller
                name="hotelName"
                defaultValue={''}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Write your hotel name here"
                  />
                )}
              />
            </FormControl>
          </Col>
          <Col sm={12}>
            <FormControl
              label="Price Per Night (USD)"
              htmlFor="pricePerNight"
              error={
                errors.pricePerNight && (
                  <>
                    {errors.pricePerNight?.type === 'required' && (
                      <span>This field is required!</span>
                    )}
                    {errors.pricePerNight?.type === 'pattern' && (
                      <span>Please enter only number!</span>
                    )}
                  </>
                )
              }
            >
              <Controller
                name="pricePerNight"
                defaultValue={''}
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9]*$/,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputNumber
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="00.00"
                  />
                )}
              />
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="Hotel Description"
          htmlFor="hotelDescription"
          error={
            errors.hotelDescription && <span>This field is required!</span>
          }
        >
          <Controller
            name="hotelDescription"
            defaultValue={''}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input.TextArea
                rows={5}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Tell people about your hotel, room, location & amenities"
              />
            )}
          />
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </FormAction>
    </form>
  );
};

export default BasicPropertyInformation;
