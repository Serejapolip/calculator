const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const Calculator = () => {
  // Описание компонента Калькулятора, состоящего из кнопок с цифрами, операциями и полем для результата
  const [results, setResults] = React.useState([]);
  const [first, setFirst] = React.useState(null);
  const [second, setSecond] = React.useState(null);
  const [operation, setOperation] = React.useState(null);
  const [firstOrSecond, setFirstOrSecond] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const ClearKey = () => {
    // Функция для очистки всех данных ввода

    setResult(0);
    setFirst(null);
    setSecond(null);
    setOperation(null);
    setFirstOrSecond(0);
  };

  const ResultKey = () => {
    // Функция для вычисления результата на основе введенной операции
    const getResult = () => {
      let stringToPush = null;
      if (operation == "+") {
        setResult(Number(first) + Number(second));
        setFirst(Number(first) + Number(second));
        stringToPush =
        first + operation + second + " = " + (Number(first) + Number(second));
      }
      if (operation == "-") {
        setResult(Number(first) - Number(second));
        setFirst(Number(first) - Number(second));
        stringToPush =
        first + operation + second + " = " + (Number(first) - Number(second));
      }
      if (operation == "*") {
        setResult(Number(first) * Number(second));
        setFirst(Number(first) * Number(second));
        stringToPush =
        first + operation + second + " = " + Number(first) * Number(second);
      }
      if (operation == "/") {
        setResult(Number(first) / Number(second));
        setFirst(Number(first) / Number(second));
        stringToPush =
        first + operation + second + " = " + Number(first) / Number(second);
      }
      if (first && second) {
        if (results) {
          setResults([...results, stringToPush]);
        } else {
          setResults([stringToPush]);
        }
      }
      setSecond(null);
    };

    return /*#__PURE__*/React.createElement("button", { onClick: getResult }, "=");
  };

  const ResultField = () => {
    // Компонент для отображения поля с текущими введенными данными и результатом вычислений
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", null,
      first,
      operation,
      second, /*#__PURE__*/
      React.createElement("p", null, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ", result))));



  };
  const text = "История вычислений: ";
  const HistoryField = () => {
    // Компонент для отображения истории вычислений, с возможностью очистить историю
    const clearHistoryField = () => {
      setResults([]);
    };
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("p", null, text),
      results.map((item, index) => /*#__PURE__*/
      React.createElement("p", { key: index }, item)), /*#__PURE__*/

      React.createElement("p", null, /*#__PURE__*/
      React.createElement("button", {
        className: "btn btn-three",
        style: { width: "auto" },
        onClick: clearHistoryField }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0439"))));






  };
  const OperationKey = ({ text }) => {
    // Компонент кнопки операции для установки выбранной операции
    const setOperationClick = () => {
      setOperation(text);
      if (first && firstOrSecond == 0) {
        setFirstOrSecond(1);
        setFirst(Number(first));
      }
    };
    return /*#__PURE__*/React.createElement("button", { onClick: setOperationClick }, text);
  };

  const NumKey = ({ text }) => {
    // Компонент кнопки для ввода числа
    const setNum = () => {
      if (first != null && firstOrSecond == 0) {
        setFirst(first + text);
      } else {
        if (second != null && firstOrSecond == 1) {
          setSecond(second + text);
        } else {
          if (text != 0) {
            firstOrSecond == 0 ? setFirst(text) : setSecond(text);
          }
        }
      }
    };
    return /*#__PURE__*/React.createElement("button", { onClick: setNum }, text);
  };

  return /*#__PURE__*/ (
    // Макет построения калькулятора с кнопками и полями для ввода и результатов
    React.createElement("div", { className: "center flex-container" }, /*#__PURE__*/
    React.createElement("div", { className: "calculator" }, /*#__PURE__*/
    React.createElement("h1", null, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(NumKey, { text: "1" }), /*#__PURE__*/
    React.createElement(NumKey, { text: "2" }), /*#__PURE__*/
    React.createElement(NumKey, { text: "3" })), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement(NumKey, { text: "4" }), /*#__PURE__*/
    React.createElement(NumKey, { text: "5" }), /*#__PURE__*/
    React.createElement(NumKey, { text: "6" }), /*#__PURE__*/
    React.createElement(OperationKey, { text: "/" })), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement(NumKey, { text: "7" }), /*#__PURE__*/
    React.createElement(NumKey, { text: "8" }), /*#__PURE__*/
    React.createElement(NumKey, { text: "9" }), /*#__PURE__*/
    React.createElement(OperationKey, { text: "*" })), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement(OperationKey, { text: "+" }), /*#__PURE__*/
    React.createElement(NumKey, { text: "0" }), /*#__PURE__*/
    React.createElement(OperationKey, { text: "-" }), /*#__PURE__*/
    React.createElement(ResultKey, null)), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement(ResultField, null), /*#__PURE__*/
    React.createElement("button", {
      className: "btn btn-three",
      style: { width: "100px" },
      onClick: ClearKey }, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"))), /*#__PURE__*/





    React.createElement("div", null, /*#__PURE__*/
    React.createElement(HistoryField, null))));



};

const App = () => {
  // Главный компонент приложения, содержащий компонент Калькулятора
  return /*#__PURE__*/React.createElement(Calculator, null);
};
// Рендеринг приложения в корневой элементReactDOMReactDOM
root.render( /*#__PURE__*/React.createElement(App, null));