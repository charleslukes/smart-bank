import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';

const Form = (props) => {
  const {register, errors, setValue, validation, children} = props;
  const Inputs = useRef([]);

  useEffect(() => {
    children.map((child) => {
      const name = child.props.name;
      if (name) {
        register({name}, validation[name]);
      }
    });
  }, [register]);

  return (
    <View>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          ...child.props,
          inputRef: (e) => {
            Inputs.current[index] = e;
          },
          onChangeText: (value) => {
            return setValue(child.props.name, value, {
              shouldValidate: true,
              shouldDirty: true,
            });
          },
          onSubmitEditing: () => {
            Inputs.current[index + 1]
              ? Inputs.current[index + 1].focus()
              : Inputs.current[index].blur();
          },
          //onBlur: () => triggerValidation(child.props.name),
          blurOnSubmit: false,
          //name: child.props.name,
          error: errors[child.props.name],
        });
      })}
    </View>
  );
};

export default Form;
