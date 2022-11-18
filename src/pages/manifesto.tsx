import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";

import {
  ContentContainer,
  Page,
  Content,
  InfoContainer,
} from "../styles/Manifesto";
import { api } from "../services/api";

export default function Manifesto(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Manifesto, Missão, Visão e Valores | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_estatuto.png"
        title="Manifesto, Missão, Visão e Valores"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        whiteSubtitle
        isTitleHighlighted
        tag="Novidades"
      />
      <ContentContainer>
        <h1 className="playfair title translate-highlight">
          Manifesto da Associação Brasileira de Psicologia Baseada em Evidências
        </h1>
        <Content>
          <h1 className="content-title">
            Breve resumo do texto Breve resumo do texto Breve resumo do texto
            Breve resumo do texto Breve resumo do texto Breve resumo do texto
            Breve resumo do texto Breve resumo do texto breve resumo do texto .
          </h1>
          <h2 className="datetime playfair">Publicado em 20/04/2022</h2>
          <hr />
          <p className="content-text">
            Ainda é tradição que a formação em Psicologia apresente uma grande
            diversidade de abordagens teóricas e terapêuticas, deixando a cargo
            do aluno a realização de uma escolha. O único critério pregado como
            relevante é o nível de afinidade e identificação pessoal que esse
            sente pela respectiva abordagem. Ao mesmo tempo, é pregado aos
            estudantes que todas as abordagens são igualmente dignas de
            confiança, mesmo que na realidade elas sejam inconsistentes e não
            tenham apoio em boas evidências científicas. Tudo isso é justificado
            com base em uma noção relativista sobre teorias psicológicas:
            supostamente, cada um teria a sua verdade sobre elas. Além disso, há
            um nítido desprezo pela tentativa de se fazer psicologia
            cientificamente, desprezo esse que se apoia em críticas descabidas,
            como a de que essa aproximação da ciência seria antiética, levaria à
            desconsideração da subjetividade e ao descaso com a saúde mental.
            Entretanto, essa visão, que reina soberana até então, não pode mais
            continuar inquestionada.
          </p>
          <p className="content-text">
            Somos um movimento de estudantes, profissionais e pesquisadores que
            levantam críticas sobre esses postulados e defendem uma Psicologia
            Baseada em Evidências. O que deve contar fundamentalmente para a
            escolha de uma intervenção ou teoria psicológica são as evidências
            que temos a favor das mesmas e não a mera preferência pessoal do
            psicólogo, tampouco o nome do autor ou a força da tradição. Desse
            modo, defendemos que um olhar crítico seja adotado sobre todas as
            teorias e intervenções presentes na Psicologia. Isso implica aceitar
            apenas aquilo que tivermos evidências mais fortes a favor, e
            abandonar tudo o que não possuir boas evidências para se sustentar
            ou que foi superado por outras alternativas que se mostrem mais bem
            fundamentadas.
          </p>
          <div className="quote">
            <p className="content-text">
              Defendemos que o embasamento científico não atrapalha a atividade
              do psicólogo. Muito distante disso, pensamos não haver
              possibilidade de se fazer psicologia responsavelmente sem ciência.
              Parte importante de ser ético enquanto psicólogo, considerar as
              subjetividades e contribuir positivamente para a saúde mental é
              justamente a adoção de uma Psicologia Baseada em Evidências. É com
              investigações robustas sobre o funcionamento psicológico humano
              que podemos compreender a subjetividade, para além dos meros
              relatos de casos anedóticos. É com provas de que intervenções
              realmente funcionam e fazem bem para os indivíduos é que podemos
              cuidar da saúde mental. É dando boas garantias para a população
              que as teorias e intervenções que adotamos são as mais confiáveis
              que temos para nos apoiar é que podemos ser éticos em nossa
              profissão.
            </p>
            <div className="box last">
              <img src="/images/open_quote_icon.svg" alt="Open Quote icon" />
              <p>
                É com investigações robustas sobre o funcionamento psicológico
                humano que podemos compreender a subjetividade, para além dos
                meros relatos de casos anedóticos. É com provas de que
                intervenções realmente funcionam e fazem bem para os indivíduos
                é que podemos cuidar da saúde mental.
              </p>
              <img
                className="close"
                src="/images/close_quote_icon.svg"
                alt="Close Quote icon"
              />
            </div>
          </div>
          <p className="content-text">
            Desse modo, a busca pelas melhores evidências disponíveis para
            teorias e intervenções é inevitável em nossa atividade profissional.
            A Psicologia não pode caminhar sem a ciência e a pesquisa de boa
            qualidade. Ainda assim, esse é apenas o primeiro passo quando
            estamos falando de práticas psicológicas. É imprescindível que todo
            uso das evidências científicas seja contextualizado com as
            evidências obtidas em setting; isto significa que tanto as
            preferências, características e contexto do paciente, quanto também
            a perícia profissional, ou seja, a experiência do psicólogo, devem
            ser levadas em consideração e integradas com as melhores evidências
            científicas disponíveis.
          </p>
          <p className="content-text">
            As preferências, características e contexto do paciente porque elas
            podem influenciar o julgamento profissional sobre qual intervenção
            deve ser adotada. Não adianta ter boas evidências científicas sobre
            a eficácia de uma dada intervenção sem que se saiba se ela se adequa
            à realidade e as particularidades de um cliente específico. Se
            houver boas evidências de que tratamentos com respiração ajudam a
            regular a ansiedade, mas o paciente em questão possui problemas
            respiratórios, essa intervenção pode não ser a melhor para ele.
            Nesse caso, é dever buscar aquilo que tem melhor respaldo empírico e
            que se adéque às suas particularidades.
          </p>
          <div className="quote">
            <div className="box first">
              <img src="/images/open_quote_icon.svg" alt="Open Quote icon" />
              <p>
                Defendemos a necessidade de uma revolução estrutural da maneira
                de se estudar e praticar Psicologia no Brasil, tendo como novo
                critério a adoção de teorias e práticas baseadas em evidências e
                a abolição do endosso de uma perspectiva não-paradigmática.
              </p>
              <img
                className="close"
                src="/images/close_quote_icon.svg"
                alt="Close Quote icon"
              />
            </div>
            <div>
              <p className="content-text">
                A perícia profissional porque não basta saber quais são as
                melhores evidências científicas e conhecer profundamente o
                cliente, se o profissional não souber de fato como aplicar esses
                conhecimentos. Saber como realizar as intervenções e dominar as
                competências necessárias para conduzi-las é algo indispensável
                para que a prática possa maximizar o bem-estar.
              </p>
              <p className="content-text">
                Isto significa que tanto a perícia profissional, quanto também
                as preferências, características e contexto do cliente devem ser
                levados em consideração e integrados com as melhores evidências
                científicas disponíveis. Quando isso ocorre, é possível afirmar
                que os princípios de uma Prática Baseada em Evidências estão
                sendo cumpridos. A Psicologia Baseada em Evidências zela por
                esses princípios e defendemos que todos os profissionais de
                psicologia também devam segui-los.
              </p>
            </div>
          </div>
          <p className="content-text">
            Acreditamos que a Psicologia, como profissão, tem como dever servir
            à sociedade que necessita de seus serviços dentro do campo
            psicológico. A população confia na Psicologia para auxiliar com as
            demandas de saúde mental; outras ciências confiam na Psicologia para
            fornecer conhecimento sobre o comportamento e cognição humanas; e o
            estado confia na Psicologia para orientar diversas políticas
            públicas e avaliar seus resultados práticos. Ao não fazermos nosso
            melhor para produzir teorias e intervenções muito bem embasadas e
            dignas de confiança, desonramos nosso compromisso e papel social
            enquanto psicólogos. Repassar à sociedade o que sabemos sobre
            Psicologia é uma tarefa extraordinária e única, mas que recai em uma
            enorme responsabilidade sobre tudo aquilo que defendemos e
            aplicamos.
          </p>
          <p className="content-text">
            Diante de um contexto de disseminação de desinformação, de
            institucionalização das pseudociências e de ativismo negacionista, a
            Psicologia Baseada em Evidências se posiciona como um princípio
            ético para o exercício da atividade do psicólogo e para o
            desenvolvimento científico de sua área de estudos que questiona a
            base relativista e anticientífica do modelo vigente. Defendemos a
            necessidade de uma revolução estrutural da maneira de se estudar e
            praticar Psicologia no Brasil, tendo como novo critério a adoção de
            teorias e práticas baseadas em evidências e a abolição do endosso de
            uma perspectiva não-paradigmática. De modo a tornar essa visão
            realidade, foi fundada a Associação Brasileira de Psicologia Baseada
            em Evidências, que terá como missão facilitar, disseminar e
            incentivar a adoção de teorias e práticas psicológicas baseadas em
            evidências, bem como criar um espaço para reunir a comunidade que
            defende os mesmos ideais. Desse modo, podemos sumarizar nossa
            missão, visão e valores da seguinte maneira:
          </p>
        </Content>
        <InfoContainer>
          <div className="info">
            <h1 className="playfair">Missão</h1>
            <div className="mission" />
          </div>
          <div className="info">
            <h1 className="playfair">Visão</h1>
            <div className="vision" />
          </div>
          <div className="info">
            <h1 className="playfair">Valores</h1>
            <div className="values" />
          </div>
        </InfoContainer>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await api.get("/manifesto");

  console.log(data);

  return {
    props: {},
  };
}
