import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, InputNumber, Radio, Steps } from "antd";
import './Welcome.css'

const { Option } = Select;
const { Step } = Steps;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <div className='wrapper'>
        <h1>Formulario de Registro</h1>
        <h3>Body Works</h3>
        <img src='https://i.ibb.co/zsx9LNC/logoshape.png' alt='' width='200' />
          <p>La forma de trabajar tu salud</p>
        </div>
        <Form.Item
          label={
            <span>
              Nombre Completo&nbsp;
              <Tooltip title="Nombre Completo" />
            </span>
          }
        >
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "Nombre Completo",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Número de Cédula&nbsp;
              <Tooltip title="DMEX alternativo">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "Digita tu numero cedula o DMEX",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Correo Electrónico">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "Digita tu correo electrónico"
              },
              {
                required: true,
                message: "Digita tu correo electrónico"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Contraseña" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Digita tu contraseña"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirma contraseña" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Confirma contraseña"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>

        <Form.Item label="Genero" hasFeedback>
          {getFieldDecorator("select", {
            rules: [{ required: false, message: "Selecciona tu genero" }]
          })(
            <Select placeholder="Selecciona tu genero">
              <Option value="Hombre">Hombre</Option>
              <Option value="Mujer">Mujer</Option>
              <Option value="No especificar">No especificar</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Peso">
          {getFieldDecorator("input-number", { initialValue: 60 })(
            <InputNumber min={20} max={200} />
          )}
          <span className="ant-form-text"> kilogramos</span>
        </Form.Item>

        <Form.Item label="Grasa Corporal">
          {getFieldDecorator("input-number", { initialValue: 5 })(
            <InputNumber min={1} max={100} />
          )}
          <span className="ant-form-text"> % grasa</span>
        </Form.Item>

        <Form.Item label="Masa Corporal">
          {getFieldDecorator("input-number", { initialValue: 2 })(
            <InputNumber min={1} max={100} />
          )}
          <span className="ant-form-text"> % masa </span>
        </Form.Item>

        <Form.Item label="Ubicación Preferida">
          {getFieldDecorator("radio-group")(
            <Radio.Group>
              <Radio value="a">Algun lugar</Radio>
              <Radio value="b">Otro lugar</Radio>
              <Radio value="c">nuevo lugar</Radio>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item label="Telefono Principal">
          {getFieldDecorator("phone", {
            rules: [{ required: true, message: "Digita tu numero de telefono" }]
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </Form.Item>

        <Form.Item label="Telefono Alternativo">
          {getFieldDecorator("phone", {
            rules: [
              { required: false, message: "Digita tu numero de telefono" }
            ]
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </Form.Item>

        <Form.Item label="Captcha" extra="Para confirmar que eres humano.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator("captcha", {
                rules: [
                  {
                    required: true,
                    message: "Confirma el captcha!"
                  }
                ]
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              <p>He leido terminos de registro</p>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Registro
          </Button>
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Man_Tired_After_Workout_Cartoon.svg/800px-Man_Tired_After_Workout_Cartoon.svg.png"
            alt=""
            width="400"
          />
          
        </div>
        
        <Steps progressDot current={1}>
          <Step
            title="Registro"
            description="Estas a un paso de cambiar tu estilo de vida."
          />
          <Step
            title="Formulario"
            description="Información necesaria para darte el mejor servicio."
          />
          <Step title="Listo" description="Bienvenido." />
        </Steps>
      </Form>
    );
  }
}

export default Form.create({ name: "register" })(
  RegistrationForm
);

