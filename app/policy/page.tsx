import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | B-SAM",
};

export default function Home() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">プライバシーポリシー</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. はじめに</h2>
        <p>NPO団体セイラビリティ三重 及び 濱口宝（以下「当団体」）は、提供するアプリケーション（以下「本アプリ」）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. 収集する情報</h2>
        <h3 className="text-lg font-medium mb-2">2.1 位置情報</h3>
        <p>本アプリは、ナビゲーション機能を提供するため、お客様の位置情報を取得します。取得した位置情報は、サービス提供に必要な範囲でのみ使用され、それ以外の目的では使用いたしません。</p>

        <h3 className="text-lg font-medium mb-2 mt-4">2.2 利用状況の収集</h3>
        <p>アプリの品質向上及び不具合の修正のため、匿名化された利用状況データやクラッシュレポートを収集することがあります。これらの情報からお客様個人を特定することはできません。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. 個人情報の管理</h2>
        <p>当団体は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、適切なセキュリティ対策を実施しています。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. 第三者提供</h2>
        <p>当団体は、お客様より取得した個人情報を、お客様の同意を得ることなく第三者に提供することはありません。ただし、法令に基づき開示が求められた場合を除きます。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. 免責事項</h2>
        <p>本アプリの利用により発生した損害について、当団体は責任を負いかねます。ただし、当団体の故意または重大な過失による場合を除きます。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. お問い合わせ窓口</h2>
        <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
        <p className="mt-2">メールアドレス：{contactEmail}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. 改定について</h2>
        <p>当団体は、必要に応じて本ポリシーを改定することがあります。改定した場合には、アプリ内またはウェブサイトでお知らせいたします。</p>
      </section>
    </main>
  );
}
