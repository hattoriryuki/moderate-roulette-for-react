import { ComponentProps, FC, memo, useCallback } from "react";

export const InitialContent: FC = memo(() => {
  const List = useCallback(
    ({ ...props }: ComponentProps<"li">) => (
      <li {...props} className="mb-2"></li>
    ),
    []
  );

  return (
    <div className="flex items-center p-4 text-gray-700 font-semibold">
      <ul>
        <List>
          日常のちょっとした迷いをルーレットで手軽に解決できるサービスです
        </List>
        <List>使い方はとてもシンプルで、ユーザー登録も必要ありません</List>
        <List>PCでもスマホでもご使用いただけます</List>
      </ul>
    </div>
  );
});
