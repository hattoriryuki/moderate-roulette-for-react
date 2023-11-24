import { ComponentProps, FC, memo, useCallback } from "react";

import { ContactLink } from "../atoms/ContactLink";

type Props = ComponentProps<"li">;

const policyData = [
  "当サイトは、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。",
  "Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。",
  "トラフィックデータは匿名で収集されており、個人を特定するものではありません。",
  "Cookieを無効にすれば、これらの情報の収集を拒否することができます。",
  "詳しくはお使いのブラウザの設定をご確認ください。",
];

export const PrivacyContent: FC = memo(() => {
  const List = useCallback(
    ({ className, ...props }: Props) => <li {...props} className="my-2"></li>,
    []
  );

  return (
    <div className="text-gray-700">
      <ul className="text-lg">
        {policyData.map((data) => {
          return <List key={data}>{data}</List>;
        })}
      </ul>
      <div className="my-2">
        本サービスに関するお問い合わせは、下記TwitterアカウントのDMまでお願いいたします。
        <br />
        <ContactLink label="@ryuki_runteq_27" />
      </div>
      <br />
      <p>以上</p>
    </div>
  );
});
