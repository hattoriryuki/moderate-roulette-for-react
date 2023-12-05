import { FC, memo } from "react";

export const InitialContent: FC = memo(() => {
  return (
    <div className="flex items-center p-4 text-gray-700 font-semibold">
      <ul>
        <li className="mb-2">
          日常のちょっとした迷いをルーレットで手軽に解決できるサービスです
        </li>
        <li className="mb-2">
          使い方はとてもシンプルで、ユーザー登録も必要ありません
        </li>
        <li className="mb-2">PCでもスマホでもご使用いただけます</li>
      </ul>
    </div>
  );
});
