import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

const TextcurrencyFormat = React.forwardRef(function TextcurrencyFormat(
  props,
  ref
) {
  const { onChange, name, ...other } = props;

  const handleChange = (values) => {
    onChange(values);
  };

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      // format="#### #### #### ####"
      // mask="_"
      onValueChange={(values) => {
        handleChange({
          target: {
            name: name,
            value: values.formattedValue,
          },
        });
      }}
      thousandSeparator
      isNumericString
      type="text"
    />
  );
});

TextcurrencyFormat.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  props: PropTypes.any,
};

export default TextcurrencyFormat;
