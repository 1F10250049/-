document.addEventListener('DOMContentLoaded', () => {

    // アニメーションさせたい要素を取得
    const target = document.getElementById('editors-section');

    // Intersection Observerのコールバック関数
    // entries: 監視対象の要素のリスト
    // observer: observer自身
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // isIntersectingプロパティで、要素が画面内に入ったか判定
            if (entry.isIntersecting) {
                // 画面内に入ったら is-visible クラスを追加
                entry.target.classList.add('is-visible');

                // 一度表示したら、もう監視する必要はないので監視を停止
                observer.unobserve(entry.target);
            }
        });
    };

    // Intersection Observer のオプション
    const options = {
        root: null, // ビューポートを基準にする
        rootMargin: '0px',
        threshold: 0.1 // 要素が10%見えたらトリガー
    };

    // Intersection Observer をインスタンス化
    const observer = new IntersectionObserver(callback, options);

    // 監視を開始
    observer.observe(target);

});