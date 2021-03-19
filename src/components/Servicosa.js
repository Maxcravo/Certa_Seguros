import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Saúde from '../imagens/saúde-img.png'
import Condomínios from '../imagens/condomínios-img.png'
import Empresarial from '../imagens/empresarial-img.png'
import Fiança from '../imagens/fiança-img.png'
import Vida from '../imagens/vida-img.png'
import carro from  "../imagens/carro.png"
import escritorio from "../imagens/escritorio.png"
import equipamento from "../imagens/equipamentos.png"
import aluguel from "../imagens/aluguel.png"
import residencia from "../imagens/resedencial.png"
import whats from "../imagens/whatsappimage.png"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from '../components/Servicosa.module.css';

export default function Serviços() {
    return (
        <div className={Styles.flex_container}> 
            <h1 className={Styles.title3} id="title2">Serviços e Produtos</h1>
            <div className={Styles.div_title}></div>
            <Accordion className={Styles.flexbox}>
                    <div className={Styles.card_container}>
                        <div className={Styles.left}>
                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" id={Styles.title}>
                                        <img src={Saúde} alt="Saúde" className={Styles.saude_img}></img>
                                        <span><strong>Plano de Saúde e Odontológico</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            A certa seguros, trabalha com as melhores seguradoras e operadoras de planos de saúde do país. Temos sempre uma opção com ampla
                                            rede de atendimento de hospitais, consultórios e laboratórios de ponta, e um orçamento que cabe no seu bolso.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" id={Styles.title}>
                                        <img src={Condomínios} alt="Condomínios" className={Styles.condo_img}></img>
                                        <span><strong>Seguro Condomínios</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            Pensando em todas as famílias que vivem em um condomínio e seu sindico, oferecemos o seguro para condomínios.
                                            Nesta modalidade as coberturas vão muito além das básicas (incêndio, raios, aeronaves, explosão...), cobrimos danos elétricos, responsabilidade civil do condomínio, responsabilidade civil da guarda de veículos, responsabilidade civil de portões e cancelas, responsabilidade civil do sindico, roubo, assistência 24 horas entre outras.
                                            Consulte-nos, mostre a necessidade do seu condomínio e teremos prazer em lhe mostrar o produto perfeito para os seus condôminos. 
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" id={Styles.title}>
                                        <img src={Empresarial} alt="Empresarial" className={Styles.empre_img}></img>
                                        <span><strong>Seguro Empresarial</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            Todos queremos ter um local de trabalho que transmita segurança, e é por isso que você e seus funcionários podem ficar tranquilos.
                                            Proteja sua empresa de imprevistos e riscos.
                                            Coberturas: incêndio, raio, explosões, vendaval, fumaça, danos elétricos, roubo, lucros cessantes, valores, vidros e anúncios luminosos, equipamentos eletrônicos entre outros.
                                            Fazendo um seguro empresarial, sua empresa pode contar com assistência 24 horas.
                                            Entre em contato conosco, solicite uma cotação, temos a total felicidade em atende-lo e oferecer um seguro que cabe na sua empresa.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" id={Styles.title}>
                                        <img src={Fiança} alt="Fiança" className={Styles.fiança_img}></img>
                                        <span><strong>Seguro Fiança Locatícia</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            Conseguir um fiador não é tão fácil, principalmente quando você se muda para uma cidade diferente ou não tem parentes e amigos que possam ajudar.
                                            A solução é o Seguro Fiança locatícia, com ele, fica mais fácil alugar um imóvel residencial ou comercial.
                                            O Seguro Fiança, substitui com vantagens o fiador ou caução, pois é a única garantia que paga ao proprietário do imóvel os valores de alugueis e encargos atrasados antes mesmo da decretação do despejo. Garante ao proprietário do imóvel o recebimento do aluguel e dos encargos vencidos caso o inquilino não pague.
                                            Para o inquilino, é o fim do constrangimento de buscar um fiador, além de uma série de vantagens, como mão de obra gratuita para pequenos reparos ou consertos no imóvel alugado.
                                            Para a imobiliária, representa redução de custos e facilidade operacional: a análise do cadastro do inquilino é feita pela Porto Seguro, eliminando assim trabalho e custo.
                                            Entre em contato conosco e faremos um excelente negócio!
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="4" id={Styles.title}>
                                        <img src={Vida} alt="Vida" className={Styles.vida_img}></img>
                                        <span><strong>Seguro e Acidentes Pessoais</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>                                            
                                            cuide de quem você ama e tenha benefícios em vida
                                            Aproveitar os bons momentos ao lado de quem é especial para você é uma das melhores coisas da vida. Para isso, ter um seguro de vida ou acidentes pessoais é essencial
                                        </p>
                                    </Card.Body >
                                </Accordion.Collapse>
                            </Card>
                        </div>

                        <div className={Styles.right}>
                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="5" id={Styles.title}>
                                        <img src={carro} className={Styles.carro_img} ></img>
                                        <span className={Styles.header_title}><strong>Seguro Automóvel</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            É um seguro que visa te passar a tranquilidade com seu carro. Existem planos flexíveis que vão sempre se adequar a sua necessidade.
                                            Coberturas: colisão, incêndio, roubo/furto.
                                            Indenizações: danos materiais e corporais, causados a terceiros (sejam eles passageiros do seu veiculo ou não).
                                            Adicionais: chaveiro, mecânico, reboque, eletricista, carro reserva, reboque entre outros.
                                            Faça sua cotação e veja com detalhes o pacote de vantagens de cada seguradora, seus opcionais e vantagens, além de descobrir a melhor forma de pagamento para cada uma.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>  
                            </Card>

                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="6" id={Styles.title}>
                                        <img src={escritorio} className={Styles.escrit_img} ></img>
                                        <span className={Styles.header_title}><strong>Seguro Consultórios e Escritórios</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            Deu duro para construir seu próprio negócio e quer cuidar bem dele? Com o seguro para escritórios e consultórios você pode ir para casa sossegado que seu patrimônio está garantido. A cobertura vai desde a mais simples (sem necessidade de vistoria) até a mais completa, oferecendo cobertura a incêndios, raios, explosões, despesas fixas, despesas de recomposição, danos elétricos, perda de renda liquida, roubo entre outros.
                                            E assim como na sua residência, pensamos que eventualidades acontecem e oferecemos chaveiro, eletricista, assistência hidráulica, mão de obra especializada, limpeza entre outros.
                                            Garanta a sua tranquilidade ao sair do seu negócio e solicite uma cotação. 
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>  
                            </Card>

                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="7" id={Styles.title}>
                                        <img src={equipamento} className={Styles.equipa_img} ></img>
                                        <span className={Styles.header_title}><strong>Seguro Equipamentos</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="7">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            Sempre que procuramos nos especializar e modernizar nos vemos recorrendo ao uso de novos equipamentos, por esta razão a Certa se preocupou em oferecer um seguro para esses equipamentos que nos ajudam a nos manter no topo.
                                            Se tranquilize com seu maquinário, a certa tem a cobertura que você precisa.
                                            Exemplos de equipamentos cobertos: tratores, colheitadeiras; Equipamentos industriais; Escavadeiras e outros equipamentos da área de construção; Equipamentos médicos para uso em hospitais e clinicas.
                                            A cobertura desses é por meio de indenização, seja por perda ou danos dos equipamentos (previamente descritos na apólice) que tenham sido por causa externa; roubo ou furto qualificado. Contate-nos e descubra quais coberturas adicionais podemos oferecer
                                            Seu equipamento não está listado? Entre em contato e veja se dispomos de um seguro que lhe atenda.
                                            É da área agrícola, pecuária, aquícola ou florestal? Temos vantagens para você, entre em contato e descubra.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>  
                            </Card>

                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="8" id={Styles.title}>
                                        <img src={residencia} className={Styles.resid_img} ></img>
                                        <span className={Styles.header_title}><strong>Seguro Residendcial</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="8">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            Seu patrimônio protegido e sua família com a certeza de que o lar não faltará.
                                            Cobrem mais de 15 eventos, incluindo danos elétricos e roubo.
                                            Sempre oferecemos a facilidade da escolha, seja por preço ou por cobertura, a Certa Seguros sempre terá um produto que lhe atende.
                                            Dentre os diversos planos temos até sem vistoria, assim como no seguro de autos, nos seguros residenciais também existe a assistência 24horas, que garantem chaveiro, mão de obra especializada entre outros.
                                            Faça sua cotação conosco e descubra qual seguro é o Certo para sua residência.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>  
                            </Card>

                            <Card className={Styles.card_certa}>
                                <Card.Header id={Styles.header}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="9" id={Styles.title}>
                                        <img src={aluguel} className={Styles.aluguel_img} ></img>
                                        <span className={Styles.header_title}><strong>Seguro Aluguel</strong></span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="9">
                                    <Card.Body className={Styles.card_body}>
                                        <p className={Styles.body_texto}>
                                            Você não precisa de fiador para alugar um imóvel, faça um título de capitalização.
                                            Você não precisa mais apresentar um fiador e nem passar por análise ou comprovação de renda para alugar um imóvel. Com o título de capitalização garantia de aluguel , inquilinos e proprietários garantem a locação com agilidade e o imóvel conta com serviços especiais.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>  
                            </Card>
                        </div>
                    </div>
            </Accordion>
            <div className={Styles.button}>
                        <a href="https://wa.me/5521983252114" className={Styles.botao}>
                            <button className={Styles.button_serviços} variant="banner">                           
                                <div className={Styles.quadrado}><img src={whats} alt="Lupa" className={Styles.icone}></img></div>
                                <p>
                                Faça sua cotação conosco
                                </p>
                            </button> 
                        </a>          

            </div>
        </div>
    )
} 
 
