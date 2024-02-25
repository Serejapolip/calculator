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

    return <button onClick={getResult}>=</button>;
  };

  const ResultField = () => {
    // Компонент для отображения поля с текущими введенными данными и результатом вычислений
    return (
      <>
        <div>
          {first}
          {operation}
          {second}
          <p>Результат: {result}</p>
        </div>
      </>
    );
  };
  const text = "История вычислений: ";
  const HistoryField = () => {
    // Компонент для отображения истории вычислений, с возможностью очистить историю
    const clearHistoryField = () => {
      setResults([]);
    };
    return (
      <>
        <p>{text}</p>
        {results.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <p>
          <button
            className="btn btn-three"
            style={{ width: "auto" }}
            onClick={clearHistoryField}
          >
            Очистить историю вычислений
          </button>
        </p>
      </>
    );
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
    return <button onClick={setOperationClick}>{text}</button>;
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
    return <button onClick={setNum}>{text}</button>;
  };

  return (
    // Макет построения калькулятора с кнопками и полями для ввода и результатов
    <div className="center flex-container">
      <div className="calculator">
        <h1>Калькулятор</h1>
        <div>
          <NumKey text="1" />
          <NumKey text="2" />
          <NumKey text="3" />
        </div>
        <div>
          <NumKey text="4" />
          <NumKey text="5" />
          <NumKey text="6" />
          <OperationKey text="/" />
        </div>
        <div>
          <NumKey text="7" />
          <NumKey text="8" />
          <NumKey text="9" />
          <OperationKey text="*" />
        </div>
        <div>
          <OperationKey text="+" />
          <NumKey text="0" />
          <OperationKey text="-" />
          <ResultKey />
        </div>
        <div>
          <ResultField />
          <button
            className="btn btn-three"
            style={{ width: "100px" }}
            onClick={ClearKey}
          >
            Сбросить
          </button>
        </div>
      </div>
      <div>
        <HistoryField />
      </div>
    </div>
  );
};

const App = () => {
  // Главный компонент приложения, содержащий компонент Калькулятора
  return <Calculator />;
};
// Рендеринг приложения в корневой элементReactDOMReactDOM
root.render(<App />);
