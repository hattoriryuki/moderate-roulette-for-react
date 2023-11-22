import { FC, memo } from "react";

export const PrivacyContent: FC = memo(() => {
  return (
    <>
      <ul>
        <li>
          当サイトは、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。
        </li>
        <li>
          Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。
        </li>
        <li>
          トラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </li>
        <li>
          Cookieを無効にすれば、これらの情報の収集を拒否することができます。
        </li>
        <li>詳しくはお使いのブラウザの設定をご確認ください。</li>
      </ul>
      <div>
        本サービスに関するお問い合わせは、下記TwitterアカウントのDMまでお願いいたします。
        <br />
        <a
          href="https://twitter.com/messages/compose?recipient_id=1457235129190223872"
          target="_blank"
          className="text-teal-500 hover:underline"
        >
          @ryuki_runteq_27
        </a>
      </div>
      <br />
      <p>以上</p>
    </>
  );
});
