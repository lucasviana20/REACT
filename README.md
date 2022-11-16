# REACT
Conceitos e exemplos de códigos em React

# O que é um hook?

Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. 
Hooks não funcionam dentro de classes - eles permitem que você use React sem classes.

**Exemplos de Hooks:**

**useState ⇒**

Permite a criação de estado no componente através de função.

OBS:A página em si já possui um estado.

**Código:**

function FavoriteColor() {
    const [color, setColor] = useState("");
}

**Color:** Variável. (Armazena o valor)
**setColor:** Função para atualizar o estado. (Altera o valor)

**useEffect⇒**

Consequência de uma ação.

Rendenriza quando variável sofre mudança.

**Código:**

function Timer() {
   const [count, setCount] = useState(0);

useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
    }, 1000);
});
