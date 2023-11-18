import { FC, memo, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "80%",
    borderRadius: "8px",
    padding: 0,
    boxShadow: "2px 8px 21px -2px #777777",
  },
};

export const SecondaryModal: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  Modal.setAppElement("body");

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div>
        <header className="flex py-4 px-6">
          <p className="text-2xl text-[#0a2463] font-semibold">利用規約</p>
          <button
            className="text-gray-500 text-xl ml-auto"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>
        <div className="overflow-y-scroll max-h-[450px]">
          <ul>
            <div>
              この利用規約（以下、「本規約」といいます。）は、Moderate
              Roullet（以下、「当方」といいます。）
              がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
              登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
            </div>
            <div>
              <p>第1条（適用）</p>
              <div>
                本規約は、ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                当方は本サービスに関し、本規約のほか、ご利用にあたってのルール等、
                各種の定め（以下、「個別規定」といいます。）をすることがあります。
                これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、
                個別規定の規定が優先されるものとします。
              </div>
            </div>
            <div>
              <p>第2条（禁止事項）</p>
              <div>
                <p>
                  ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。但し、次の場合は除きます。
                </p>
                <ul>
                  <li>法令または公序良俗に違反する行為</li>
                  <li>
                    当方、本サービスの他のユーザー、
                    または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                  </li>
                  <li>当方のサービスの運営を妨害するおそれのある行為</li>
                  <li>
                    他のユーザーに関する個人情報等を収集または蓄積する行為
                  </li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>
                    当方のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
                  </li>
                  <li>
                    当方、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、
                    名誉その他の権利または利益を侵害する行為
                  </li>
                  <li>
                    以下の表現を含み、または含むと当方が判断する内容を本サービス上に投稿し、
                    または送信する行為以下の表現を含み、または含むと当方が判断する内容を本サービス上に投稿し、または送信する行為
                  </li>
                  <ul>
                    <li>過度に暴力的な表現</li>
                    <li>露骨な性的表現</li>
                    <li>
                      人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現
                    </li>
                    <li>自殺、自傷行為、薬物乱用を誘引または助長する表現</li>
                    <li>その他反社会的な内容を含み他人に不快感を与える表現</li>
                  </ul>
                  <li>以下を目的とし、または目的とすると当方が判断する行為</li>
                  <ul>
                    <li>
                      営業、宣伝、広告、勧誘、その他営利を目的とする行為（当方の認めたものを除きます。）
                    </li>
                    <li>性行為やわいせつな行為を目的とする行為</li>
                    <li>面識のない異性との出会いや交際を目的とする行為</li>
                    <li>
                      他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為
                    </li>
                    <li>
                      当方、本サービスの他のユーザー、または第三者に不利益、損害または不快感を与えることを目的とする行為
                    </li>
                    <li>
                      その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為
                    </li>
                  </ul>
                  <li>
                    その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為
                  </li>
                  <li>その他、当方が不適切と判断する行為</li>
                </ul>
              </div>
            </div>
            <div>
              <p>第3条（本サービスの提供の停止等）</p>
              <p>
                当方は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul>
                <li>
                  本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                </li>
                <li>
                  地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                </li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当方が本サービスの提供が困難と判断した場合</li>
              </ul>
              <p>
                当方は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
              </p>
            </div>
            <div>
              <p>第4条（著作権）</p>
              <p>
                ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、本サービスを利用し、投稿ないしアップロードすることができるものとします。
                ユーザーが本サービスを利用して投稿ないしアップロードした文章、画像、映像等の著作権については、当該ユーザーその他既存の権利者に留保されるものとします。ただし、当方は、本サービスを利用して投稿ないしアップロードされた文章、画像、映像等について、本サービスの改良、品質の向上、または不備の是正等ならびに本サービスの周知宣伝等に必要な範囲で利用できるものとし、ユーザーは、この利用に関して、著作者人格権を行使しないものとします。
                前項本文の定めるものを除き、本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権はすべて当方または当方にその利用を許諾した権利者に帰属し、ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます。）、伝送、配布、出版、営業使用等をしてはならないものとします。
              </p>
            </div>
            <div>
              <p>第5条（保証の否認および免責事項）</p>
              <p>
                当方は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                当方は、本サービスに起因してユーザーに生じたあらゆる損害について、当方の故意又は重過失による場合を除き、一切の責任を負いません。ただし、本サービスに関する当方とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
                前項ただし書に定める場合であっても、当方は、当方の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当方またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当方の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
                当方は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
              </p>
            </div>
            <div>
              <p>第6条（サービス内容の変更等）</p>
              <p>
                当方は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
              </p>
            </div>
            <div>
              <p>第7条（利用規約の変更）</p>
              <p>
                当方は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
              </p>
              <ul>
                <li>本規約の変更がユーザーの一般の利益に適合するとき。</li>
                <li>
                  本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
                </li>
              </ul>
              <p>
                当方はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
              </p>
            </div>
            <div>
              <p>第8条（通知または連絡）</p>
              <p>
                ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。
                当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
              </p>
            </div>
            <div>
              <p>第9条（権利義務の譲渡の禁止）</p>
              <p>
                ユーザーは、当方の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
              </p>
            </div>
            <div>
              <p>第10条（準拠法）</p>
              <p>本規約の解釈にあたっては、日本法を準拠法とします。</p>
            </div>
            <div>
              <p>第11条（お問い合わせ）</p>
              <p>
                本サービスに関するお問い合わせは、下記TwitterアカウントのDMまでお願いいたします。
              </p>
              <br />
              <p>@ryuki_runteq_27</p>
              <p>以上</p>
            </div>
          </ul>
        </div>
        <footer className="fixed bottom-0 right-0 py-4 px-6">
          <button className="px-4 bg-[#EDF2F7] leading-10 rounded-md">
            Close
          </button>
        </footer>
      </div>
    </Modal>
  );
});
