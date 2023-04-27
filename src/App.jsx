import("./App.css");
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="teste">
      <div className={isDarkMode ? "dark" : ""}>
        <button
          onClick={toggleDarkMode}
          className="dark-mode-btn"
          style={{
            backgroundColor: "white",
            padding: "5px",
            borderColor: "BlueViolet",
            borderRadius: "7px",
            width: "150px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          {isDarkMode ? "Modo escuro" : "Modo claro"}
        </button>

        <h1
          style={{
            textAlign: "center",
            color: "BlueViolet",
            margin: "50px",
          }}
        >
          Desenvolvimento Web / Programação Web
        </h1>

        <h2 style={{ textAlign: "right", color: "BlueViolet", margin: "15px" }}>
          Moisés Fernandes
        </h2>

        <div className="resumo" style={{ margin: "10px" }}>
          <h3 style={{ color: "BlueViolet" }}>Abstract</h3>
          <p>
            Web development includes creating, coding and programming websites
            and their respective elements and languages. It also involves
            integration with systems and tools, database storage, cybersecurity,
            among others, with the aim of structuring every detail of an
            internet page.
          </p>

          <h3 style={{ color: "BlueViolet" }}>Resumo</h3>
          <p>
            O desenvolvimento web inclui criação, codificação e programação de
            sites e seus respectivos elementos e linguagens. Ele também envolve
            integração com sistemas e ferramentas, armazenamento de banco de
            dados, cibersegurança, entre outros, com o objetivo de estruturar
            cada detalhe de uma página da internet.
          </p>
        </div>

        <div className="intro" style={{ padding: "50px" }}>
          <h2 style={{ color: "BlueViolet", height: "30px" }}>Introdução</h2>
          <br />
          <p>
            Desenvolvimento web é o termo utilizado para descrever o
            desenvolvimento de sites, na Internet, que seria uma área da
            tecnologia voltada à criação de sites, aplicativos, softwares,
            bancos de dados e determinadas outras ferramentas que de certa
            forma, constroem a internet como a conhecemos hoje. Os profissionais
            destas áreas são os programadores, ou desenvolvedores web: pessoas
            capacitadas para compreender, manusear e se utilizar de linguagens
            de programação para construir sistemas complexos voltados ao serviço
            do usuário. Dentro da carreira de desenvolvedor web existem diversas
            especialidades, como por exemplo front e back-end, infraestrutura de
            sistemas, especialistas em banco de dados, entre outros.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>Front-End</h2>

          <p>
            Front-End: O Front-end está muito relacionado com a interface
            gráfica do projeto. Ou seja, é onde se desenvolve a aplicação com a
            qual o usuário irá interagir diretamente, seja em softwares, sites,
            aplicativos, etc. Portanto, é essencial que o desenvolvedor tenha
            uma preocupação com a experiência do usuário.
          </p>

          <br />

          <p>
            Qual a importância do desenvolvimento front-end? O desenvolvimento
            front-end oferece o melhor de forma e função, para aprimorar a
            usabilidade do seu site por vários entalhes. Facilidade de
            navegação, arquitetura de informações e várias outras interfaces de
            usuário dependem fortemente da capacidade da tecnologia de
            front-end.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>Back-End</h2>

          <p>
            Back-End: Essa forma de desenvolvimento se relaciona com o que está
            por trás das aplicações desenvolvidas na programação. Ou seja, tudo
            que dá estrutura e apoio às ações do usuário da máquina é chamado de
            back-end. Quando acessamos um site, por exemplo, por trás de toda
            sua apresentação amigável esteticamente, há uma comunicação das
            informações trocadas entre banco de dados e navegador. Portanto, por
            trás da interface gráfica do realizador, o back-end está sempre
            agindo.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>Dev Front-End</h2>

          <p>
            Dev front-end é um termo muito utilizado para identificar
            profissionais que se especializaram especificamente nessa área. Além
            disso, apesar de envolver a interface do projeto, o programador
            front-end não é formado em design. A diferença entre os dois é que o
            desenvolvedor não desenha visualmente a interface. o profissional
            irá mexer com o código em si, projetando com quais ferramentas o
            usuário irá interagir.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>
            Qual a diferença entre back-end e front-end?
          </h2>

          <p>
            Back-end e front-end são duas áreas distintas de desenvolvimento de
            software, com funções e responsabilidades diferentes.
          </p>

          <br />

          <p>
            Front-end refere-se a todas as partes visíveis de um aplicativo ou
            site, ou seja, tudo que o usuário vê e com que interage diretamente.
            Isso inclui o design visual, a interface do usuário, a experiência
            do usuário e todos os elementos gráficos e interativos da aplicação.
            A linguagem principal usada para o desenvolvimento front-end é o
            HTML, CSS e JavaScript.
          </p>

          <br />

          <p>
            Já o back-end refere-se a todas as partes invisíveis de um
            aplicativo ou site, ou seja, tudo que acontece por trás da interface
            do usuário. O back-end é responsável por gerenciar a lógica do
            aplicativo, processamento de dados e armazenamento em banco de
            dados. Também é responsável pela comunicação entre o front-end e o
            banco de dados. As linguagens mais utilizadas para desenvolvimento
            back-end são: PHP, Python, Ruby, Java, C#, Node.js, entre outras.
          </p>

          <br />

          <p>
            Em resumo, o front-end se concentra na aparência e na experiência do
            usuário, enquanto o back-end se concentra em tornar o aplicativo
            funcional e gerenciar dados. É importante ressaltar que ambas as
            áreas são importantes para o desenvolvimento de um aplicativo ou
            site de sucesso.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>Fullstack</h2>

          <p>
            Um desenvolvedor full stack é um desenvolvedor de software que tem a
            habilidade e experiência necessárias para desenvolver uma aplicação
            do começo ao fim, do banco de dados à interface do usuário. Vantagem
            para a empresa que conta com esse profissional é que, como ele tem
            conhecimento de todas as camadas de uma aplicação, é capaz de
            desenvolver uma aplicação de forma mais eficiente e com menos erros.
            Ou seja, normalmente, esse profissional tem experiência com uma
            variedade de linguagens de programação, bancos de dados e frameworks
            de desenvolvimento web. Na prática, trata-se de um dev que não
            escreve código apenas para o front-end, mas também escreve o código
            API, de servidor, bem como trabalha para conectar a aplicação com os
            bancos de dados.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>
            As principais linguagens usadas no desenvolvimento web:
          </h2>

          <p>
            As linguagens de programação web são utilizadas especificamente para
            o desenvolvimentos das camadas de apresentação e de lógica de
            negócio de web sites, portais e aplicações web em geral.
          </p>

          <br />

          <p>
            HTML não é uma linguagem de programação, é uma linguagem de
            marcação. Bem resumidamente, linguagem de marcação é um conjunto de
            regras e códigos que define como os elementos da página são
            exibidos.
          </p>

          <br />

          <p>
            O CSS é utilizado em conjunto com o HTML. É uma linguagem utilizada
            para definição de estilos, para definir o layout de documentos HTML.
            Enquanto o HTML é usado para estruturar conteúdos, o CSS é usado
            para formatar conteúdos estruturados.
          </p>

          <br />

          <p>
            O JavaScript é uma linguagem utilizada para programação de scripts
            que são executados no navegador do usuário de um website ou como se
            diz, do lado do cliente. É uma linguagem dinâmica, orientada a
            objetos e criada com sintaxe similar à linguagem C, apesar de conter
            Java no nome.
          </p>

          <br />

          <p>
            O PHP é uma linguagem de script em que o código é normalmente
            embutido no próprio HTML. No caso do PHP, o código é executado do
            lado do servidor e é enviado para o cliente apenas o resultando em
            HTML puro. Com isso é possível a interação com banco de dados,
            outras aplicações e o código não fica exposto.
          </p>

          <br />

          <p>
            Dentre outras liguagens como Java, Python, Ruby, C++, Perl, C, ASP.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>
            Quais as diferenças entre Web Design e Web Development?
          </h2>

          <p>
            Web Design e Web Development são duas áreas distintas do
            desenvolvimento de websites, embora estejam inter-relacionadas.
          </p>

          <br />

          <p>
            O Web Design refere-se à criação da interface visual de um website,
            incluindo a escolha de cores, tipografia, layout, imagens, ícones, e
            outros elementos gráficos que definem a identidade visual do site. O
            objetivo do Web Design é criar um layout atraente e funcional que
            melhore a experiência do usuário e facilite a navegação pelo site.
            Os profissionais de Web Design usam ferramentas como Adobe
            Photoshop, Sketch, e Figma para criar protótipos de interface do
            usuário e trabalhar em estreita colaboração com o cliente para
            garantir que as suas necessidades sejam atendidas.
          </p>

          <br />

          <p>
            Já o Web Development refere-se à criação do backend do website, isto
            é, a parte não visível do site que inclui o desenvolvimento de banco
            de dados, programação, e outros aspectos técnicos que permitem a
            interação do usuário com o site. Os desenvolvedores web usam
            linguagens de programação como HTML, CSS, JavaScript, e PHP para
            construir e implementar funcionalidades, bem como sistemas de
            gerenciamento de conteúdo como WordPress e Drupal.
          </p>

          <br />

          <p>
            Resumidamente, enquanto o Web Design está mais relacionado com a
            estética e design do site, o Web Development está mais relacionado
            com a construção e funcionalidades do site. Ambos são essenciais
            para o desenvolvimento de um site de alta qualidade e bem-sucedido,
            e geralmente trabalham juntos em colaboração para atingir os
            objetivos do projeto.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>
            Quais os desafios o desenvolvedor web enfrenta durante sua carreira?
          </h2>
          <p>
            Os desenvolvedores web enfrentam diversos desafios ao longo de suas
            carreiras, desde a necessidade de manter-se atualizados com as
            últimas tecnologias e linguagens de programação até a pressão para
            entregar projetos dentro de prazos apertados.
          </p>

          <h3
            style={{ color: "BlueViolet", height: "45px", marginTop: "17px" }}
          >
            Principais desafios do desenvolvedor web em sua carreira:
          </h3>

          <ul>
            <li>
              <p>
                Evolução tecnológica: As tecnologias utilizadas na web estão em
                constante evolução, e os desenvolvedores precisam acompanhar as
                mudanças para manterem-se atualizados e relevantes. Novas
                linguagens de programação, bibliotecas e frameworks surgem
                regularmente, e os desenvolvedores precisam aprender a
                utilizá-las para manterem-se competitivos no mercado.
              </p>
            </li>

            <li>
              <p>
                Pressão por prazos: Os prazos são uma parte inevitável do
                desenvolvimento web, e muitas vezes os desenvolvedores precisam
                lidar com prazos apertados para entregar projetos. Isso pode
                levar a longas horas de trabalho e estresse constante.
              </p>
            </li>

            <li>
              <p>
                Problemas de compatibilidade: Os desenvolvedores precisam
                garantir que seus projetos funcionem em diferentes plataformas,
                navegadores e dispositivos. Isso pode ser especialmente difícil
                devido à variedade de tecnologias e dispositivos que existem
                atualmente.
              </p>
            </li>

            <li>
              <p>
                Segurança: A segurança é uma preocupação crescente no mundo da
                web. Os desenvolvedores precisam garantir que seus projetos
                sejam seguros e protegidos contra ataques maliciosos, incluindo
                invasões de hackers e roubo de dados.
              </p>
            </li>

            <li>
              <p>
                Usabilidade: Os desenvolvedores precisam garantir que seus
                projetos sejam fáceis de usar e acessíveis para todos os
                usuários, independentemente de suas habilidades ou deficiências.
              </p>
            </li>
          </ul>

          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>Conclusão</h2>

          <p>
            Ao meu entender, para aprender programação, é necessário entender,
            antes de qualquer outra coisa, que esta é uma profissão que exige
            estudo e atualização constantes. Na grande maioria das vezes, ao
            construir uma aplicação, as tecnologias se complementam e o
            conhecimento sobre uma linguagem acaba se refletindo no conhecimento
            sobre outra, e assim manter-se sempre na linha de frente das
            atualizações torna-se parte natural do trabalho.
          </p>

          <br />

          <p>
            Trabalhar em equipe: Os desenvolvedores muitas vezes trabalham em
            equipes, e precisam colaborar efetivamente com outros
            desenvolvedores, designers, gerentes de projeto e outros
            profissionais para entregar projetos bem-sucedidos.
          </p>

          <br />
          <br />

          <h2 style={{ color: "BlueViolet", height: "45px" }}>Referências</h2>

          <p>
            Kenzie. Disponivel em:{" "}
            <a
              href="https://kenzie.com.br/blog/desenvolvimento-web/"
              target="_blank"
            >
              https://kenzie.com.br/blog/desenvolvimento-web
            </a>
            . Acesso em 15 março 23.
            <br />
            <br />
            Wikipedia. Disponivel em:{" "}
            <a
              href="https://pt.wikipedia.org/wiki/Desenvolvimento_web"
              target="_blank"
            >
              https://pt.wikipedia.org/wiki/Desenvolvimento_web
            </a>
            . Acesso em 15 março 23.
            <br />
            <br />
            Totvs. Disponivel em:{" "}
            <a
              href="https://www.totvs.com/blog/developers/front-end/"
              target="_blank"
            >
              https://www.totvs.com/blog/developers/front-end
            </a>
            . Acesso em 15 março 23.
            <br />
            <br />
            Tecnoblog. Disponivel em:{" "}
            <a
              href="https://tecnoblog.net/responde/qual-a-diferenca-entre-front-end-e-back-end"
              target="_blank"
            >
              https://tecnoblog.net/responde/qual-a-diferenca-entre-front-end-e-back-end
            </a>
            . Acesso em 15 março 23.
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
